import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import {ProductCards} from "./Product_cards";
import '../App.css';

export function Product(props) {
  


	return(

<div className="container gap-2 d-grid">


    <div className="container sticky-top">
      <div className="row">
        <nav className="navbar bg-body-tertiary navbar-expand-lg bg-dark border-bottom border-bottom-dark" data-bs-theme="dark">

        <div className="col-lg-4 col-4">
        </div>

        <div className="col-lg-4 col-4">
        </div>

        <div className="col-lg-4 col-4">
          
                <Link className="nav-link d-inline-block"  to="/product/Product_cards"><span style={{color:"white"}}>Product List</span></Link>
                     
                <Link className="nav-link d-inline-block" to="manage_product"><span style={{color:"white"}}>Manage Products</span></Link>

          </div>
       </nav>
      </div>
    </div> 

    <div clasNames="container">
      <div className="row bg-transparent">

        <div className="col-lg-12 col-12 d-grid gap-2 d-sm-flex justify-content-md-end">

           <div className="btn-group">
            <button type="button" className="btn btn-primary btn-outline-white">Page</button>
            <button type="button" className="btn btn-primary btn-outline-white dropdown-toggle " data-bs-toggle="dropdown">
              <span className="visually-hidden">Toggle Dropdown</span>
            </button>
            <ul className="dropdown-menu dropdown-menu-end">
              
            </ul>
          </div>

          <div className="btn-group">
          <button className="btn btn-primary" type="button">Sorting</button>
          <button type="button" className="btn btn-primary btn-outline-white dropdown-toggle " data-bs-toggle="dropdown">
              <span className="visually-hidden">Toggle Dropdown</span>
          </button>
          <ul className="dropdown-menu dropdown-menu-end">
              <li><a className="dropdown-item" href="" >Sort A-Z</a></li>
              <li><a className="dropdown-item" href="" >Sort Z-A</a></li>
            </ul>
          </div>

        </div>           
      </div>
    </div>

           <div>
            <ProductCards/>
            </div>
    </div>
		)
}

