import { Link, useParams } from "react-router-dom";

export const Product = (props) => {
const {wid, sid} = useParams();
    return (
 


<div>

      <div className="cardDesign5 bg-white">
        <div className="card">
          <img className="card-img-top" src={props.image} alt=""/>
          <div className="card-body"class=" p-1 text-center position-relative parent-card">
            <h4 className="card-name text-center">{props.name}</h4>
            <div class="grid">
            <span className="card-text">Quantity : {props.stock}</span>
            </div>
           
    
            <div class="btn-group" role="group" aria-label="Basic checkbox toggle button group child-card">
              <div class="d-grid gap-1 w-100 mt-4">
              <Link to={`/sq/${props.id}/${sid}/${props.stock}`} class="btn btn-dark" for="btncheck1">Send Stock Request</Link>
            </div>
            </div>
          
  </div>
  </div>
        </div>
      </div>
       
    
  
      
    );
  };