import React from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { Dropdown } from "react-bootstrap";

function Headertop() {
  let user = JSON.parse(localStorage.getItem("user-info"));
  let loged= JSON.parse(localStorage.getItem("username"))
  const history = useHistory();

  // logout function
  function logout() {
    localStorage.clear();
    history.push("/signup");
  }
  const state = useSelector((state) => state.handleCart);

  const [cartCount, setcartCount] = useState();
  useEffect(() => {
    let count = 0;
    if (state && state.length) {
      state.forEach((item) => {
        count += item.qty;
      });
      setcartCount(count);
    }
  }, [state, cartCount]);

  return (
    <>
      <div className=" top-container">
        <div className=" d-flex header-top">
          {localStorage.getItem("user-info")||localStorage.getItem("id") ? (
            <>
              <div className="dropdown user-info">
                <Link
                  className="btn btn-secondary dropdown-toggle toggle-link"
                  href="#"
                  role="button"
                  id="dropdownMenuLink"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    className="navbar-icons"
                    src="/assets/images/logo/user1.png"
                    alt=""
                  />
                  {localStorage.getItem("id")?loged:user.name}
                </Link>

                <ul
                  className="dropdown-menu logout"
                  aria-labelledby="dropdownMenuLink"
                >
                  <li>
                    {user &&user.email}
                    <button
                      onClick={logout}
                      className="dropdown-item log-out-btn"
                      href="#"
                    >
                      LogOut
                    </button>
                  </li>
                </ul>
              </div>
              <div>
                <NavLink className="remove-headertop-icons-set2" to="/mycart">
                  <img
                    className="navbar-icons"
                    src="/assets/images/logo/shopping-cart.png"
                    alt=""
                  />
                  CART<span className="items-in-cart">{state.length}</span>
                </NavLink>
              </div>
            </>
          ) : (
            <>
              <Link className="remove-headertop-icons-set1">
                <img
                  className="navbar-icons"
                  src="/assets/images/logo/TITAN+Logo+new.svg"
                />
              </Link>

              <div>
                <Link className="remove-headertop-icons-set1" to="/login">
                  <img
                    className="navbar-icons"
                    src="/assets/images/logo/user.png"
                    alt=""
                  />
                  LOGIN
                </Link>

                <Link to="/signup" className="remove-headertop-icons-set1">
                  <img
                    className="navbar-icons"
                    src="/assets/images/logo/log-in.png"
                    alt=""
                  />
                  SIGN UP
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Headertop;
