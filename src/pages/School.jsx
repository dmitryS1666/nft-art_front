import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom'
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import {getItemsByCollectionId} from "../services/apiService";
import TodayPicks from "../components/layouts/explore/TodayPicks";

const School = () => {

    const [currentCollection, setCurrentCollection] = useState([])

    useEffect(() => {
        getItems()
    }, [])

    const getItems = (collectionId, itemsQty) => {
        getItemsByCollectionId(collectionId, itemsQty)
            .then(res => {
                console.log(res);
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
                                <h1 className="heading text-center">Художественная школа #N</h1>
                            </div>
                            <div className="breadcrumbs style2">
                                <ul>
                                    <li><Link to="/">Главная</Link></li>
                                    <li>Художественная школа #N</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>                    
            </section>
            <section className="tf-contact tf-section">
                <div className="themesflat-container">
                    <div className="row">
                        <div className="col-12">
                            <div className="flat-form">
                                <h2 className="tf-title-heading ct style-2 mg-bt-12">
                                    Наша школа проводит голосование!<br/>
                                    Проголосовать может любой гость нашего портала
                                </h2>
                                <div className="timer">
                                    <div className="timer__items">
                                        <div className="timer__item timer__days">00</div>
                                        <div className="timer__item timer__hours">00</div>
                                        <div className="timer__item timer__minutes">00</div>
                                        <div className="timer__item timer__seconds">00</div>
                                    </div>
                                </div>
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

export default School;
