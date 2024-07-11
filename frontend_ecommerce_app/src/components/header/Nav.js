import { useState,useEffect } from "react";
import '../../styles/Nav.css'
import { NavLink } from "react-router-dom";

function Nav() {
    const[categories,setCategories]=useState([]);

    async function loadCategories(){
        try{
          var categoryResponse=await fetch("https://api.chec.io/v1/categories",{
            method:'GET',
             headers:{
               'X-Authorization':'pk_57592c1e01d9e7ca56c01e13ca575289117a34ebef2b2'
               
            },
           });
            var categoryData= await categoryResponse.json();
            setCategories(categoryData.data);
        }catch (error) {
          console.error('Error fetching products:', error);
       }
      }
      useEffect(()=>{
        loadCategories();
      },[])
      console.log("categories ",categories);
      

    return ( 
        <div>
              
        <nav className="navbar navbar-dark bg-dark ">
          <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            
             {categories.map(category => (
          <NavLink to='#' className="categoryName navbar-brand" key={category.id}>{category.name} </NavLink>))}  
    
            <NavLink to="/products" className="navbar-brand" >All Products</NavLink>

            
           
            <div className="offcanvas offcanvas-end text-bg-dark" 
             id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Dark offcanvas</h5>
                <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Dropdown
                    </a>
                    <ul className="dropdown-menu dropdown-menu-dark">
                      <li><a className="dropdown-item" href="#">Action</a></li>
                      <li><a className="dropdown-item" href="#">Another action</a></li>
                      <li>
                        <hr className="dropdown-divider"/>
                      </li>
                      <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                  </li>
                </ul>
                <form className="d-flex mt-3" role="search">
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                  <button className="btn btn-success" type="submit">Search</button>
                </form>
              </div>
            </div>
          </div>
        </nav>
        
          </div>

     );
}

export default Nav;