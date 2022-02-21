import React from "react";
import { Link, NavLink } from "react-router-dom";

function Megadropdown6() {
  return (
    <>
      <li className="dropdown cool-link">
        <Link
          to="#"
          className="dropdown-toggle nav-link cool-link"
          data-toggle="dropdown"
          role="button"
          aria-haspopup="true"
          aria-expanded="false"
        >
          SMART
        </Link>
        <ul className="dropdown-menu smart-megamenu">
          <div className="container">
            <div className="row">
              <ul className="col-md-3 smart-wrapper">
                <li>
                  <Link to="">
                    <b>SHOP BY BRAND</b>
                  </Link>
                </li>
                <li>
                  <Link to="">TITAN</Link>
                </li>
                <li>
                  <Link to="">TRAQ</Link>
                </li>
                <li>
                  <Link to="">FASTRACK REFLEX</Link>
                </li>
                <li>
                  <Link to="">SONATA STRIDE</Link>
                </li>
                <li className="view-all-btn">
                  <Link to="">VIEW ALL</Link>
                </li>
              </ul>

              <ul className="col-md-3 smart-wrapper">
                <li>
                  <Link to="">
                    <b>SHOP BU FEATURE</b>
                  </Link>
                </li>

                <li>
                  <Link to="">FULL TOUCH</Link>
                </li>
                <li>
                  <Link to="">BRANDS</Link>
                </li>
                <li>
                  <Link to="">HYBRID</Link>
                </li>
                <li>
                  <Link to="">PERFORMANCE GEAR</Link>
                </li>
                <li className="view-all-btn">
                  <Link to="">VIEW ALL</Link>
                </li>
              </ul>
              <ul className="col-md-3 smart-wrapper">
                <li>
                  <Link to="">
                    <img src="/assets/images/products/fastrack.webp" alt="" />
                  </Link>
                </li>
              </ul>
              <ul className="col-md-3 smart-wrapper">
                <li>
                  <Link to="">
                    <img
                      src="/assets/images/products/sync with style.webp"
                      alt=""
                    />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </ul>
      </li>

      <li className="search-logo">
        <Link to="">
          <img
            className="navbar-icons"
            src="/assets/images/logo/search-interface-symbol.png"
            alt=""
          />
        </Link>
      </li>
    </>
  );
}

export default Megadropdown6;
