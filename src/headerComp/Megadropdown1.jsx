import React from "react";
import { Link, NavLink } from "react-router-dom";

function Megadropdown1() {
  return (
    <>
      <li className="dropdown  cool-link">
        <NavLink
          to="/products"
         exact activeClassName="active_class"
          className="dropdown-toggle nav-link"
          data-toggle="dropdown"
          role="button"
          aria-haspopup="true"
          aria-expanded="false"
        >
          
          PRODUCTS
        </NavLink>

        <ul className="dropdown-menu watch-megamenu">
          <div className="container">
            <div className="row watch-row-div">
              <ul className="col-md-3 col-lg-3">
                <li>
                  <Link to="">
                    <b>SHOP FOR</b>
                  </Link>
                </li>
                <li className="watch-li-block">
                  <Link to="">
                    <img
                      className="watch-products"
                      src="/assets/images/products/Watch_Icons_160x160-Women.webp"
                      alt=""
                    /> WOMEN
                    
                  </Link>
                  <Link to="">
                    <img
                      className="watch-products"
                      src="/assets/images/products/Watch_Icons_160x160-Men.webp"
                      alt=""
                    /> MEN
                   
                  </Link>
                  <Link to="">
                    <img
                      className="watch-products"
                      src="/assets/images/products/Watch_Icons_160x160-Kids.webp"
                      alt=""
                    /> KIDS
                   
                  </Link>
                  <Link to="">
                    <img
                      className="watch-products"
                      src="/assets/images/products/Watch_Icons_160x160-Couple.webp"
                      alt=""
                    /> COUPLES
                    
                  </Link>
                </li>
                <li className="view-all-btn">
                  <Link to="">VIEW ALL</Link>
                </li>
              </ul>

              <ul className="col-md-3">
                <li>
                  <Link to="">
                    <b>SHOP BY TYPE</b>
                  </Link>
                </li>
                <li className="watch-li-block">
                  <Link to="">
                    <img
                      className="watch-products"
                      src="/assets/images/products/Watch_Icons_160x160-Automatic.webp"
                      alt=""
                    /> MECHANICAL
                   
                  </Link>
                  <Link to="">
                    <img
                      className="watch-products"
                      src="/assets/images/products/Watch_Icons_160x160-LeatherStrap.webp"
                      alt=""
                    /> LEATHER
                    
                  </Link>
                  <Link to="">
                    <img
                      className="watch-products"
                      src="/assets/images/products/Watch_Icons_160x160-Minimalist.webp"
                      alt=""
                    /> METAL
                  
                  </Link>
                  <Link to="">
                    <img
                      className="watch-products"
                      src="/assets/images/products/Watch_Icons_160x160-MetalStrap.webp"
                      alt=""
                    /> MINIMALIST
                   
                  </Link>
                </li>
                <li className="view-all-btn">
                  <Link to="">VIEW ALL</Link>
                </li>
              </ul>

              <ul className="col-md-3">
                <li>
                  <Link to="">
                    <b>SHOP BY COLLECTIONS</b>
                  </Link>
                </li>
                <li className="watch-li-block">
                  <Link to="">
                    <img
                      className="watch-products"
                      src="/assets/images/products/Watch_Icons_180x180-Minimals_Alt.webp"
                      alt=""
                    /> MINIMALS
                    
                  </Link>
                  <Link to="">
                    <img
                      className="watch-products"
                      src="/assets/images/products/Watch_Icons_160x160-MoJ.webp"
                      alt=""
                    /> RAGA
                   
                  </Link>
                  <Link to="">
                    <img
                      className="watch-products"
                      src="/assets/images/products/Watch_Icons_180x180-Solidarity.webp"
                      alt=""
                    /> SOLIDARITY
                    
                  </Link>
                  <Link to="">
                    <img
                      className="watch-products"
                      src="/assets/images/products/Watch_Icons_160x160-Animalia.webp"
                      alt=""
                    /> ANIMALIA
                    
                  </Link>
                </li>
                <li className="view-all-btn">
                  <Link to="">VIEW ALL</Link>
                </li>
              </ul>

              <ul className="col-md-3">
                <li>
                  <Link to="">
                    <b>SHOP ON TREND</b>
                  </Link>
                </li>
                <li className="watch-li-block">
                  <Link to="">
                    <img
                      className="watch-products"
                      src="/assets/images/products/Watch_Icons_160x160-MetalStrap.webp"
                      alt=""
                    /> SPORTY
                    
                  </Link>
                  <Link to="">
                    <img
                      className="watch-products"
                      src="/assets/images/products/Watch_Icons_160x160-Men.webp"
                      alt=""
                    /> GLAM
                    
                  </Link>
                  <Link to="">
                    <img
                      className="watch-products"
                      src="/assets/images/products/Watch_Icons_160x160-Women.webp"
                      alt=""
                    /> AUTOMATICS
                   
                  </Link>
                </li>
                <Link to="">
                    <img
                      className="watch-products"
                      src="/assets/images/products/Watch_Icons_160x160-Men.webp"
                      alt=""
                    /> GLAM
                    
                  </Link>
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

export default Megadropdown1;
