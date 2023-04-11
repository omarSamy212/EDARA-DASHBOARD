import { Link } from 'react-router-dom';
import '../products/products.css'
export const Products = (props) => {

    return ( 
     

<div >

      <div className="cardDesign5 bg-white">
        <div className="card">
          <img className="card-img-top" src={props.image} alt=""/>
          <div className="card-body" class=" p-1 text-center position-relative parent-card">
            <h4 className="card-name text-center">{props.name}</h4>
            <span className="card-text">{props.Desc} </span> 
            <div class="grid">
            <span className="card-text">Quantity : {props.stock}</span>
            </div>
           

  <div class ="w-100 text-center position-absolute child-card">
  <Link to={"/addp"}><button type="button" class="btn btn-warning m-1">Update</button></Link>   
  <Link><button type="button" class="btn btn-danger m-1">Delete</button></Link>
  </div>
          </div>
        </div>
      </div>
      </div>
   
    );
  };