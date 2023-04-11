import { WarehouseDate } from "../services/WarehouseData";
import { Warehouses } from "./warehouses";
import { Link } from 'react-router-dom';
import '../header/header.css'
import './warehouseList.css'
import Footer1 from "../footer/Footer1";
export const WarehouseList = () => {


  const warehouse = WarehouseDate;
  const submit = (id) => {
    console.log(`the id is: ${id}`);
    
  };
 
  return (

    <div class="Omar3" >


  <nav  id ="navv"class="navbar navbar-expand-lg navbar-dark bg-dark" margin-left='70px'>
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
          <Link to={"/addw"}class="nav-link active" aria-current="page" color="white" >Add Warehouse</Link>
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
  </nav>

    <div class="color">
    <div class="d-flex flex-wrap justify-content-around container"> 
      {
        warehouse.map((item) => {
          return (
            <Warehouses

              key={item.id}
              image={item.image}
              id={item.id}
              name={item.name}
              location={item.location}
              status={item.status}
            
             
            
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
