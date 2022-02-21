import React from "react";
import { Link, NavLink } from "react-router-dom";
import Smallscreenaccordionmenu from "./Smallscreenaccordionmenu";

function Offcanvasmenu() {
  return (
    <>
      <section>
        <div
          className="offcanvas offcanvas-start"
          data-bs-scroll="true"
          tabIndex="-1"
          id="offcanvasWithBothOptions"
          aria-labelledby="offcanvasWithBothOptionsLabel"
        >
          <div className="offcanvas-header">
            {/* <!-- for large screens  --> */}

            <img
              className="offcanvas-banner"
              src="/assets/images/banner/ali-morshedlou-WMD64tMfc4k-unsplash.jpg"
              alt=""
            />

            <div className="offcanvas-logo-wrapper">
              <img
                className="titan-logo"
                src="/assets/images/logo/TITAN+Logo+new.svg"
                alt=""
              />
              <Link className="product-link" to="/products">
                PRODUCTS
              </Link>
              <Link>PREMIUM</Link>
              <Link>NEW ARRIVALS</Link>
              <Link>SMART</Link>
              <Link>CLOCKS</Link>
              <Link>OUR BRANDS</Link>
              <Link>ABOUT US</Link>
              <div className="offcanvas-bottom-logo">
                <Link to="">
                  <img src="/assets/images/logo/mail.png" alt="" />
                </Link>
                <Link to="">
                  <img src="/assets/images/logo/support.png" alt="" />{" "}
                  +91-999-222-22
                </Link>
                <Link to="">
                  <img src="/assets/images/logo/pin.png" alt="" />
                </Link>
              </div>
            </div>
            <button
              className="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            >
              <img src="/assets/images/logo/left.png" alt="" />
            </button>
            {/*  for large screen ends  */}

            {/*  accordion menu for screens less than 1366px  */}

            <div className="offcanvas-titan-logo">
              <img
                className="titan-logo"
                src="/assets/images/logo/TITAN+Logo+new.svg"
                alt=""
              />
            </div>

            <Smallscreenaccordionmenu />
          </div>
        </div>
      </section>
    </>
  );
}

export default Offcanvasmenu;
