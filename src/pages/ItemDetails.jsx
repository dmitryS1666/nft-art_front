import React, { useState } from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import { Link, useParams } from 'react-router-dom';
import 'react-tabs/style/react-tabs.css';
import liveAuctionData from '../assets/fake-data/data-live-auction';
import LiveAuction from '../components/layouts/LiveAuction';
// import img7 from '../assets/images/avatar/avt-2.jpg'
// import imgdetail1 from '../assets/images/box-item/images-item-details.jpg'
import { useEffect } from 'react';
import { getItemById, getItemsByCollectionId } from '../services/apiService';
import { buyNft } from '../services/metamaskApi';
// import { useParams } from 'react-router-dom';

const ItemDetails = () => {
    // const [dataHistory] = useState(
    //     [
    //         {
    //             img: img6,
    //             name:"Mason Woodward",
    //             time: "8 hours ago",
    //             price: "4.89 ETH",
    //             priceChange: "$12.246"
    //         }
    //     ]
    // )

     const {id} = useParams()   
     const [item, setItem] = useState('')
     const [currentCollection, setCurrentCollection] = useState([])

    useEffect(() => {
        getItem(id)
        getItems()
    }, [id])

    const getItem = (itemId) => {
        getItemById(itemId)
        .then(res => setItem(res))
    }

    const getItems = (collectionId, itemsQty) => {
        getItemsByCollectionId(collectionId, itemsQty)
        .then(res => {
            console.log(res);
            if(res && res.length > 0) {
                setCurrentCollection(res)
            }
        })
    }


    return (
        <div className='item-details'>
            <Header />
            <section className="flat-title-page inner">
                <div className="overlay"></div>
                <div className="themesflat-container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="page-title-heading mg-bt-12">
                                <h1 className="heading text-center">{item.name}</h1>
                            </div>
                            <div className="breadcrumbs style2">
                                <ul>
                                    <li><Link to="/">??????????????</Link></li>
                                    <li><Link to="/explore">????????</Link></li>
                                    <li>{item.name}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>                    
            </section>
            <div className="tf-section tf-item-details">
                <div className="themesflat-container">
                    <div className="row">
                        <div className="col-xl-9 col-md-12">
                            <div className="content-left">
                                <div className="media">
                                    <img src={item.img} />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-12">
                            <div className="content-right">
                                <div className="sc-item-details">
                                    <h2 className="style2">{item.name} </h2>
                                    <div className="meta-item">
                                        <div className="left">
                                            <span className="viewed eye">227</span>
                                            {/*<span to="/login" className="liked heart wishlist-button mg-l-8"><span className="number-like">{item.wishlist}</span></span>*/}
                                        </div>
                                        {/*<div className="right">*/}
                                        {/*    <Link to="#" className="share"></Link>*/}
                                        {/*    <Link to="#" className="option"></Link>*/}
                                        {/*</div>*/}
                                    </div>
                                    <div className="client-infor sc-card-product">
                                        <div className="meta-info">
                                            <div className="author">
                                                {/*<div className="avatar">*/}
                                                {/*    <img src={item.imgAuthor}  />*/}
                                                {/*</div>*/}
                                                <div className="info">
                                                    <span>???????????????? ??????????????????</span>
                                                    <h6> <Link to={`/authors-${item.collectionId}`}>{item.collectionName}</Link> </h6>
                                                </div>
                                            </div>
                                        </div>
                                        {/*<div className="meta-info">*/}
                                        {/*    <div className="author">*/}
                                        {/*        <div className="avatar">*/}
                                        {/*            <img src={item.imgAuthor}  />*/}
                                        {/*        </div>*/}
                                        {/*        <div className="info">*/}
                                        {/*            <span>??????????</span>*/}
                                        {/*            <h6> <Link to={`/authors-${item.collectionId}`}>{item.nameAuthor}</Link> </h6>*/}
                                        {/*        </div>*/}
                                        {/*    </div>*/}
                                        {/*</div>*/}
                                    </div>
                                    <p>{item.description}</p>
                                    <div className="meta-item-details style2">
                                        <div className="item meta-price">
                                            <span className="heading">?????????????? ????????</span>
                                            <div className="price">
                                                <div className="price-box">
                                                    <h5>{item.price}</h5>
                                                    <span>={item.type}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <Link to="#" className="sc-button loadmore style bag fl-button pri-3" onClick={() => buyNft()}><span>????????????</span></Link>
                                    {/* <button className="sc-button loadmore style bag fl-button pri-3">Place a bid</button> */}
                                    {/*<div className="flat-tabs themesflat-tabs">*/}
                                    {/*<Tabs>*/}
                                    {/*    <TabList>*/}
                                    {/*    <Tab>?????????????? ????????????</Tab>*/}
                                    {/*    <Tab>????????????????????</Tab>*/}
                                    {/*    <Tab>??????????????????????????</Tab>*/}
                                    {/*    </TabList>*/}

                                    {/*    <TabPanel>*/}
                                    {/*        <ul className="bid-history-list">*/}
                                    {/*        {*/}
                                    {/*            dataHistory.map((item, index) => (*/}
                                    {/*                <li key={index} item={item}>*/}
                                    {/*                    <div className="content">*/}
                                    {/*                        <div className="client">*/}
                                    {/*                            <div className="sc-author-box style-2">*/}
                                    {/*                                <div className="author-avatar">*/}
                                    {/*                                    <Link to="#">*/}
                                    {/*                                        <img src={item.img}  className="avatar" />*/}
                                    {/*                                    </Link>*/}
                                    {/*                                    <div className="badge"></div>*/}
                                    {/*                                </div>*/}
                                    {/*                                <div className="author-infor">*/}
                                    {/*                                    <div className="name">*/}
                                    {/*                                        <h6><Link to="/author-02">{item.name} </Link></h6> <span> place a bid</span>*/}
                                    {/*                                    </div>*/}
                                    {/*                                    <span className="time">{item.time}</span>*/}
                                    {/*                                </div>*/}
                                    {/*                            </div>*/}
                                    {/*                        </div>*/}
                                    {/*                        <div className="price">*/}
                                    {/*                            <h5>{item.price}</h5>*/}
                                    {/*                            <span>= {item.type}</span>*/}
                                    {/*                        </div>*/}
                                    {/*                    </div>*/}
                                    {/*                </li>*/}
                                    {/*            ))*/}
                                    {/*        }*/}
                                    {/*        </ul>*/}
                                    {/*    </TabPanel>*/}
                                    {/*    <TabPanel>*/}
                                    {/*        <ul className="bid-history-list">*/}
                                    {/*                <li>*/}
                                    {/*                    <div className="content">*/}
                                    {/*                        <div className="client">*/}
                                    {/*                            <div className="sc-author-box style-2">*/}
                                    {/*                                <div className="author-avatar">*/}
                                    {/*                                    <Link to="#">*/}
                                    {/*                                        <img src={img1} className="avatar" />*/}
                                    {/*                                    </Link>*/}
                                    {/*                                    <div className="badge"></div>*/}
                                    {/*                                </div>*/}
                                    {/*                                <div className="author-infor">*/}
                                    {/*                                    <div className="name">*/}
                                    {/*                                        <h6> <Link to="/author-02">Mason Woodward </Link></h6> <span> place a bid</span>*/}
                                    {/*                                    </div>*/}
                                    {/*                                    <span className="time">8 hours ago</span>*/}
                                    {/*                                </div>*/}
                                    {/*                            </div>*/}
                                    {/*                        </div>*/}
                                    {/*                    </div>*/}
                                    {/*                </li>*/}
                                    {/*        </ul>*/}
                                    {/*    </TabPanel>*/}
                                    {/*    <TabPanel>*/}
                                    {/*        <div className="provenance">*/}
                                    {/*            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. */}
                                    {/*                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, */}
                                    {/*                when an unknown printer took a galley of type and scrambled it to make a type specimen book. */}
                                    {/*                It has survived not only five centuries, but also the leap into electronic typesetting, */}
                                    {/*                remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, */}
                                    {/*                and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>*/}
                                    {/*        </div>*/}
                                    {/*    </TabPanel>*/}
                                    {/*</Tabs>*/}
                                    {/*</div>*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <LiveAuction data={liveAuctionData} currentCollection={currentCollection}/>
            <Footer />
        </div>
    );
}

export default ItemDetails;
