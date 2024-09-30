import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
        {/* Top bar Start */}
        <div className="top-bar">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-6">
                <i className="fa fa-envelope" />
                support@email.com
              </div>
              <div className="col-sm-6">
                <i className="fa fa-phone-alt" />
                +012-345-6789
              </div>
            </div>
          </div>
        </div>
        {/* Top bar End */}
        {/* Nav Bar Start */}
        <div className="nav">
          <div className="container-fluid">
            <nav className="navbar navbar-expand-md bg-dark navbar-dark">
              <Link to="#" className="navbar-brand">MENU</Link>
              <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                <div className="navbar-nav mr-auto">
                  <Link to="index" className="nav-item nav-link active">Home</Link>
                  <Link to="productlist" className="nav-item nav-link">Products</Link>
                  <Link to="productdetail" className="nav-item nav-link">Product Detail</Link>
                  <Link to="cart" className="nav-item nav-link">Cart</Link>
                  <Link to="checkout" className="nav-item nav-link">Checkout</Link>
                  <Link to="myaccount" className="nav-item nav-link">My Account</Link>
                  <div className="nav-item dropdown">
                    <Link to="#" className="nav-link dropdown-toggle" data-toggle="dropdown">More Pages</Link>
                    <div className="dropdown-menu">
                      <Link to="wishlist" className="dropdown-item">Wishlist</Link>
                      <Link to="login" className="dropdown-item">Login &amp; Register</Link>
                      <Link to="contact" className="dropdown-item">Contact Us</Link>
                    </div>
                  </div>
                </div>
                <div className="navbar-nav ml-auto">
                  <div className="nav-item dropdown">
                    <Link to="#" className="nav-link dropdown-toggle" data-toggle="dropdown">User Account</Link>
                    <div className="dropdown-menu">
                      <Link to="#" className="dropdown-item">Login</Link>
                      <Link to="#" className="dropdown-item">Register</Link>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
        {/* Nav Bar End */}
        {/* Bottom Bar Start */}
        <div className="bottom-bar">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-md-3">
                <div className="logo">
                  <a href="index.html">
                    <img src="img/logo.png" alt="Logo" />
                  </a>
                </div>
              </div>
              <div className="col-md-6">
                <div className="search">
                  <input type="text" placeholder="Search" />
                  <button><i className="fa fa-search" /></button>
                </div>
              </div>
              <div className="col-md-3">
                <div className="user">
                  <a href="wishlist.html" className="btn wishlist">
                    <i className="fa fa-heart" />
                    <span>(0)</span>
                  </a>
                  <a href="cart.html" className="btn cart">
                    <i className="fa fa-shopping-cart" />
                    <span>(0)</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Bottom Bar End */}  
        {/* Breadcrumb Start */}
        <div className="breadcrumb-wrap">
          <div className="container-fluid">
            <ul className="breadcrumb">
              <li className="breadcrumb-item"><a href="#">Home</a></li>
              <li className="breadcrumb-item"><a href="#">Products</a></li>
              <li className="breadcrumb-item active">Product List</li>
            </ul>
          </div>
        </div>
        {/* Breadcrumb End */}
      <Outlet />
    </>
  )
}
export default Layout