import { Link } from 'react-router-dom';
import Footer1 from '../footer/Footer1';
import '../header/header.css'
import  '../warehouses/addWarehouse.css'
import { Header } from '../header/header';
export const AddWarehouse=()=>
{
return (<div class="omar6" >

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
<div   className="Card">
        <div className="card">

  <form>
      <p>Manage Warehouse</p>
  <div class="row mb-4">
    <div class="col">
      <div class="form-outline">
      <label class="form-label" for="form6Example1">Warehouse Name</label>
        <input type="text" id="form6Example1" class="form-control" />
        
      </div>
    </div>
    <div class="col">
      <div class="form-outline">
      <label class="form-label" for="form6Example2">Warehouse Id</label>
        <input type="text" id="form6Example2" class="form-control" />
   
      </div>
    </div>
  </div>



  <div class="row mb-4">
    <div class="col">
      <div class="form-outline">
      <label class="form-label" for="form6Example1">Location</label>
        <input type="text" id="form6Example1" class="form-control" />
        
      </div>
    </div>
    <div class="col">
      <div class="form-outline">
      <label class="form-label" for="form6Example2">Image URL</label>
        <input type="text" id="form6Example2" class="form-control" />
   
      </div>
    </div>
  </div>


  
  <button type="submit" class="btn btn-primary btn-block mb-4">Submit</button>
</form>
</div>
</div>
<Footer1/>
</div>
);



}