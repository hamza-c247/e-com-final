import React from "react";
import { Link } from "react-router-dom";

function Findstore() {
  return (
    <>
      <section className="store-section">
        <div className="container">
          <h1 className="find-text">FIND A STORE NEAR YOU</h1>
          <div className="row">
            <div className="col-sm-12 col-xs-12 col-md-6 store-wrapper1">
              <Link to="">
                <img src="/assets/images/logo/pin.png" alt="" />
                Use my current location
              </Link>
            </div>
            <div className="col-sm-12 col-xs-12 col-md-6 store-wrapper2">
              <form action="">
                <input type="number" placeholder="Enter a pincode or city" />
                <button>Search</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Findstore;
