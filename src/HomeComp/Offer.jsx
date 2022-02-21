import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function Offer() {
  const [loading, setloading] = useState(true);

  const imageloaded = () => {
    setloading(false);
  };
  return (
    <>
      <section className="sale-section">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-lg-3 col-sm-3 col-xs-6 sale-wrapper">
              <Link to="">
                <div style={{ display: loading ? "block" : "none" }}>
                <Skeleton height={200} width={200} />
                </div>
                <div style={{ display: loading ? "none" : "block" }}>
                  <img
                    src="/assets/images/products/sale1.webp"
                    className="offer-img"
                    alt=""
                    onLoad={imageloaded}
                  />
                </div>
              </Link>
            </div>
            <div className="col-md-3 col-lg-3 col-sm-3 col-xs-6 sale-wrapper">
              <Link to="">
                <div style={{ display: loading ? "block" : "none" }}>
                <Skeleton height={200} width={200} />
                </div>
                <div style={{ display: loading ? "none" : "block" }}>
                  <img
                    src="/assets/images/products/sale2.webp"
                    className="offer-img"
                    alt=""
                    onLoad={imageloaded}
                  />
                </div>
              </Link>
            </div>
            <div className="col-md-3 col-lg-3 col-sm-3 col-xs-6 sale-wrapper">
              <Link to="">
                <div style={{ display: loading ? "block" : "none" }}>
                <Skeleton height={200} width={200} />
                </div>
                <div style={{ display: loading ? "none" : "block" }}>
                  <img
                    src="/assets/images/products/sale2.jpg"
                    className="offer-img"
                    alt=""
                    onLoad={imageloaded}
                  />
                </div>
              </Link>
            </div>
            <div className="col-md-3 col-lg-3 col-sm-3 col-xs-6 sale-wrapper">
              <Link to="">
                <div style={{ display: loading ? "block" : "none" }}>
                <Skeleton height={200} width={200} />
                </div>
                <div style={{ display: loading ? "none" : "block" }}>
                  <img
                    src="/assets/images/products/sale4.webp"
                    className="offer-img"
                    alt=""
                    onLoad={imageloaded}
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Offer;
