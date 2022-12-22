import React from 'react';
import { Link } from 'react-router-dom'
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import TodayPicks from '../components/layouts/explore/TodayPicks'
// import todayPickData from '../assets/fake-data/data-today-pick';
import { useState } from 'react';
import { useEffect } from 'react';
import { getItemsByCollectionId } from '../services/apiService';

const Explore = () => {

    const [currentCollection, setCurrentCollection] = useState([])


    useEffect(() => {
        getItems()
    }, [])

    const getItems = (collectionId, itemsQty) => {
        getItemsByCollectionId(collectionId, itemsQty)
        .then(res => {
            if(res.length > 0) {
                setCurrentCollection(res)
            }
        })
    }
    return (
        <div>
            <Header />
            <section className="flat-title-page inner">
                <div className="overlay"></div>
                <div className="themesflat-container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="page-title-heading mg-bt-12">
                                <h1 className="heading text-center">Explore</h1>
                            </div>
                            <div className="breadcrumbs style2">
                                <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li>Explore</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>                    
            </section>
            <TodayPicks data={currentCollection} />
            <Footer />
        </div>
    );
}


export default Explore;
