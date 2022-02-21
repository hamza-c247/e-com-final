import React from "react";
import { Link, NavLink } from "react-router-dom";

function Megadropdown7() {
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
          OUR BRANDS
        </Link>
        <ul className="dropdown-menu our-brands-megamenu">
          <div className="container">
            <div className="row">
              <ul className="col-md-2 our-brands-wrapper">
                <li>
                  <Link to="">
                    <b>FAST TRACK</b>
                  </Link>
                </li>

                <li>
                  <Link to="">GUYS</Link>
                </li>
                <li>
                  <Link to="">GIRLS</Link>
                </li>
                <li>
                  <Link to="">BOYS</Link>
                </li>
                <li>
                  <Link to="">KIDS</Link>
                </li>

                <li className="view-all-btn">
                  <Link to="">VIEW ALL</Link>
                </li>
              </ul>

              <ul className="col-md-2 our-brands-wrapper">
                <li>
                  <Link to="">
                    <b>SONATA</b>
                  </Link>
                </li>
                <li>
                  <Link to="">MEN</Link>
                </li>
                <li>
                  <Link to="">WOMEN</Link>
                </li>
                <li>
                  <Link to="">COUPLES</Link>
                </li>
                <li>
                  <Link to="">FAMILY</Link>
                </li>
                <li className="view-all-btn">
                  <Link to="">VIEW ALL</Link>
                </li>
              </ul>

              <ul className="col-md-3 our-brands-wrapper">
                <li>
                  <Link to="">
                    <b>INTERNATIONAL BRANDS</b>
                  </Link>
                </li>
                <li>
                  <Link to="">TOMMY HILFIGER</Link>
                </li>
                <li>
                  <Link to="">KENNETH COLE</Link>
                </li>
              
                <li>
                  <Link to="">ANNE KLEIN</Link>
                </li>
                <li>
                  <Link to="">LEE COOPER</Link>
                </li>
                <li className="view-all-btn">
                  <Link to="">VIEW ALL</Link>
                </li>
              </ul>

              <ul className="col-md-5 our-brands-wrapper">
                <li>
                  <Link to="">
                    <img src="/assets/images/products/tommy.webp" alt="" />
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

export default Megadropdown7;
