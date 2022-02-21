import React from "react";
import { Link, NavLink } from "react-router-dom";
import Headertop from "./Headertop";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Megadropdown1 from "./Megadropdown1";
import Megadropdown2 from "./Megadropdown2";
import Megadropdown3 from "./Megadropdown3";
import Megadropdown4 from "./Megadropdown4";
import Megadropdown5 from "./Megadropdown5";
import Megadropdown6 from "./Megadropdown6";
import Megadropdown7 from "./Megadropdown7";
import Offcanvasmenu from "./Offcanvasmenu";



function Navbar() {

  const state = useSelector((state)=> state.handleCart)
  return (
    <>
      <Headertop></Headertop>

      <nav className=" navbar-default">
        <div className="container-fluid">
          {/*  Brand and toggle get grouped for better mobile display  */}
          <div className="navbar-header ">
            <ul className="nav navbar-nav header-bottom">
              {/* watches dropdown  */}
              <Megadropdown1></Megadropdown1>

              {/* watches dropdown ends  */}

              <li className="login-logo">
                <Link to="">
                  <img
                    className="navbar-icons"
                    src="/assets/images/logo/watch.png"
                    alt=""
                  />
                </Link>
              </li>

              {/*  premium propdown starts */}

              <Megadropdown2></Megadropdown2>

              {/*  premium dropdown emds  */}

              <li className="cart-logo">
                <Link to="/mycart">
                  <img
                    className="navbar-icons"
                    src="/assets/images/logo/shopping-cart.png"
                    alt=""
                  />
                  <span className="items-in-cart">{state.length}</span>
                </Link>
              </li>

              {/* about us  dropdown starts */}
              <Megadropdown3></Megadropdown3>
              {/* about us dropdown ends */}

              {/* clock dropdown start */}
              <Megadropdown4></Megadropdown4>
              {/* clock dropdown ends */}

              {/*  logo  */}
              <li>
                <Link
                  className="header-logo"
                  to ="/"
                  data-toggle="dropdown"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <img src="/assets/images/logo/TITAN+Logo+new.svg" alt="" />
                </Link>
              </li>
              {/*  logo ends  */}

              {/* New arrivals starts */}
              <Megadropdown5></Megadropdown5>
              {/* new arrivals ends */}

              {/* smart dropdown starts */}
              <Megadropdown6></Megadropdown6>
              {/* smart dropdown ends */}

              {/* our brands dropdown start  */}

              <Megadropdown7></Megadropdown7>
              {/* our brands dropdown ends */}

              {/*  off canvas btn  */}

              <li className="burger ">
                <Link
                  className="btn "
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasWithBothOptions"
                  aria-controls="offcanvasWithBothOptions"
                >
                  <img
                    className="navbar-icons"
                    src="/assets/images/logo/menu.png"
                    alt=""
                  />
                </Link>
              </li>
            </ul>

           
         {/*  off canvas menu For Small and large screens*/}
          <Offcanvasmenu/>

          </div>
        </div>
        {/*  .container-fluid  */}
      </nav>
    </>
  );
}

export default Navbar;
