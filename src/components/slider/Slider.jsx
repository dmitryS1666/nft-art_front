import React from 'react';
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import "swiper/swiper-bundle.css";
import shape1 from '../../assets/images/backgroup-secsion/bg-gradient1.png'
import shape2 from '../../assets/images/backgroup-secsion/bg-gradient2.png'
import shape3 from '../../assets/images/backgroup-secsion/bg-gradient3.png'
import imgbg from '../../assets/images/backgroup-secsion/img_bg_page_title.jpg'
import img_top from '../../assets/images/slider/bg-top.png'
import {useEffect} from 'react';

const Slider = props => {
    const data = props.data
    const itemData = props.sliderItemData

    useEffect(() => {
    }, [itemData])

    return (
        <div className="mainslider">
            {/*<img className="bgr-gradient gradient1 img_top" src={img_top}/>*/}
            <div className="img_top">
                {/*<div className='top_text'>*/}
                {/*    <p>*/}
                {/*        ПЕРВАЯ ШКОЛА ОБУЧЕНИЯ<br/>*/}
                {/*        БЛОКЧЕЙН ТЕХНОЛОГИИ ДЛЯ ДЕТЕЙ!*/}
                {/*    </p>*/}
                {/*    <p>*/}
                {/*        ВАШ РЕБЕНОК СМОЖЕТ ПОНЯТЬ КАК ПОЛЬЗОВАТЬСЯ ТЕХНОЛОГИЕЙ.<br/>*/}
                {/*        ОБУЧИМ ФИНАНСОВОЙ ГРАМОТНОСТИ*/}
                {/*    </p>*/}
                {/*</div>*/}
            </div>
            {/*<Swiper*/}
            {/*    modules={[Navigation,  Scrollbar, A11y ]}*/}
            {/*        spaceBetween={0}*/}
            {/*        // slidesPerView={1}*/}
            {/*        // navigation*/}
            {/*        scrollbar={{ draggable: false }}*/}
            {/*    >*/}
            {/*    {*/}
            {/*        data.map((item, index) => (*/}
            {/*            <SwiperSlide key={index} className={item.class}>*/}
            {/*                <SliderItem item={item} itemData={itemData}/>*/}
            {/*            </SwiperSlide>*/}
            {/*            */}
            {/*        ))*/}
            {/*    }*/}
            {/*</Swiper>*/}
        </div>
    );
}

Slider.propTypes = {
    data: PropTypes.array.isRequired,
    control: PropTypes.bool,
    auto: PropTypes.bool,
    timeOut: PropTypes.number
}
const SliderItem = props => (
    <div className="flat-title-page" style={{backgroundImage: `url(${imgbg})`}}>

        <img className="bgr-gradient gradient1" src={shape1}/>
        <img className="bgr-gradient gradient2" src={shape2}/>
        <img className="bgr-gradient gradient3" src={shape3}/>
        <div className="shape item-w-16"></div>
        <div className="shape item-w-22"></div>
        <div className="shape item-w-32"></div>
        <div className="shape item-w-48"></div>
        <div className="shape style2 item-w-51"></div>
        <div className="shape style2 item-w-51 position2"></div>
        <div className="shape item-w-68"></div>
        <div className="overlay"></div>
        <div className="swiper-container mainslider home">
            <div className="swiper-wrapper">
                <div className="swiper-slide">
                    <div className="slider-item">
                        <div className="themesflat-container ">
                            <div className="wrap-heading flat-slider flex">
                                <div className="content">
                                    <h2 className="heading">{props.item.title_1}</h2>
                                    <h1 className="heading mb-style"><span
                                        className="tf-text s1">{props.item.title_2}</span>
                                    </h1>
                                    <h1 className="heading">{props.itemData.name}</h1>
                                    <p className="sub-heading">{props.itemData.description}
                                    </p>
                                    <div className="flat-bt-slider flex style2">
                                        <Link to="/explore"
                                              className="sc-button header-slider style style-1 rocket fl-button pri-1"><span>Исследуй
                                        </span></Link>
                                    </div>
                                </div>
                                <div className="image">
                                    <img className="img-bg" src={props.item.imgbg}/>
                                    <img className="img-bg" src={props.itemData.img}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

)
export default Slider;
