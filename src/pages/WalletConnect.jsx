import React , { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import img1 from '../assets/images/icon/connect-1.png'
import { connectNewWallet, disconnectCurrentWallet } from '../services/metamaskApi';
// import { buyNft } from '../services/ethersWalletService';
// import { connectWallet } from '../services/metamaskApi';

const WalletConnect = () => {

    const [data] = useState(
        [
            {
                img: img1,
                title: 'Meta Mask'//,
                // description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'
            }
        ]
    )

    const [wallet, setWallet] = useState('')

    useEffect(() => {
        const wallet_AccessToken = localStorage.getItem('wallet_AccessToken')
        setWallet(wallet_AccessToken)
    }, [])

    const connectWallet = () => {
        connectNewWallet()
        .then(res => res ? setWallet(res) : setWallet(''))
        
    }

    const disconnectWallet = () => {
        setWallet(disconnectCurrentWallet())
    }

    // const connectNewWallet = async ( ) => {
    //     const newWallet = await window.ethereum.request({ method: "eth_requestAccounts" })
    //     if(newWallet) {
    //         alert('Metamask is connected')
    //     }
    //     setWallet(newWallet[0])
    // }

    return (
        <div>
            <Header />
            <section className="flat-title-page inner">
                <div className="overlay"></div>
                <div className="themesflat-container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="page-title-heading mg-bt-12">
                                <h1 className="heading text-center">Подключить кошелек</h1>
                            </div>
                            <div className="breadcrumbs style2">
                                <ul>
                                    <li><Link to="/">Главная</Link></li>
                                    <li>Подключение кошелька</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>                    
            </section>
            <div className="tf-connect-wallet tf-section">
                <div className="themesflat-container">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="tf-title-heading ct style-2 mg-bt-12">
                                Подключить кошелек
                            </h2>
                            <h5 className="sub-title ct style-1 pad-400">
                                Метамаск – это некастодиальный (внебиржевой) криптокошелёк который позволяет получать, хранить и отправлять криптовалютные активы.
                                Кошелек Metamask существует как расширение для браузеров семейства Google Chrome и приложение для смартфона.
                                Разработчикам кошелька выступает компания «ConsenSys», которая впервые представила его в 2016 году.
                            </h5>
                        </div>
                        <div className="col-md-12">
                            <div className="sc-box-icon-inner style-2">
                                {
                                    data.map((item,index) => (
                                        <div key={index} className="sc-box-icon">
                                            <div className="img">
                                                <img src={item.img} />
                                            </div>
                                            {/* <h4 className="heading"><Link to="/login">{item.title}</Link> </h4> */}
                                            <h4 className="heading" >{item.title}</h4>
                                            <p className="content">{item.description}</p>
                                            
                                            <a className='sc-button header-slider style style-1 wallet fl-button pri-1' onClick={() => wallet ? disconnectWallet() : connectWallet() }>
                                                <span>
                                                    {wallet ? 'Отключить' : 'Подключить'}
                                                </span>
                                            </a>
                                         </div>
                                    ))
                                }
                            </div>  
                        </div>    
                    </div>              
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default WalletConnect;
