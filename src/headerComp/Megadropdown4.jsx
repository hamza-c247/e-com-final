import React from "react";
import { Link, NavLink } from "react-router-dom";

function Megadropdown4() {
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
          CLOCKS
        </Link>
        <ul className="dropdown-menu clocks-megamenu">
          <div className="container">
            <div className="row">
              <ul className="col-md-2 clocks-wrapper">
                <li>
                  <Link to="">
                    <b>SHOP BY PRICE</b>
                  </Link>
                </li>
                <li>
                  <Link to="">LESS THAN 1000</Link>
                </li>
                <li>
                  <Link to="">BETWEEN 1000-2500</Link>
                </li>
                <li>
                  <Link to="">BETWEEN 2500-5000</Link>
                </li>
                <li>
                  <Link to="">ABOVE 5000</Link>
                </li>
                <li className="view-all-btn">
                  <Link to="">VIEW ALL</Link>
                </li>
              </ul>
              <ul className="col-md-2 clocks-wrapper">
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
              <ul className="col-md-8 clocks-wrapper">
                <li>
                  <Link to="">
                    <img
                      src="/assets/images/products/titan clocks.webp"
                      alt=""
                    />
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

export default Megadropdown4;
