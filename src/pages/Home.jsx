import React from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import heroSliderData from '../assets/fake-data/data-slider';
import Slider from '../components/slider/Slider';
import TodayPicks from '../components/layouts/TodayPicks';
// import todayPickData from '../assets/fake-data/data-today-pick';
import PopularCollection from '../components/layouts/PopularCollection';
// import popularCollectionData from '../assets/fake-data/data-popular-collection';
import Create from '../components/layouts/Create';
import { useState } from 'react';
import { useEffect } from 'react';
import { getItemsByCollectionId } from '../services/apiService';

const Home = () => {

    const [sliderData, setSliderData] = useState({})


    const [currentCollection, setCurrentCollection] = useState([])


    useEffect(() => {
        getItems()
    }, [])

    const getItems = (collectionId, itemsQty) => {
        getItemsByCollectionId(collectionId, itemsQty)
        .then(res => {
            if(res && res.length > 0) {
                setCurrentCollection(res)
                setSliderData(res[0])
            }
        })
    }

    return (
        <div className='home-1'>
            <Header />
            <Slider data={heroSliderData} sliderItemData={sliderData}/>
            <TodayPicks data={currentCollection}/>
            {/*<PopularCollection data={currentCollection} />*/}
            <Create />
            <Footer />
        </div>
    );
}

export default Home;
