import React from 'react'
import { Accordion } from "react-bootstrap";
import {Link,Navlink} from "react-router-dom"

function Smallscreenaccordionmenu() {
    return (
        <>
             <Accordion className="accordion_wrapper">
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>
                        <div className="accordion__item__head">
                          <Link to="/products"><b>PRODUCTS</b></Link>
                        </div>
                      </Accordion.Header>

                      <Accordion.Body>
                        <div className="container">
                          <div className="row">
                            <ul className="col-md-6 col-sm-6 col-xs-12 offcanvas-watches-wrapper">
                              <li>
                                <Link to="">
                                  <img
                                    src="/assets/images/products/edge watch.webp"
                                    alt=""
                                  />
                                </Link>
                              </li>

                              <li>
                                <Link to="">
                                  <b>SHOP FOR</b>
                                </Link>
                              </li>

                              <li>
                                <Link to="">MEN</Link>
                              </li>
                              <li>
                                <Link to="">WOMEN</Link>
                              </li>
                              <li>
                                <Link to="">KIDS</Link>
                              </li>
                              <li>
                                <Link to="">COUPLES</Link>
                              </li>
                              <li className="view-all-btn">
                                <Link to="">VIEW ALL</Link>
                              </li>
                            </ul>

                            <ul className="col-md-6 col-sm-6 col-xs-12 offcanvas-watches-wrapper">
                              <li>
                                <Link to="">
                                  <img
                                    src="/assets/images/products/metorite watch.webp"
                                    alt=""
                                  />
                                </Link>
                              </li>

                              <li>
                                <Link to="">
                                  <b>SHOP BY TYPE</b>
                                </Link>
                              </li>

                              <li>
                                <Link to="">MECHANICAL</Link>
                              </li>
                              <li>
                                <Link to="">LEATHER</Link>
                              </li>
                              <li>
                                <Link to="">KIDS</Link>
                              </li>
                              <li>
                                <Link to="">COUPLES</Link>
                              </li>
                              <li className="view-all-btn">
                                <Link to="">VIEW ALL</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="1">
                      <Accordion.Header>
                       
                        <div className="accordion__item__head">
                          <h2>SMART</h2>
                        </div>
                      </Accordion.Header>
                      <Accordion.Body>
                        <div className="container">
                          <div className="row">
                            <ul className="col-md-6 col-sm-6 col-xs-12 offcanvas-watches-wrapper">
                              <li>
                                <Link to="">
                                  <img
                                    src="/assets/images/products/fastrack.webp"
                                    alt=""
                                  />
                                </Link>
                              </li>

                              <li>
                                <Link to="">
                                  <b>SHOP FOR</b>
                                </Link>
                              </li>

                              <li>
                                <Link to="">MEN</Link>
                              </li>
                              <li>
                                <Link to="">WOMEN</Link>
                              </li>
                              <li>
                                <Link to="">KIDS</Link>
                              </li>
                              <li>
                                <Link to="">COUPLES</Link>
                              </li>
                              <li className="view-all-btn">
                                <Link to="">VIEW ALL</Link>
                              </li>
                            </ul>

                            <ul className="col-md-6 col-sm-6 col-xs-12 offcanvas-watches-wrapper">
                              <li>
                                <Link to="">
                                  <img
                                    src="/assets/images/products/sync with style.webp"
                                    alt=""
                                  />
                                </Link>
                              </li>

                              <li>
                                <Link to="">
                                  <b>SHOP BY TYPE</b>
                                </Link>
                              </li>

                              <li>
                                <Link to="">MECHANICAL</Link>
                              </li>
                              <li>
                                <Link to="">LEATHER</Link>
                              </li>
                              <li>
                                <Link to="">KIDS</Link>
                              </li>
                              <li>
                                <Link to="">COUPLES</Link>
                              </li>
                              <li className="view-all-btn">
                                <Link to="">VIEW ALL</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="2">
                      <Accordion.Header>
                       
                        <div className="accordion__item__head">
                          <h2>PREMIUM WATCHES</h2>
                        </div>
                      </Accordion.Header>
                      <Accordion.Body>
                        <div className="container">
                          <div className="row">
                            <ul className="col-md-6 col-sm-6 col-xs-12 offcanvas-watches-wrapper">
                              <li>
                                <Link to="">
                                  <img
                                    src="/assets/images/products/12k watch.webp"
                                    alt=""
                                  />
                                </Link>
                              </li>

                              <li>
                                <Link to="">
                                  <b>SHOP FOR</b>
                                </Link>
                              </li>

                              <li>
                                <Link to="">MEN</Link>
                              </li>
                              <li>
                                <Link to="">WOMEN</Link>
                              </li>
                              <li>
                                <Link to="">KIDS</Link>
                              </li>
                              <li>
                                <Link to="">COUPLES</Link>
                              </li>
                              <li className="view-all-btn">
                                <Link to="">VIEW ALL</Link>
                              </li>
                            </ul>

                            <ul className="col-md-6 col-sm-6 col-xs-12 offcanvas-watches-wrapper">
                              <li>
                                <Link to="">
                                  <img
                                    src="/assets/images/products/offers.webp"
                                    alt=""
                                  />
                                </Link>
                              </li>

                              <li>
                                <Link to="">
                                  <b>SHOP BY TYPE</b>
                                </Link>
                              </li>

                              <li>
                                <Link to="">MECHANICAL</Link>
                              </li>
                              <li>
                                <Link to="">LEATHER</Link>
                              </li>
                              <li>
                                <Link to="">KIDS</Link>
                              </li>
                              <li>
                                <Link to="">COUPLES</Link>
                              </li>
                              <li className="view-all-btn">
                                <Link to="">VIEW ALL</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="3">
                      <Accordion.Header>
                       
                        <div className="accordion__item__head">
                          <h2>ABOUT US</h2>
                        </div>
                      </Accordion.Header>
                      <Accordion.Body>
                        <div className="container">
                          <div className="row">
                            <ul className="col-md-6 col-sm-6 col-xs-12 offcanvas-watches-wrapper">
                              <li>
                                <Link to="">
                                  <img
                                    src="/assets/images/products/edge watch.webp"
                                    alt=""
                                  />
                                </Link>
                              </li>

                              <li>
                                <Link to="">
                                  <b>SHOP FOR</b>
                                </Link>
                              </li>

                              <li>
                                <Link to="">MEN</Link>
                              </li>
                              <li>
                                <Link to="">WOMEN</Link>
                              </li>
                              <li>
                                <Link to="">KIDS</Link>
                              </li>
                              <li>
                                <Link to="">COUPLES</Link>
                              </li>
                              <li className="view-all-btn">
                                <Link to="">VIEW ALL</Link>
                              </li>
                            </ul>

                            <ul className="col-md-6 col-sm-6 col-xs-12 offcanvas-watches-wrapper">
                              <li>
                                <Link to="">
                                  <img
                                    src="/assets/images/products/metorite watch.webp"
                                    alt=""
                                  />
                                </Link>
                              </li>

                              <li>
                                <Link to="">
                                  <b>SHOP BY TYPE</b>
                                </Link>
                              </li>

                              <li>
                                <Link to="">MECHANICAL</Link>
                              </li>
                              <li>
                                <Link to="">LEATHER</Link>
                              </li>
                              <li>
                                <Link to="">KIDS</Link>
                              </li>
                              <li>
                                <Link to="">COUPLES</Link>
                              </li>
                              <li className="view-all-btn">
                                <Link to="">VIEW ALL</Link>
                              </li>
                            </ul>

                            <ul className="col-md-6 col-sm-6 col-xs-12 offcanvas-watches-wrapper">
                              <li>
                                <Link to="">
                                  <img
                                    src="/assets/images/products/12k watch.webp "
                                    alt=""
                                  />
                                </Link>
                              </li>
                              <li>
                                <Link to="">
                                  <b>NEBULA - 18KT GOLD WATCHES</b>
                                </Link>
                              </li>
                              <li>
                                <Link to="">JEWELS</Link>
                              </li>
                              <li>
                                <Link to="">LUSTURE</Link>
                              </li>
                              <li>
                                <Link to="">DECCAN TREASURES</Link>
                              </li>
                              <li>
                                <Link to="">CALLIGRAPHY</Link>
                              </li>
                              <li className="view-all-btn">
                                <Link to="">VIEW ALL</Link>
                              </li>
                            </ul>
                            <ul className="col-md-6 col-sm-6 col-xs-12 offcanvas-watches-wrapper">
                              <li>
                                <Link to="">
                                  <img
                                    src="/assets/images/products/edge watch.webp "
                                    alt=""
                                  />
                                </Link>
                              </li>
                              <li>
                                <Link to="">
                                  <b>NEBULA - 18KT GOLD WATCHES</b>
                                </Link>
                              </li>
                              <li>
                                <Link to="">EDGE MECHANICAL</Link>
                              </li>
                              <li>
                                <Link to="">EDGE CERAMIC</Link>
                              </li>
                              <li>
                                <Link to="">classNameICS</Link>
                              </li>
                              <li>
                                <Link to="">EDGE ZEN</Link>
                              </li>
                              <li className="view-all-btn">
                                <Link to="">VIEW ALL</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="4">
                      <Accordion.Header>
                       
                        <div className="accordion__item__head">
                          <h2>LATEST CLOCKS</h2>
                        </div>
                      </Accordion.Header>
                      <Accordion.Body>
                        <div className="container">
                          <div className="row">
                            <ul className="col-md-12 col-sm-12 col-xs-12 offcanvas-watches-wrapper">
                              <li>
                                <Link to="">
                                  <img
                                    src="/assets/images/products/titan clocks.webp"
                                    alt=""
                                  />
                                </Link>
                              </li>

                              <ul className="col-md-6 col-sm-6 col-xs-12 offcanvas-watches-wrapper">
                                <li>
                                  <Link to="">
                                    <b>SHOP BY STYLE</b>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="">SLIM</Link>
                                </li>
                                <li>
                                  <Link to="">CONTEMPORARY</Link>
                                </li>
                                <li>
                                  <Link to="">METALLIC</Link>
                                </li>
                                <li>
                                  <Link to="">ARTISTIC</Link>
                                </li>
                                <li className="view-all-btn">
                                  <Link to="">VIEW ALL</Link>
                                </li>
                              </ul>

                              <ul className="col-md-6 col-sm-6 col-xs-12 offcanvas-watches-wrapper">
                                <li>
                                  <Link to="">
                                    <b>SHOP BY STYLE</b>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="">SLIM</Link>
                                </li>
                                <li>
                                  <Link to="">CONTEMPORARY</Link>
                                </li>
                                <li>
                                  <Link to="">METALLIC</Link>
                                </li>
                                <li>
                                  <Link to="">ARTISTIC</Link>
                                </li>
                                <li className="view-all-btn">
                                  <Link to="">VIEW ALL</Link>
                                </li>
                              </ul>
                            </ul>
                          </div>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="5">
                      <Accordion.Header>
                        
                        <div className="accordion__item__head">
                          <h2>NEW ARRIVALS</h2>
                        </div>
                      </Accordion.Header>
                      <Accordion.Body>
                        <div className="container">
                          <div className="row">
                            <ul className="col-md-12 col-sm-12 col-xs-12 offcanvas-watches-wrapper">
                              <li>
                                <Link to="">
                                  <img
                                    src="/assets/images/products/memento.webp"
                                    alt=""
                                  />
                                </Link>
                              </li>
                            </ul>

                            <ul className="col-md-6 col-sm-6 col-xs-12 offcanvas-watches-wrapper">
                              <li>
                                <Link to="">
                                  <b>SHOP BY STYLE</b>
                                </Link>
                              </li>
                              <li>
                                <Link to="">SLIM</Link>
                              </li>
                              <li>
                                <Link to="">CONTEMPORARY</Link>
                              </li>
                              <li>
                                <Link to="">METALLIC</Link>
                              </li>
                              <li>
                                <Link to="">ARTISTIC</Link>
                              </li>
                              <li className="view-all-btn">
                                <Link to="">VIEW ALL</Link>
                              </li>
                            </ul>

                            <ul className="col-md-6 col-sm-6 col-xs-12 offcanvas-watches-wrapper">
                              <li>
                                <Link to="">
                                  <b>SHOP BY STYLE</b>
                                </Link>
                              </li>
                              <li>
                                <Link to="">SLIM</Link>
                              </li>
                              <li>
                                <Link to="">CONTEMPORARY</Link>
                              </li>
                              <li>
                                <Link to="">METALLIC</Link>
                              </li>
                              <li>
                                <Link to="">ARTISTIC</Link>
                              </li>
                              <li className="view-all-btn">
                                <Link to="">VIEW ALL</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="6">
                      <Accordion.Header>
                        
                        <div className="accordion__item__head">
                          <h2>OUR BRANDS</h2>
                        </div>
                      </Accordion.Header>
                      <Accordion.Body>
                        <div className="container">
                          <div className="row">
                            <ul className="col-md-6 col-sm-6 col-xs-12 offcanvas-watches-wrapper">
                              <li>
                                <Link to="">
                                  <img
                                    src="/assets/images/products/tommy.webp"
                                    alt=""
                                  />
                                </Link>
                              </li>

                              <li>
                                <Link to="">
                                  <b>SHOP FOR</b>
                                </Link>
                              </li>

                              <li>
                                <Link to="">MEN</Link>
                              </li>
                              <li>
                                <Link to="">WOMEN</Link>
                              </li>
                              <li>
                                <Link to="">KIDS</Link>
                              </li>
                              <li>
                                <Link to="">COUPLES</Link>
                              </li>
                              <li className="view-all-btn">
                                <Link to="">VIEW ALL</Link>
                              </li>
                            </ul>

                            <ul className="col-md-6 col-sm-6 col-xs-12 offcanvas-watches-wrapper">
                              <li>
                                <Link to="">
                                  <img
                                    src="/assets/images/products/metorite watch.webp"
                                    alt=""
                                  />
                                </Link>
                              </li>

                              <li>
                                <Link to="">
                                  <b>SHOP BY TYPE</b>
                                </Link>
                              </li>

                              <li>
                                <Link to="">MECHANICAL</Link>
                              </li>
                              <li>
                                <Link to="">LEATHER</Link>
                              </li>
                              <li>
                                <Link to="">KIDS</Link>
                              </li>
                              <li>
                                <Link to="">COUPLES</Link>
                              </li>
                              <li className="view-all-btn">
                                <Link to="">VIEW ALL</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>

                   
                  </Accordion> 
        </>
    )
}

export default Smallscreenaccordionmenu
