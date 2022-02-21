import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Tab, Tabs } from "react-bootstrap";
import { useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function Collectiontabs() {
  const [key, setKey] = useState("MENS");

  const [loading, setloading] = useState(true);

  const imageloaded = () => {
    setloading(false);
  };

  return (
    <>
      <div className="collection-header">
        <h2>OUR COLLECTIONS</h2>
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="mb-3"
        >
          <Tab eventKey="MENS" title="MENS">
            <div className="container">
              <div className="row">
                <div className="col-md-3 col-sm-3 col-xs-6  men-wrapper">
                  <div style={{ display: loading ? "block" : "none" }}>
                    <Skeleton height={450} width={300} />
                    <Skeleton height={30} width={300} />
                  </div>
                  <div style={{ display: loading ? "none" : "block" }}>
                    <div className="hover-scale">
                      <Link to="">
                        <img
                          src="/assets/images/products/men1.webp"
                          alt=""
                          onLoad={imageloaded}
                        />
                      </Link>
                    </div>
                    <Link className="collection-tags" to="">
                      Slimmest
                    </Link>
                  </div>
                </div>
                <div className="col-md-3 col-sm-3 col-xs-6  men-wrapper">
                  <div style={{ display: loading ? "block" : "none" }}>
                    <Skeleton height={450} width={300} />
                    <Skeleton height={30} width={300} />
                  </div>
                  <div style={{ display: loading ? "none" : "block" }}>
                    <div className="hover-scale">
                      <Link to="">
                        <img
                          src="/assets/images/products/men2.webp"
                          alt=""
                          onLoad={imageloaded}
                        />
                      </Link>
                    </div>

                    <Link className="collection-tags" to="">
                      Grand Master
                    </Link>
                  </div>
                </div>
                <div className="col-md-3 col-sm-3 col-xs-6 men-wrapper">
                  <div style={{ display: loading ? "block" : "none" }}>
                    <Skeleton height={450} width={300} />
                    <Skeleton height={30} width={300} />
                  </div>
                  <div style={{ display: loading ? "none" : "block" }}>
                    <div className="hover-scale">
                      <Link to="">
                        <img
                          src="/assets/images/products/men3.webp"
                          alt=""
                          onLoad={imageloaded}
                        />
                      </Link>
                    </div>
                  
                  <Link className="collection-tags" to="">
                    Regalia
                  </Link>
                  </div>
                </div>
                <div className="col-md-3 col-sm-3 col-xs-6  men-wrapper">
                  <div style={{ display: loading ? "block" : "none" }}>
                    <Skeleton height={450} width={300} />
                    <Skeleton height={30} width={300} />
                  </div>
                  <div style={{ display: loading ? "none" : "block" }}>
                    <div className="hover-scale">
                      <Link to="">
                        <img
                          src="/assets/images/products/men4.webp"
                          alt=""
                          onLoad={imageloaded}
                        />
                      </Link>
                    </div>
                    <Link className="collection-tags" to="">
                      Maritime
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Tab>
          <Tab eventKey="WOMENS" title="WOMENS">
            <div className="container">
              <div className="row">
                <div className="col-md-3 col-sm-3 col-xs-6  men-wrapper">
                  <div className="hover-scale">
                    <Link to="">
                      <img src="/assets/images/products/women2.webp" alt="" />
                    </Link>
                  </div>
                  <Link className="collection-tags" to="">
                    Raga
                  </Link>
                </div>
                <div className="col-md-3 col-sm-3 col-xs-6  men-wrapper">
                  <div className="hover-scale">
                    <Link to="">
                      <img src="/assets/images/products/women4.webp" alt="" />
                    </Link>
                  </div>
                  <Link className="collection-tags" to="">
                    Raga
                  </Link>
                </div>
                <div className="col-md-3 col-sm-3 col-xs-6 men-wrapper">
                  <div className="hover-scale">
                    <Link to="">
                      <img src="/assets/images/products/women5.webp" alt="" />
                    </Link>
                  </div>
                  <Link className="collection-tags" to="">
                    Raga
                  </Link>
                </div>
                <div className="col-md-3 col-sm-3 col-xs-6  men-wrapper">
                  <div className="hover-scale">
                    <Link to="">
                      <img src="/assets/images/products/women6.webp" alt="" />
                    </Link>
                  </div>
                  <Link className="collection-tags" to="">
                    Raga
                  </Link>
                </div>
              </div>
            </div>
          </Tab>
          <Tab eventKey="LUXURY" title="LUXURY">
            <div className="container">
              <div className="row">
                <div className="col-md-3 col-sm-3 col-xs-6  men-wrapper">
                  <div className="hover-scale">
                    <Link to="">
                      <img src="/assets/images/products/luxury1.webp" alt="" />
                    </Link>
                  </div>
                  <Link className="collection-tags" to="">
                    Gold
                  </Link>
                </div>
                <div className="col-md-3 col-sm-3 col-xs-6  men-wrapper">
                  <div className="hover-scale">
                    <Link to="">
                      <img src="/assets/images/products/luxury2.webp" alt="" />
                    </Link>
                  </div>
                  <Link className="collection-tags" to="">
                    Xylys
                  </Link>
                </div>
                <div className="col-md-3 col-sm-3 col-xs-6 men-wrapper">
                  <div className="hover-scale">
                    <Link to="">
                      <img src="/assets/images/products/luxury3.webp" alt="" />
                    </Link>
                  </div>
                  <Link className="collection-tags" to="">
                    Edge
                  </Link>
                </div>
                <div className="col-md-3 col-sm-3 col-xs-6  men-wrapper">
                  <div className="hover-scale">
                    <Link to="">
                      <img src="/assets/images/products/luxury4.webp" alt="" />
                    </Link>
                  </div>
                  <Link className="collection-tags" to="">
                    Nebula
                  </Link>
                </div>
              </div>
            </div>
          </Tab>
        </Tabs>
      </div>
    </>
  );
}

export default Collectiontabs;
