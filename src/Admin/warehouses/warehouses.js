import { Link } from 'react-router-dom';
import './warehouses.css'

export const Warehouses = (props) => {
 
  return (    
    <div className="cardDesign55 bg-white">
      <div className="card">
        <img className="card-img-top" src={props.image} alt=""/>
        <div className="card-body" class=" p-1 text-center position-relative parent-card">
          <h4 className="card-name text-center">{props.name}</h4>
          <span className="card-text">{props.location} </span> 
          <div class="grid">
          <span className="card-text">{props.satus} </span>
          </div>
          <div class="btn-group" role="group" aria-label="Basic radio toggle button group">

  
</div>


    


 
<div class ="w-100 text-center position-absolute child-card" >
    
    <Link to={"/products"}><label class="btn btn-success m-1">Products</label></Link>
     
    <Link to={"/addw"}><button type="button" class="btn btn-warning m-1">Update</button></Link>
     
    <button type="button" class="btn btn-danger m-1">Delete</button>
      
  
  </div>



        </div>
      </div>
    </div>
    
  );
};