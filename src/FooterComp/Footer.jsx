import React from "react";
import {Link} from "react-router-dom"

function Footer() {
  return (
    <>
      <footer>
        <div className="container footer-whole-div">
          <div className="row">
            <div className="col-sm-3 col-md-3 col-xs-6">
              <li>
               <Link to="">
                  <b>CUSTOMER SERVICES</b>
               </Link>
              </li>
              <li>
               <Link to="">Payment Option</Link>
              </li>
              <li>
               <Link to="">track Order</Link>
              </li>
              <li>
               <Link to="">Program</Link>
              </li>
            </div>

            <div className="col-sm-2 col-md-2 col-xs-6">
              <li>
               <Link to="">
                  <b>CONTACT US</b>
               </Link>
              </li>
              <li>
               <Link to="">1800-266-0123</Link>
              </li>
              <li>
               <Link to="">cc@titan.co.in</Link>
              </li>
              <li>
               <Link to="">FAQ</Link>
              </li>
            </div>
            <div className="col-sm-2 col-md-2 col-xs-6">
              <li>
               <Link to="">
                  <b>POLICIES</b>
               </Link>
              </li>
              <li>
               <Link to="">Returns</Link>
              </li>
              <li>
               <Link to="">Cancel</Link>
              </li>
              <li>
               <Link to="">Shipping</Link>
              </li>
              <li>
               <Link to="">delivery</Link>
              </li>
            </div>
            <div className="col-sm-2 col-md-2 col-xs-6">
              <li>
               <Link to="">
                  <b>ABOUT TITAN</b>
               </Link>
              </li>
              <li>
               <Link to="">Corporate</Link>
              </li>
              <li>
               <Link to="">Careers</Link>
              </li>
            </div>

            <div className="col-sm-3 col-md-3 col-xs-6">
              <li>
               <Link to="">DOWNLOAD TITAN APP</Link>
              </li>
              <li>
               <Link to="">
                  <img
                    className="google"
                    src="/assets/images/logo/google-play-badge.webp"
                    alt=""
                  />
               </Link>
              </li>
              <li>
               <Link to="">FOLLOW US</Link>
              </li>
              <li>
               <Link to="">
                  <img
                    className="footer-logo"
                    src="/assets/images/logo/Facebook-white.svg"
                    alt=""
                  />
               </Link>
               <Link to="">
                  <img
                    className="footer-logo"
                    src="/assets/images/logo/pinterest-white-40.webp"
                    alt=""
                  />
               </Link>
               <Link to="">
                  <img
                    className="footer-logo"
                    src="/assets/images/logo/Twitter-white.svg"
                    alt=""
                  />
               </Link>
               <Link to="">
                  <img
                    className="footer-logo"
                    src="/assets/images/logo/Instagram_white.svg"
                    alt=""
                  />
               </Link>
              </li>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
