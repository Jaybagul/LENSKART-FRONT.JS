import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from './Login';
import Cart from './Cart';
import "./styles.css"
import WishList from './WishList';


const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light d-none d-sm-none d-md-none d-lg-block d-xl-block" >
        <div class="container-fluid" style={{ width: "97%", margin: 'auto' }}>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="#">Do More, Be More </a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#">Tryin3D</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">StoreLocator</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Singapore</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">UAE</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">John Jacobs</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Aqualens</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Cobrowsing</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Engineering Blog</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Partner With Us</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid" style={{ width: "97%", margin: 'auto' }}>
          <Link to={"/"}>

            <img src="https://static.lenskart.com/media/desktop/img/site-images/main_logo.svg" width={200} alt="" />
          </Link>
          <span>
            <img src="https://static1.lenskart.com/media/desktop/img/republic/eye/new-toll-number.png" className="mt-1" height={30} alt="Toll Number" />
          </span>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link to="/product" className="nav-link active">Track Products</Link>
              </li>
              <li className="nav-item">
                <Link to="/login" className="nav-link" data-bs-toggle="modal" data-bs-target="#exam" >Sign In & Sign Up</Link>
              </li>
              <li className="nav-item">
                <Link to="/wish/:id" data-bs-toggle="modal" data-bs-target="#wish" className="nav-link"><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#WishListNew_svg__a)"><path clipRule="evenodd" d="M11.993 5.136c-2-2.338-5.333-2.966-7.838-.826s-2.858 5.719-.89 8.25c1.635 2.105 6.585 6.544 8.207 7.98.182.162.272.242.378.274a.504.504 0 0 0 .286 0c.106-.032.197-.112.378-.273 1.623-1.437 6.573-5.876 8.208-7.98 1.967-2.532 1.658-6.133-.89-8.251-2.549-2.118-5.84-1.512-7.839.826Z" stroke="#333368" strokeWidth="1.5" strokeLinejoin="round"></path></g><defs><clipPath id="WishListNew_svg__a"><path fill="#fff" d="M0 0h24v24H0z"></path></clipPath></defs></svg> Wishlist</Link>
              </li>
              <li className="nav-item">
                <Link type="button" className="btn btn-demo" data-toggle="modal" data-target="#exampleModal"><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 9V6a4 4 0 0 0-8 0v3m-4.408 1.352-.6 6.4c-.17 1.82-.256 2.73.046 3.432a3 3 0 0 0 1.32 1.45C5.03 22 5.944 22 7.771 22h8.458c1.828 0 2.742 0 3.413-.366a3 3 0 0 0 1.32-1.45c.302-.703.217-1.612.046-3.432l-.6-6.4c-.144-1.537-.216-2.305-.561-2.886a3 3 0 0 0-1.292-1.176C17.945 6 17.173 6 15.629 6H8.371c-1.543 0-2.315 0-2.925.29a3 3 0 0 0-1.292 1.176c-.346.581-.418 1.35-.562 2.886Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"></path></svg> Cart</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* wish */}


      <div className="modal fade" id="wish" tabIndex="-1" aria-labelledby="modal" aria-hidden="true" style={{ backgroundColor: '#ffffff', }}>
        <div className="modal-dialog" style={{ backgroundColor: '#ffffff' }}>
          <div className="modal-content" style={{ backgroundColor: '#ffffff' }}>
            <div className="modal-header" style={{ backgroundColor: '#ffffff' }}>
              <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <WishList />
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>


      {/* eye */}
      <div className="modal fade" id="exam" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header" style={{ backgroundColor: "transparent", border: 'none' }}>
              <h5 className="modal-title" style={{ textAlign: 'center', margin: 'auto', paddingLeft: '20%' }} id="exampleModalLabel">SIGN IN</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="login-container">
                <Login />
              </div>

            </div>
          </div>

        </div>
      </div>



      <div className="container demo">
        <div className="text-center">

        </div>
        <div className="modal left fade" id="exampleModal" tabIndex="" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-body">
                <Cart />
                <div className="modal-footer">

                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Navbar
