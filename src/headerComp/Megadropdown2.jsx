import React from "react";
import {Link,NavLink} from "react-router-dom"

function Megadropdown2() {
  return (
    <>
      <li className="dropdown cool-link">
        <Link
          to="#"
          className="dropdown-toggle nav-link"
          data-toggle="dropdown"
          role="button"
          aria-haspopup="true"
          aria-expanded="false"
        >
          PREMIUM
        </Link>
        <ul className="dropdown-menu premium-megamenu">
          <div className="container">
            <div className="row">
              <ul className="col-md-3 premium-wrapper">
                <li>
                  <Link to="">
                    <b>NEBULA-18KT GOLD WATCHES</b>
                  </Link>
                </li>

                <li>
                  <Link to="">
                    <img src="/assets/images/products/12k watch.webp" alt="" />
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
               
                <li className="view-all-btn">
                  <Link to="">VIEW ALL</Link>
                </li>
              </ul>

              <ul className="col-md-3 premium-wrapper">
                <li>
                  <Link to="">
                    <b>XYLYS - SWISS MADE WATCHES</b>
                  </Link>
                </li>
                <li>
                  <Link to="">
                    <img
                      src="/assets/images/products/metorite watch.webp"
                      alt=""
                    />
                  </Link>
                </li>
                <li>
                  <Link to="">METEORITE</Link>
                </li>
                <li>
                  <Link to="">ICS</Link>
                </li>
                <li>
                  <Link to="">CALLIGRAPHY</Link>
                </li>
                <li className="view-all-btn">
                  <Link to="">VIEW ALL</Link>
                </li>
              </ul>

              <ul className="col-md-3 premium-wrapper">
                <li>
                  <Link to="">
                    <b>NEBULA-18KT GOLD WATCHES</b>
                  </Link>
                </li>

                <li>
                  <Link to="">
                    <img src="/assets/images/products/edge watch.webp" alt="" />
                  </Link>
                </li>
                <li>
                  <Link to="">EDGE MECHANICAL</Link>
                </li>
                <li>
                  <Link to="">EDGE CERAMIC</Link>
                </li>
                
                <li>
                  <Link to="">EDGE ZEN</Link>
                </li>
                <li className="view-all-btn">
                  <Link to="">VIEW ALL</Link>
                </li>
              </ul>

              <ul className="col-md-3">
                <li>
                  <Link to="">
                    <img src="/assets/images/products/ceramic.webp" alt="" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </ul>
      </li>
    </>
  );
}

export default Megadropdown2;
