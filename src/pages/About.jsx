import React from 'react';
import { Link } from 'react-router-dom'
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

const Contact = () => {
    return (
        <div>
            <Header />
            <section className="flat-title-page inner">
                <div className="overlay"></div>
                <div className="themesflat-container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="page-title-heading mg-bt-12">
                                <h1 className="heading text-center">О нас</h1>
                            </div>
                            <div className="breadcrumbs style2">
                                <ul>
                                    <li><Link to="/">Главная</Link></li>
                                    <li>О нас</li>
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
                                    NFTart
                                </h2>
                                <h5 className="sub-title ct style-1 pad-0-15">
                                    интерактивная площадка для творчества. <br/>Это место где дети могут выражать себя через абстрактный рисунок.<br/>
                                    Мы хотим отвлечь детей от бесполезного просиживания в гаджетах, из-за которых они теряют связь с реальностью.<br/>
                                    Вместо этого ー научить видеть красивое, развивать свой мир и креативное мышление.<br/>
                                    К тому же, мы понимаем, что иногда родители не успевают уделять достаточно времени своим гениям из-за работы и бытовых дел...<br/><br/>

                                    Наш проект компенсирует этот разрыв и сближает родителей и детей в одной метавселенной!<br/><br/>

                                    В итоге, дети начнут творить своими руками, обретут общее увлечение со своими родителями и даже поймут, как монетизировать свой труд.<br/><br/>
                                    А также на нашем курсе каждый ребенок получит практический навык работы с крипто-кошельком.<br/>
                                    Наиболее удачная работа будет продана на маркетплейсе и, если не сторонним покупателем, то нами<br/>
                                    (за условные деньги , только для практики)
                                </h5>
            {/*                    <div className="form-inner">*/}
            {/*                        <form id="contactform" noValidate="novalidate" className="form-submit">*/}
            {/*                            <input id="name" name="name" tabIndex="1" aria-required="true" required type="text" placeholder="Your Full Name" />*/}
            {/*                            <input id="email" name="email" tabIndex="2"  aria-required="true" required type="email" placeholder="Your Email Address" />*/}
            {/*                             <div className="row-form style-2">*/}
            {/*                                <select id="subject">*/}
            {/*                                    <option value="1">Select subject</option>*/}
            {/*                                    <option value="2">Select subject</option>*/}
            {/*                                    <option value="3">Select subject</option>*/}
            {/*                                </select>*/}
            {/*                                <i className="icon-fl-down"></i>*/}
            {/*                             </div>*/}
            {/*                            <textarea id="message" name="message" tabIndex="3" aria-required="true" required placeholder="Message"></textarea>*/}
            {/*                            <button className="submit">Send message</button>*/}
            {/*                        </form>*/}
            {/*                    </div>*/}

                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default Contact;
