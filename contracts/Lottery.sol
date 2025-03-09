// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

/**
 * @title Lottery
 * @notice A simple decentralized lottery system.
 * Users buy tickets by sending a fixed amount of Ether. All funds accumulate in the contract.
 * When the lottery is ended by the owner, a pseudo‑random winner is selected and receives the entire prize pool.
 */
contract Lottery {
    // Owner of the contract
    address public owner;
    
    // Array storing each ticket buyer's address
    address[] public tickets;
    
    // Price per ticket in wei
    uint256 public ticketPrice;
    
    // Lottery state variables
    bool public lotteryActive;
    uint256 public lotteryRound;
    address public recentWinner;
    
    // Events for transparency and UI updates
    event LotteryStarted(uint256 round);
    event TicketPurchased(address indexed buyer, uint256 amount);
    event LotteryEnded(uint256 round, uint256 prizePool);
    event WinnerSelected(address indexed winner, uint256 prizePool, uint256 round);
    
    /**
     * @notice Constructor to initialize the lottery.
     * @param _ticketPrice The fixed price for each lottery ticket (in wei).
     */
    constructor(uint256 _ticketPrice) {
        owner = msg.sender;
        ticketPrice = _ticketPrice;
        lotteryRound = 1;
        lotteryActive = false;
    }
    
    /**
     * @notice Modifier to restrict functions to the owner.
     */
    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can call this function.");
        _;
    }
    
    /**
     * @notice Starts a new lottery round.
     * Only the owner can start the lottery.
     */
    function startLottery() external onlyOwner {
        require(!lotteryActive, "Lottery is already active");
        lotteryActive = true;
        // Clear previous round's tickets
        delete tickets;
        emit LotteryStarted(lotteryRound);
    }
    
    /**
     * @notice Allows users to buy a lottery ticket by sending exactly the ticketPrice in Ether.
     */
    function buyTicket() external payable {
        require(lotteryActive, "Lottery is not active");
        require(msg.value == ticketPrice, "Incorrect Ether amount");
        tickets.push(msg.sender);
        emit TicketPurchased(msg.sender, msg.value);
    }
    
    /**
     * @notice Ends the lottery and selects a winner using pseudo‑randomness.
     * Only the owner can end the lottery.
     */
    function endLottery() external onlyOwner {
        require(lotteryActive, "Lottery is not active");
        require(tickets.length > 0, "No tickets purchased");
        lotteryActive = false;
        emit LotteryEnded(lotteryRound, address(this).balance);
        
        // Generate a pseudo‑random number (NOT secure for production)
        uint256 randomNumber = uint256(
            keccak256(
                abi.encodePacked(block.timestamp, block.difficulty, tickets.length)
            )
        );
        uint256 winnerIndex = randomNumber % tickets.length;
        recentWinner = tickets[winnerIndex];
        uint256 prizePool = address(this).balance;
        
        // Transfer the entire prize pool to the selected winner
        (bool success, ) = recentWinner.call{value: prizePool}("");
        require(success, "Transfer failed");
        
        emit WinnerSelected(recentWinner, prizePool, lotteryRound);
        lotteryRound++;
    }
    
    /**
     * @notice Returns the number of tickets purchased in the current lottery round.
     */
    function getTicketsCount() external view returns (uint256) {
        return tickets.length;
    }
    
    /**
     * @notice Returns the current prize pool (the contract's Ether balance).
     */
    function getPrizePool() external view returns (uint256) {
        return address(this).balance;
    }
    
    // Fallback function to accept Ether if sent directly to the contract.
    receive() external payable {}
}
