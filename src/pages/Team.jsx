import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import img1 from "../assets/images/avatar/pepel.png";
import img2 from "../assets/images/avatar/alex.png";
import img3 from "../assets/images/avatar/vasy.jpg";
import img4 from "../assets/images/avatar/dima.jpg";
import img5 from "../assets/images/avatar/rusl.png";

const Contact = () => {
    const [data] = useState(
        [
            {
                icon: img1,
                title: 'Павел',
                sub_title: 'Основатель и руководитель студии\n “Art Project Studio”',
                description: 'Профессиональный художник и педагог\n' +
                    'Окончил МХУ им. А.К. Глебова по специальности “Станковая живопись”\n' +
                    'Стилистика работ: абстракция, постимпрессионизм, символизм, коллаж, графика и граффити\n' +
                    '\n' +
                    'Участник международных выставок в Кракове\n' +
                    'Картины Павла размещены в галереях Санкт-Петербурга, Москвы, Екатеринбурга, а также в частных коллекциях\n' +
                    'Творческий псевдоним - Pavel Pepel\n' +
                    'Увлекается хокку и танка\n' +
                    '\n' +
                    'Считает детский абстрактный рисунок недооцененной ценностью в нашем обществе'
            },
            {
                icon: img2,
                title: 'Александр',
                sub_title: 'Сертифицированный бизнес – коуч (ICU), коуч первых лиц компаний (executive коуч)',
                description: 'Основатель маркетинговой студии inaweb.by, оказывающей услуги разработки и стратегического маркетинга по всему миру\n' +
                    'С 2015 года является коучем для предпринимателей, консультантирует бизнес и успешно управляет своей компанией\n' +
                    'Автор 6 научных публикаций по взаимодействию человека с компьютером'
            },
            {
                icon: img3,
                title: 'Василий',
                sub_title: 'Chief Communications Officer,\n Whitebird',
                description: 'Председатель Совета Ассоциации «Технологии Распределенных Реестров» (http://blockchainbelarus.by/) Республики Беларусь.\n' +
                    'Регулярный спикер на крипто, финтех и банковских конференциях.\n' +
                    'В начале 2022 года командой Whitebird.io (https://whitebird.io/ru-BY/) был выведен на рынок еще и криптокошелёк BITCASH, который ' +
                    'представляет собой мобильное приложение (Android, iOS) с функциями покупки, продажи, обмена, некастодиального хранения и формирования портфеля криптоактивов.'
            },
            {
                icon: img5,
                title: 'Руслан',
                sub_title: 'Smart Business Funnel',
                description: ' Автоматизация бизнес процессов.'
            },
            {
                icon: img4,
                title: 'Дмитрий',
                sub_title: 'Full-stack разработчик',
                description: 'Разработчик с опытом тестирования, разработки и бизнес-анализа более 11 лет.\n'
            }

        ]
    )
    return (
        <div>
            <Header/>
            <section className="flat-title-page inner">
                <div className="overlay"></div>
                <div className="themesflat-container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="page-title-heading mg-bt-12">
                                <h1 className="heading text-center">Команда</h1>
                            </div>
                            <div className="breadcrumbs style2">
                                <ul>
                                    <li><Link to="/">Главная</Link></li>
                                    <li>Команда</li>
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
                                <div className="sc-box-icon-inner item-style-2">
                                    {
                                        data.map((item, index) => (
                                            <div className='col-lg-6 col-md-6 col-12' style={{paddingBottom: 30 + 'px'}}>
                                                <div className="sc-box-icon">
                                                    <div className="image">
                                                        <img src={item.icon} alt=""/>
                                                    </div>
                                                    <h3 className="heading">{item.title}</h3>
                                                    <h5 className="heading">{item.sub_title}</h5>
                                                    <p className="content">{item.description}</p>
                                                </div>
                                            </div>
                                        ))
                                    }

                                </div>
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
            <Footer/>
        </div>
    );
}

export default Contact;
