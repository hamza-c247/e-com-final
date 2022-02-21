import React from "react";
import { Link, NavLink } from "react-router-dom";

function Megadropdown5() {
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
          NEW ARRIVALS
        </Link>
        <ul className="dropdown-menu new-arrivals-megamenu">
          <div className="container">
            <div className="row">
              <ul className="col-md-2 new-arrivals-wrapper">
                <li>
                  <Link to="">
                    <b>FOR MEN</b>
                  </Link>
                </li>
                <li>
                  <Link to="">MARITIME II</Link>
                </li>
                <li>
                  <Link to="">EDGE MECHANICAL</Link>
                </li>
                <li>
                  <Link to="">MINIMALS</Link>
                </li>
                <li>
                  <Link to="">EVOKE</Link>
                </li>
              </ul>
              <ul className="col-md-2 new-arrivals-wrapper">
                <li>
                  <Link to="">
                    <b>FOR WOMEN</b>
                  </Link>
                </li>
                <li>
                  <Link to="">RAGA SILVER</Link>
                </li>
                <li>
                  <Link to="">RAGA LOVE ALL</Link>
                </li>
                <li>
                  <Link to="">RAGA VIVA</Link>
                </li>
                <li>
                  <Link to="">RAGA MOJ</Link>
                </li>
              </ul>
              <ul className="col-md-2 new-arrivals-wrapper">
                <li>
                  <Link to="">
                    <b>FOR KIDS</b>
                  </Link>
                </li>
                <li>
                  <Link to="">DISNEY PRINCESS</Link>
                </li>
                <li>
                  <Link to="">TRAVEL</Link>
                </li>
                <li>
                  <Link to="">DIGITAL</Link>
                </li>
                <li>
                  <Link to="">MARVELS</Link>
                </li>
              </ul>
              <ul className="col-md-2 new-arrivals-wrapper">
                <li>
                  <Link to="">
                    <b>SPECIAL EDITION</b>
                  </Link>
                </li>
                <li>
                  <Link to="">TITAN MEMENTO</Link>
                </li>
                <li>
                  <Link to="">CIRCLE OF SOLIDARITY</Link>
                </li>
                <li>
                  <Link to="">BANDHAN COUPLES</Link>
                </li>
              </ul>
              <ul className="col-md-4 new-arrivals-wrapper">
                <li>
                  <Link to="">
                    <img src="/assets/images/products/memento.webp" alt="" />
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

export default Megadropdown5;
