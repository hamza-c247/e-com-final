import React from "react";
import { Link, NavLink } from "react-router-dom";

function Megadropdown3() {
  return (
    <>
      <li className="dropdown cool-link ">
        <Link
          to="#"
          className="dropdown-toggle nav-link"
          data-toggle="dropdown"
          role="button"
          aria-haspopup="true"
          aria-expanded="false"
        >
          ABOUT US
        </Link>

        <ul className="dropdown-menu about-us-megamenu">
          <div className="container">
            <div className="row">
              <ul className="col-md-3 about-us-wrapper">
                <li>
                  <Link to="">
                    <b>PERSONALISED GIFTS</b>
                  </Link>
                </li>
                <li>
                  <Link to="">
                    <img src="/assets/images/products/offers.webp" alt="" />
                  </Link>
                </li>
                <li>
                  <Link to="">SPECIAL OFFERS</Link>
                </li>
                <li>
                  <Link to="">UNDER 10K</Link>
                </li>
                <li>
                  <Link to="">E GIFT CARDS</Link>
                </li>
                <li>
                  <Link to="">OCCASIONS</Link>
                </li>
                <li className="view-all-btn">
                  <Link to="">VIEW ALL</Link>
                </li>
              </ul>

              <ul className="col-md-3  about-us-wrapper">
                <li>
                  <Link to="">
                    <b>GIFTING OCCASIONS</b>
                  </Link>
                </li>
                <li>
                  <Link to="">
                    <img
                      src="/assets/images/products/personal gifts.webp"
                      alt=""
                    />
                  </Link>
                </li>
                <li>
                  <Link to="">FOR SISTERS</Link>
                </li>
                <li>
                  <Link to="">FOR BROTHERS</Link>
                </li>
                <li>
                  <Link to="">FOR FAMILY</Link>
                </li>
                <li>
                  <Link to="">FOR PARENTS</Link>
                </li>
                <li className="view-all-btn">
                  <Link to="">VIEW ALL</Link>
                </li>
              </ul>

              <ul className="col-md-3  about-us-wrapper">
                <li>
                  <Link to="">
                    <b>TREATS FOR SELF</b>
                  </Link>
                </li>
                <li>
                  <Link to="">
                    <img
                      src="/assets/images/products/Treats_For_Self-min.webp"
                      alt=""
                    />
                  </Link>
                </li>
                <li>
                  <Link to="">FOR PARTIES</Link>
                </li>
                <li>
                  <Link to="">FOR FESTIVALS</Link>
                </li>
                <li>
                  <Link to="">FOR OCCASIONS</Link>
                </li>
                <li>
                  <Link to="">FOR FITNESS</Link>
                </li>
                <li className="view-all-btn">
                  <Link to="">VIEW ALL</Link>
                </li>
              </ul>

              <ul className="col-md-3  about-us-wrapper">
                <li>
                  <Link to="">
                    <b>OFFERS & MORE</b>
                  </Link>
                </li>
                <li>
                  <Link to="">
                    <img
                      src="/assets/images/products/Gifts_For_Anniversaries-min.webp"
                      alt=""
                    />
                  </Link>
                </li>
                <li>
                  <Link to="">ANNIVERSARIES</Link>
                </li>
                <li>
                  <Link to="">BIRTHDAYS</Link>
                </li>
                <li>
                  <Link to="">FOR DAILYWEAR</Link>
                </li>
                <li>
                  <Link to="">CELEBRATIONS</Link>
                </li>
                <li className="view-all-btn">
                  <Link to="">VIEW ALL</Link>
                </li>
              </ul>
            </div>
          </div>
        </ul>
      </li>
    </>
  );
}

export default Megadropdown3;
