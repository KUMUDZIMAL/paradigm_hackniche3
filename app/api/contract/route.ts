// Import ethers and the ABI
import { BrowserProvider, Contract } from 'ethers';
import contractABI from '../../../contracts/MyContract.json';

// Function to initialize the contract
export async function initializeContract() {
  // Check if window.ethereum is available (MetaMask)
  if (typeof window !== 'undefined' && window.ethereum) {
    try {
      // Initialize a provider (user wallet)
      const provider = new BrowserProvider(window.ethereum);

      // Request account access if needed
      await provider.send('eth_requestAccounts', []);

      // Create a signer (to sign transactions)
      const signer = await provider.getSigner();

      // Define the deployed contract address (from Remix)
      const contractAddress = '0xc8b8a2f4c02a6d1bd78911eedcac97e34e2ba10e';

      // Create a contract instance to interact with
      const myContract = new Contract(contractAddress, contractABI, signer);
console.log("metamask done")
      // Return the contract instance for further use
      return myContract;
    } catch (error) {
      console.error('Error initializing contract:', error);
    }
  } else {
    console.error('Please install MetaMask.');
  }
}
