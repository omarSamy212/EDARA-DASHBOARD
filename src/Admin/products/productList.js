import { useParams } from "react-router-dom";
import { ProductData } from "../services/productData";
import { Products } from "./products";
import { Link } from "react-router-dom";
import "../header/header.css";
import "./productList.css";
import Footer1 from "../footer/Footer1";
import { Header } from "../header/header";
export const ProductList = () => {
  const productList = ProductData;

  return (
    <div class="Omar1">
      {/* <nav  id ="navv"class="navbar navbar-expand-lg navbar-dark bg-dark" margin-left='70px'>
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <a  class="navbar-brand" href="#">
      <img src="https://www.freeiconspng.com/thumbs/dashboard-icon/dashboard-icon-3.png" width="35" height="35" class="d-inline-block align-top" ></img>
      </a>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          
        <a class="navbar-brand" href="#">EDARA-DASHBOARED</a>
        
    
          <li class="nav-item"> 
          <Link to={"/addp"}class="nav-link active" aria-current="page" color="white" >Add Prouduct</Link>
          </li>

          <li class="nav-item">
          <Link to={"/WH"} class="nav-link active" aria-current="page" color="white"  margin-left="50px">Warehouses</Link>
          </li>
         
          <li class="nav-item">
            
          <Link to={"/req"}class="nav-link active" aria-current="page" color="white" >Requests</Link>
          </li>
    
  
          <li class="nav-item">
            
          <Link to={"/SV"}class="nav-link active" aria-current="page" color="white" >Supervisors</Link>
          </li>
          
        <li class="nav-item">
          <Link to={"/"} class="nav-link active" aria-current="page" color="white"  >Logout</Link>
          </li>
  
        </ul>
        <form class="d-flex">
         
          
        </form>
      </div>
    </div>
  </nav> */}

      <Header />
      <Link to={"/addp"} style={{ backgroundColor: "#6096B4" }}>
        <button type="button" className="btn btn-warning m-1">
          Add New Product
        </button>
      </Link>
      <div class="color">
        <div className="d-flex flex-wrap justify-content-between container ">
          {productList.map((item) => {
            return (
              <Products
                key={item.id}
                id={item.id}
                name={item.name}
                Desc={item.Desc}
                stock={item.stock}
                image={item.image}
              />
            );
          })}
        </div>
      </div>
      <Footer1 />
    </div>
  );
};
