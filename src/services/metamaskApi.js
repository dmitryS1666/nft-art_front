
import { createRaribleSdk } from "@rarible/sdk";
import { EthereumWallet } from "@rarible/sdk-wallet";
import { toOrderId} from "@rarible/types"
import { Web3Ethereum } from "@rarible/web3-ethereum"
// import WalletConnectProvider from "@walletconnect/web3-provider";
import Web3 from "web3";
// import Web3Modal from "web3modal";

// let web3;
// let accounts = [];

//   const providerOptions = {
//     walletconnect: {
//       package: WalletConnectProvider,
//       options: {
//         network: "matic", // here
//         rpc: {
//           137: "https://polygon-rpc.com"
//         }
//       }
//     }
//   };


//   const web3Modal = new Web3Modal({
//     network: "matic", // optional
//     cacheProvider: false, // optional
//     providerOptions // required
//   });


//   export const connectWallet = async () => {
//     web3Modal.clearCachedProvider();
//     const provider = await web3Modal.connect();
//     web3 = new Web3(provider);
//     accounts = await web3.eth.getAccounts();
//     console.log(accounts, "connected");
//     web3.eth.defaultAccount = accounts[0];
//   };

  export const connectNewWallet = async ( ) => {
    
    try {
      const newWallet = await window.ethereum.request({ method: "eth_requestAccounts" })
      if(newWallet) {
        localStorage.setItem('wallet_AccessToken', newWallet[0])
        return newWallet
          alert('Metamask is connected')
      }
    } catch (error) {
      alert(error.message)
    }
    
  }

  export const disconnectCurrentWallet = () => {
      try {
        const wallet_AccessToken = localStorage.getItem('wallet_AccessToken')
        if (wallet_AccessToken) {
          localStorage.removeItem('wallet_AccessToken')
          alert('Wallet is disconnected')
          return undefined
        }
      } catch (error) {
        alert('Something wen wrong', error)
      }
  }

    export const createEthWallet = () => {
        const web3 = new Web3(window.ethereum)
        const web3Ethereum = new Web3Ethereum({ web3 })
        const ethWallet = new EthereumWallet(web3Ethereum)
        return ethWallet
    }

    export async function buyNft( orderId='ETHEREUM:0x19f487016770542dc6137b06499a4f7b42c9580f12d85d6347964b03b7682143') {
       try {
          const wallet_AccessToken = localStorage.getItem('wallet_AccessToken')
          if(wallet_AccessToken) {
            const ethWallet = createEthWallet()
            const sdk = createRaribleSdk(ethWallet, "prod")
        
            // Get order info
            const buy = await sdk.order.buy.prepare({                           
            orderId: toOrderId(orderId) 
            })

            // Send transaction
            const result = await buy.submit({
              amount: 1,    
            })
          }
          if(!wallet_AccessToken) {
            alert('please connect the wallet')
          }
          
       } catch (error) {
          alert(error)
       }
      }
