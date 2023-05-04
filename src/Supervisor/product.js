
export const Product = (props) => {

    return (
 


<div>

      <div className="cardDesign5 bg-white">
        <div className="card">
          <img className="card-img-top" src={props.image} alt=""/>
          <div className="card-body"class=" p-1 text-center position-relative parent-card">
            <h4 className="card-name text-center">{props.name}</h4>
            <span className="card-text">{props.Desc} </span> 
            <div class="grid">
            <span className="card-text">Quantity : {props.stock}</span>
            </div>
           
    
            <div class="btn-group" role="group" aria-label="Basic checkbox toggle button group child-card">
              <div class="d-grid gap-1 w-100 mt-4">
              <label class="btn btn-dark" for="btncheck1">Increase Quantity</label>
              <label class="btn btn-dark" for="btncheck2">Decrease Quantity</label>
            </div>
            </div>
          
  </div>
  </div>
        </div>
      </div>
       
    
  
      
    );
  };