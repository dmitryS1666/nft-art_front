import React , { useEffect, useState} from 'react';
import { Link, useParams } from 'react-router-dom';
import 'react-tabs/style/react-tabs.css';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import CardModal from '../components/layouts/CardModal';

import { getItemsByCollectionId } from '../services/apiService';
import { Fragment } from 'react';


const Authors = () => {
    const [visible , setVisible] = useState(8);
    const showMoreItems = () => {
        setVisible((prevValue) => prevValue + 4);
    }

    const [modalShow, setModalShow] = useState(false);
    const { id } = useParams()
    const [collection, setCollection] = useState([])
    useEffect(() => {
        getItems(id)

    }, [id])

    const getItems = (id) => {
        getItemsByCollectionId(id)
        
        .then(res => {
            console.log(res);
            if(res !== 'undefined' && res.length > 0) {
                setCollection(res)
            }
        })
    }

    return (
        <div className='authors-2'>
            <Header />
            <section className="flat-title-page inner">
                <div className="overlay"></div>
                <div className="themesflat-container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="page-title-heading mg-bt-12">
                                <h1 className="heading text-center">Автор</h1>
                            </div>
                            <div className="breadcrumbs style2">
                                <ul>
                                    <li><Link to="/">Главная</Link></li>
                                    <li>Автор</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="tf-section authors">
                <div className="themesflat-container">
                    <div className="flat-tabs tab-authors">
                        <div className="author-profile flex">
                            <div className="feature-profile">
                                <img src={collection[0]?.imgAuthor} className="avatar" />
                            </div>
                            <div className="infor-profile">
                                <span>Профиль автора</span>
                                <h2 className="title">{collection[0]? collection[0].nameAuthor : 'Name'}</h2>
                                {/*<p className="content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit.</p>*/}
                                <form>
                                    <input type="text" className="inputcopy" defaultValue={collection[0]? collection[0].collectionId : ''} readOnly />
                                    <button type="button" className="btn-copycode"><i className="icon-fl-file-1"></i></button>
                                </form>
                            </div>
                            {/*<div className="widget-social style-3">*/}
                            {/*    <ul>*/}
                            {/*        <li><Link to="#"><i className="fab fa-twitter"></i></Link></li>*/}
                            {/*        <li className="style-2"><Link to="#"><i className="fab fa-telegram-plane"></i></Link></li>*/}
                            {/*        <li><Link to="#"><i className="fab fa-youtube"></i></Link></li>*/}
                            {/*        <li className="mgr-none"><Link to="#"><i className="icon-fl-tik-tok-2"></i></Link></li>*/}
                            {/*    </ul>*/}
                            {/*    <div className="btn-profile"><Link to="/login" className="sc-button style-1 follow">Follow</Link></div>*/}
                            {/*</div>*/}
                        </div>
                        <Fragment>
      <section className="tf-section sc-explore-1">
        <div className="themesflat-container">
          <div className="row">
            {collection.slice(0, visible).map((item, index) => (
              <div
                key={index}
                className="fl-item col-xl-3 col-lg-4 col-md-6 col-sm-6"
              >
                <div
                  className={`sc-card-product ${
                    item.feature ? "comingsoon" : ""
                  } `}
                >
                  <div className="card-media">
                    <Link to={`/item-details-${item.id}`}>
                      <img src={item.img} />
                    </Link>
                    <Link to="/login" className="wishlist-button heart">
                      <span className="number-like">{item.wishlist ? item.wishlist : 'wishlist 100'}</span>
                    </Link>
                    <div className="coming-soon">{item.feature ? item.feature : 'feature'}</div>
                  </div>
                  <div className="card-title">
                    <h5 className="style2">
                      <Link to={`/item-details-${item.id}`}>"{item.name}"</Link>
                    </h5>
                  </div>
                  <div className="meta-info">
                    <div className="author">
                      <div className="avatar">
                        <img src={item.imgAuthor ? item.imgAuthor : 'img author'} />
                      </div>
                      <div className="info">
                        <span>Владелец</span>
                        <h6>
                          {" "}
                          <Link to={`/authors-${item.collectionId}`}>{item.nameAuthor}</Link>{" "}
                        </h6>
                      </div>
                    </div>
                    <div className="price">
                      <span>Текущая цена</span>
                      <h5> {item.price} {item.type}</h5>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {visible < collection.length && (
              <div className="col-md-12 wrap-inner load-more text-center">
                <Link
                  to="#"
                  id="load-more"
                  className="sc-button loadmore fl-button pri-3"
                  onClick={showMoreItems}
                >
                  <span>Загрузить больше</span>
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>
      <CardModal show={modalShow} onHide={() => setModalShow(false)} />
    </Fragment>
                    </div>
                </div>
            </section>
            <CardModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
            <Footer />
        </div>
    );
}

export default Authors;
