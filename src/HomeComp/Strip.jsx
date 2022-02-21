import React from "react";
import { Link } from "react-router-dom";

function strip() {
  return (
    <>
      <section className="strip-section">
        <div className="container-fluid">
          <div className="row">
            <ul className="col-md-4 col-sm-4 col-xs-12 strip-align">
              <li>
                <Link to="">
                  <img
                    className="strip-logo"
                    src="/assets/images/logo/calendar.png"
                    alt=""
                  />
                  <b>BOOK AN APPOINTMENT</b>
                </Link>
              </li>
            </ul>

            <ul className="col-md-4 col-sm-4 col-xs-12 strip-align">
              <li>
                <Link to="">
                  <img
                    className="strip-logo"
                    src="/assets/images/logo/discount.png"
                    alt=""
                  />
                  <b>BUY WITH NO COST EMI</b>
                </Link>
              </li>
            </ul>
            <ul className="col-md-4 col-sm-4 col-xs-12 strip-align">
              <li>
                <Link to="">
                  <img
                    className="strip-logo"
                    src="/assets/images/logo/logotitan.svg"
                    alt=""
                  />
                  <b>DOWNLOAD WORLD OF TITAN APP</b>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default strip;
