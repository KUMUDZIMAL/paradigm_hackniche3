import { BrowserProvider, Contract } from 'ethers';
import contractABI from '../../contracts/MyContract.json'; // Adjust the path as needed

const contractAddress = '0x0b977df0cf6ed902d1daba9f499e9e60d995f787'; // Replace with your contract's address

export default async function initializeContract() {
  if (typeof window !== 'undefined' && window.ethereum) {
    try {
      const provider = new BrowserProvider(window.ethereum);
      await provider.send('eth_requestAccounts', []);
      const signer = await provider.getSigner();
      const myContract = new Contract(contractAddress, contractABI, signer);
      return myContract;
    } catch (error) {
      console.error('Error initializing contract:', error);
    }
  } else {
    console.error('MetaMask is not installed.');
  }
}
