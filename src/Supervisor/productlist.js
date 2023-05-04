import { useParams } from 'react-router-dom';
import { ProductData } from '../Admin/services/productData';
import {Product} from './product'
import { Link } from "react-router-dom";
import '../Admin/header/header.css'
import '../Admin/products/productList.css'
import Footer1 from '../Admin/footer/Footer1';
import { Header } from '../Admin/header/header';

export const SproductList = () => {

  const productlist = ProductData;
 

  return (<div class="Omar5" >
  

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
          <Link to={"/PH"}class="nav-link active" aria-current="page" color="white" >Show History Requests </Link>
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

<div class="color">
    <div className="d-flex flex-wrap justify-content-between container">
      {
        productlist.map((item) => {
          return (
            
            <Product
              key={item.id}
              id={item.id}
              name={item.name}
              Desc={item.Desc}
              stock={item.stock}
              image={item.image}
            />
          );
        })
      }
    </div>
   </div>
   <Footer1/>
   </div>
  );
};
