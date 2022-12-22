import { createRaribleSdk } from "@rarible/sdk";
import { EthereumWallet } from "@rarible/sdk-wallet";
import { toOrderId} from "@rarible/types"
import { ethers } from "ethers"
import { EthersEthereum, EthersWeb3ProviderEthereum } from "@rarible/ethers-ethereum"



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
//     return web3.eth.defaultAccount = accounts[0];
//   };

    export const connectWal = async() => {
        const walletKey = await window.ethereum.request(({ method: "eth_requestAccounts" }))
    }

    // export const createEthWallet =  () => {
            
    //         const ethersWeb3Provider = new ethers.providers.Web3Provider(window.ethereum)
    //         const ethersProvider = new EthersEthereum(new ethers.Wallet(walletKey, ethersWeb3Provider))
    //         const ethWallet = new EthereumWallet(ethersProvider)
    //         return ethWallet
    // }

    export async function buyNft(wallet, orderId) {
        const sdk = createRaribleSdk(wallet, "prod")
    
        // Get order info
        const buy = await sdk.order.buy.prepare({                           
        orderId: toOrderId(orderId) 
        })

        // Send transaction
        const result = await buy.submit({
        amount: 1,    //amount of NFTs you want to buy
    })
    // console.log(result);
    }

    
