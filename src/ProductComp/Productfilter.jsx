import React from "react";
import { Accordion } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../redux/actions";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  EffectFade,
  Autoplay,
  Navigation,
  Pagination,
} from "swiper";

// Import Swiper styles

import "swiper/css/pagination";

// import Swiper core and required modules

// install Swiper modules

SwiperCore.use([EffectFade, Autoplay, Navigation, Pagination]);

function Productfilter({ setCart, cart }) {
  // dispatch
  const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  const [data, setdata] = useState([]);
  const [filter, setfilter] = useState([data]);
  const [loading, setloading] = useState(true);

  const [checked, setchecked] = useState(true);

  const history = useHistory();
  let componentMounted = true;

  const imageloaded = () => {
    setloading(false);
  };

  // api call
  useEffect(() => {
    const getproductData = async () => {
      // setloading(true)
      const response = await fetch("http://localhost:3344/watches");
      if (componentMounted) {
        setdata(await response.clone().json());
        setfilter(await response.json());
        // setloading(false)

        // console.log(filter);
      }

      return () => {
        componentMounted = false;
      };
    };

    getproductData();
  }, []);

  // for filtering mens watches
  const filtercategory = (cat) => {
    const updatedcategory = data.filter((x) => x.category === cat);

    setfilter(updatedcategory);
  };

  // filter price
  const filterprice = (prc) => {
    const updatedprice = data.filter((x) => x.price === prc);

    setfilter(updatedprice);
  };

  // filter brand
  const filterbrand = (bnd) => {
    const updatedbrand = data.filter((x) => x.brand === bnd);

    setfilter(updatedbrand);
  };
  // filter off
  const filteroffer = (ff) => {
    const updatedoffer = data.filter((x) => x.off === ff);

    setfilter(updatedoffer);
  };
  // filter material
  const filtermaterial = (mat) => {
    const updatedmaterial = data.filter((x) => x.strapmaterial === mat);

    setfilter(updatedmaterial);
  };
  // filter strapcolor
  const filterstrapcolor = (clr) => {
    const updatedstrapcolor = data.filter((x) => x.strapcolor === clr);

    setfilter(updatedstrapcolor);
  };
  // filter dial color
  const filterdialcolor = (clr) => {
    const updateddialcolor = data.filter((x) => x.dialcolor === clr);

    setfilter(updateddialcolor);
  };

  // filter movement
  const filtermovement = (mvm) => {
    const updatedmovement = data.filter((x) => x.movement === mvm);

    setfilter(updatedmovement);
  };

  // filter function
  const filterfunction = (mvm) => {
    const updatedfunction = data.filter((x) => x.function === mvm);

    setfilter(updatedfunction);
    console.log(filter);
  };

  // jump to previous page
  const handelhistory = () => {
    history.goBack();
  };

  // add to cart

  const addToCart = (product) => {
    let newCart = [...cart];
    let itemInCart = newCart.find((item) => product.id === item.id);
    if (itemInCart) {
      itemInCart.quantity++;
    } else {
      itemInCart = {
        ...product,
        quantity: 1,
      };
      newCart.push(itemInCart);
    }
    setCart(newCart);
  };

  return (
    <>
      <div className="container">
        <button className="home-btn" onClick={() => handelhistory()}>
          <img className="navbar-icons" src="/assets/images/logo/left.png" /> Go
          Back
        </button>
      </div>
      <div className="container d-flex found_wrapper">
        <div className=" ">
          <h5>Found {filter.length} Watches</h5>
        </div>
        <div>
          <Link  className="all" onClick={() => setfilter(data)}>
            ALL &nbsp;{" "}
          </Link>
          |<Link> &nbsp; BEST SELLERS &nbsp; </Link>|
          <Link> &nbsp; NEW ARRIVALS </Link>
        </div>
      </div>
      <section className="container filter-section d-flex">
        <aside className="sidebar ">
          <div className="sidebar__widget  ">
            <Accordion className="product_accordion ">
              <h5>FILTER BY</h5>
              <Accordion.Item eventKey="0">
                <Accordion.Header>TYPE</Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>
                      <input
                        type="checkbox"
                        id="all"
                        onClick={() => setfilter(data)}
                      ></input>
                      <label htmlFor="all"> Watches </label>
                    </li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>CATEGORY</Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>
                      <input
                        type="checkbox"
                        id="MENS"
                        onClick={() => filtercategory("mens")}
                      ></input>
                      <label htmlFor="MENS"> Men's </label>
                    </li>

                    <li>
                      <input
                        type="checkbox"
                        id="KIDS"
                        onClick={() => filtercategory("kids")}
                      ></input>
                      <label htmlFor="KIDS"> Kid's </label>
                    </li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>PRICE</Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>
                      <input
                        type="checkbox"
                        id="1"
                        onClick={() => filterprice(999)}
                      ></input>
                      <label htmlFor="1"> Less than ₹1000 </label>
                    </li>

                    <li>
                      <input
                        type="checkbox"
                        id="2"
                        onClick={() => filterprice(1599)}
                      ></input>
                      <label htmlFor="2"> Between ₹1000 and ₹2500 </label>
                    </li>

                    <li>
                      <input
                        type="checkbox"
                        id="5"
                        onClick={() => filterprice(3999)}
                      ></input>
                      <label htmlFor="5"> Between ₹2500 and ₹5000 </label>
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        id="6"
                        onClick={() => filterprice(9999)}
                      ></input>
                      <label htmlFor="6"> Above ₹5000 </label>
                    </li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>BRAND</Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>
                      <input
                        type="checkbox"
                        id="brand1"
                        onClick={() => filterbrand("fastrack")}
                      ></input>
                      <label htmlFor="brand1"> Fastrack </label>
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        id="brand2"
                        onClick={() => filterbrand("kenneth cole")}
                      ></input>
                      <label htmlFor="brand2"> Kenneth Cole </label>
                    </li>

                    <li>
                      <input
                        type="checkbox"
                        id="brand5"
                        onClick={() => filterbrand("police")}
                      ></input>
                      <label htmlFor="brand5"> Police </label>
                    </li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>DISCOUNTS</Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>
                      <input
                        type="checkbox"
                        id="discount1"
                        onClick={() => filteroffer("(20% OFF)")}
                      ></input>
                      <label htmlFor="discount1"> 20% off </label>
                    </li>

                    <li>
                      <input
                        type="checkbox"
                        id="discount2"
                        onClick={() => filteroffer("(33% OFF)")}
                      ></input>
                      <label htmlFor="discount2"> 33% off </label>
                    </li>

                    <li>
                      <input
                        type="checkbox"
                        id="discount3"
                        onClick={() => filteroffer("(40% OFF)")}
                      ></input>
                      <label htmlFor="discount3"> 40% off </label>
                    </li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="5">
                <Accordion.Header>STRAP MATERIAL</Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>
                      <input
                        type="checkbox"
                        id="material1"
                        onClick={() => filtermaterial("stainless steel")}
                      ></input>
                      <label htmlFor="material1"> Stainless Steel </label>
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        id="material2"
                        onClick={() => filtermaterial("leather")}
                      ></input>
                      <label htmlFor="material2"> Leather </label>
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        id="material3"
                        onClick={() => filtermaterial("silicon")}
                      ></input>
                      <label htmlFor="material3"> silicon </label>
                    </li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="6">
                <Accordion.Header>STRAP COLOR</Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>
                      <input
                        type="checkbox"
                        id="strapcolor1"
                        onClick={() => filterstrapcolor("black")}
                      ></input>
                      <label htmlFor="strapcolor1"> Black </label>
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        id="strapcolor2"
                        onClick={() => filterstrapcolor("blue")}
                      ></input>
                      <label htmlFor="strapcolor2"> Blue </label>
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        id="strapcolor3"
                        onClick={() => filterstrapcolor("grey")}
                      ></input>
                      <label htmlFor="strapcolor3"> Grey </label>
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        id="strapcolor4"
                        onClick={() => filterstrapcolor("copper")}
                      ></input>
                      <label htmlFor="strapcolor4"> Copper </label>
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        id="strapcolor5"
                        onClick={() => filterstrapcolor("gold")}
                      ></input>
                      <label htmlFor="strapcolor5"> Gold </label>
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        id="strapcolor6"
                        onClick={() => filterstrapcolor("khaki")}
                      ></input>
                      <label htmlFor="strapcolor6"> Khaki </label>
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        id="strapcolor7"
                        onClick={() => filterstrapcolor("pink")}
                      ></input>
                      <label htmlFor="strapcolor7"> Pink </label>
                    </li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="7">
                <Accordion.Header>DIAL COLOR</Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>
                      <input
                        type="checkbox"
                        id="dial1"
                        onClick={() => filterdialcolor("black")}
                      ></input>
                      <label htmlFor="dial1"> Black </label>
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        id="dial2"
                        onClick={() => filterdialcolor("blue")}
                      ></input>
                      <label htmlFor="dial2"> Blue </label>
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        id="dial3"
                        onClick={() => filterdialcolor("grey")}
                      ></input>
                      <label htmlFor="dial3"> Grey </label>
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        id="dial4"
                        onClick={() => filterdialcolor("white")}
                      ></input>
                      <label htmlFor="dial4"> White </label>
                    </li>

                    <li>
                      <input
                        type="checkbox"
                        id="dial5"
                        onClick={() => filterdialcolor("gold")}
                      ></input>
                      <label htmlFor="dial5"> Gold </label>
                    </li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="8">
                <Accordion.Header>MOVEMENT</Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>
                      <input
                        type="checkbox"
                        id="m1"
                        onClick={() => filtermovement("analog")}
                      ></input>
                      <label htmlFor="m1"> Analog </label>
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        id="m2"
                        onClick={() => filtermovement("digital")}
                      ></input>
                      <label htmlFor="m2"> Digital </label>
                    </li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="9">
                <Accordion.Header>FUNCTION</Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>
                      <input
                        type="checkbox"
                        id="f1"
                        onClick={() => filterfunction("automatic")}
                      ></input>
                      <label htmlFor="f1"> Automatic </label>
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        id="f2"
                        onClick={() => filterfunction("co-axil")}
                      ></input>
                      <label htmlFor="f2"> Co-Axil-Chronometer </label>
                    </li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="10">
                <Accordion.Header>AVAILABLITY</Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>
                      <input type="checkbox" id="a1"></input>
                      <label htmlFor="a1"> Available </label>
                    </li>
                    <li>
                      <input type="checkbox" id="a2"></input>
                      <label htmlFor="a2"> Out Of Stock </label>
                    </li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </aside>

        <div className="row col-md-9 col-sm-9 product_list_wrapper">
          <img src="/assets/images/banner/productlistbanner.webp" />
          {filter.map((product, index) => {
            product.quantity = 1;
            return (
              <div
                key={index}
                className="col-md-4 col-sm-6 col-xs-12 image_wrapper"
              >
                <div className="center_images">
                  <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    navigation={true}
                    loop={true}
                    className="mySwiper"
                  >
                    <SwiperSlide className="single-product-slide ">
                      <Link to={`/products/singleproduct/${product.id}`}>
                        <div style={{ display: loading ? "block" : "none" }}>
                          <Skeleton height={200} width={200} />
                        </div>
                        <div style={{ display: loading ? "none" : "block" }}>
                          <img
                            effect="blur"
                            className="api-images"
                            src={product.image}
                            onLoad={imageloaded}
                            alt=""
                          />
                        </div>
                      </Link>
                    </SwiperSlide>
                    <SwiperSlide className="single-product-slide ">
                      <Link>
                        <img src={product.image2} alt="" />
                      </Link>
                    </SwiperSlide>
                    <SwiperSlide className="single-product-slide ">
                      <Link>
                        <img src={product.image3} alt="" />
                      </Link>
                    </SwiperSlide>
                    <SwiperSlide className="single-product-slide ">
                      <Link>
                        <img src={product.image4} alt="" />
                      </Link>
                    </SwiperSlide>
                    <SwiperSlide className="single-product-slide ">
                      <Link>
                        <img src={product.image5} alt="" />
                      </Link>
                    </SwiperSlide>
                  </Swiper>

                  <div style={{ display: loading ? "block" : "none" }}>
                    <Skeleton height={30} width={200} />
                  </div>
                  <div style={{ display: loading ? "none" : "block" }}>
                    <Link>{product.title}</Link>
                  </div>

                  <div style={{ display: loading ? "block" : "none" }}>
                    <Skeleton height={30} width={200} />
                  </div>
                  <p style={{ display: loading ? "none" : "block" }}>
                    ₹{product.price}
                    <span className="off-color"> {product.off} </span>
                  </p>

                  <div style={{ display: loading ? "block" : "none" }}>
                    <Skeleton height={30} width={200} />
                  </div>
                  <div style={{ display: loading ? "none" : "block" }}>
                    <NavLink
                      to={`/products/singleproduct/${product.id}`}
                      className="product_btn"
                    >
                      VIEW
                    </NavLink>
                    <Link
                      className="product_btn"
                      onMouseEnter={() => addToCart(product)}
                      onClick={() => addProduct(product)}
                    >
                      ADD TO CART
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Productfilter;
