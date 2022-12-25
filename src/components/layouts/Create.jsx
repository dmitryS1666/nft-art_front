import React from 'react';
import { Link } from 'react-router-dom'
import icon1 from '../../assets/images/icon/Wallet.png'
import icon2 from '../../assets/images/icon/Category.png'
import icon3 from '../../assets/images/icon/Image2.png'
import icon4 from '../../assets/images/icon/Bookmark.png'

const Create = () => {
    const data = [
        {
            title: "Подключайте свой кошелек",
            description: "Кошелек, который работает для покупки NFT. На данный момент у вас может быть учетная запись Metamask, но очень немногие на самом деле настроены для покупки NFT.",
            icon : icon1,
            colorbg : "icon-color1"
        },
        {
            title: "Создавайте свои коллекции",
            description: "Создать свою коллекцию NFT и создать NFT очень просто!",
            icon : icon2,
            colorbg : "icon-color2"
        },
        {
            title: "Добавляйте NFT",
            description: "Создавайте, творите и добавляйте новые NFT в свои коллекции",
            icon : icon3,
            colorbg : "icon-color3"
        },
        {
            title: "Выставляйте их для продажи",
            description: "Выбирайте между аукционами, листингами с фиксированной ценой и листингами со снижающимися ценами. Вы сами выбираете, как вы хотите продавать свои NFT!",
            icon : icon4,
            colorbg : "icon-color4"
        },
    ]
    return (
        <section className="tf-box-icon create style1 tf-section">
            <div className="themesflat-container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="heading-live-auctions mg-bt-22">
                            <h2 className="tf-title pb-17">
                                Создавайте и продавайте свои NFT</h2>
                        </div>
                    </div>
                    {
                        data.map((item , index) => (
                            <CreateItem key={index} item={item} />
                        ))
                    }
                </div>                 
            </div>
        </section>
    );
}

const CreateItem = props => (
    <div className='col-lg-3 col-md-6 col-12'>
        <div className="sc-box-icon">
            <div className="image">
                <div className={`icon-create ${props.item.colorbg}`}>
                    <img src={props.item.icon} alt="" />
                </div>                                                                             
            </div>
            <h3 className="heading"><Link to="/wallet-connect">{props.item.title}</Link></h3>
            <p className="content">{props.item.description}</p>
        </div>
    </div>
)

export default Create;
