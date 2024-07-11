import { useEffect, useState } from "react";
import commerce from "../../lib/commerce";
import "../../styles/Header.css";
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Header() {
  const [merchant, setMerchantDetails] = useState({});
  
  const [logoUrl, setLogoUrl] = useState("");
  async function loadMerchantDetails() {
    try {
      var merchantResponse = await fetch("https://api.chec.io/v1/merchants", {
        method: "GET",
        headers: {
          "X-Authorization": "pk_57592c1e01d9e7ca56c01e13ca575289117a34ebef2b2",
        },
      });
      var data = await merchantResponse.json();
      setMerchantDetails(data);
      if (data?.data?.[0]?.images?.logo) {
        setLogoUrl(data.data[0].images.logo);
      } else {
        setLogoUrl("");
      }
    } catch (error) {
      console.error("Error fetching products:", error);
      setLogoUrl("");
    }
  }

  useEffect(() => {
    loadMerchantDetails();
  }, []);

  console.log("merchant details", merchant);

  console.log("logoUrl:", logoUrl);

  return (
    <div className="header  mt-0 p-0 ">
      <div className="navbar navbar-expand-lg m-0 p-0 mb-5">
        <div className="container-fluid">
          <div className="firstSection">
            <div className="logoContainer">
              <div className="logoImg">
                {logoUrl ? (
                  <img
                    src={logoUrl.url}
                    height={50}
                    width={60}
                    alt="merchant logo"
                    style={{ objectFit: "contain" }}
                  />
                ) : (
                  <span>Loading logo...</span>
                )}
                <p className="logoText"></p>
              </div>
            </div>
            <div className="locationContainer">
              <div className="locationIcon">
                <div className="userInfo">
                  <span className="del_location">
                    Delivering to Mumbai 400001
                  </span>
                  <br />
                  <i className="bi bi-geo-alt"></i>
                  <span>Update location</span>
                </div>
              </div>
            </div>
          </div>
          <div className="searchBar">
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <button
                  className="btn btn-outline-secondary dropdown-toggle"
                  type="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  All
                </button>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                  <div role="separator" className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">
                    Separated link
                  </a>
                </div>
              </div>
              <input
                type="text"
                className="form-control"
                aria-label="Text input with dropdown button"
              />
              
                <button type="button" className="btn btn-outline-warning bg-warning text-dark"><i className="bi bi-search"></i></button> 
              
            </div>

          </div>
          <div className="lastSection">
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <button className="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                EN
              </button>
              <ul className="dropdown-menu dropdown-menu-dark">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <button className="btn btn-dark dropdown-toggle"  data-bs-toggle="dropdown" aria-expanded="false">
                <p className="signin_btn">Hello,sign in</p>
                <p className="account">Account & Lists</p>
              </button>
              <ul className="dropdown-menu dropdown-menu-dark">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
          </ul>
          <div className="pt-1 pb-1 border border-white d-inline">
            <button type="button" className="btn d-inline "><p className="return text-white">Returns</p>
            <p className="order text-white">& Orders</p></button>
          </div>
          <div className="text-center cart">
            <Link to="/cart" className="cart_text text-white text-decoration-none"><i class="bi bi-cart-fill">Cart</i></Link>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
