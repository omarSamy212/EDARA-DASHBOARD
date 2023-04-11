import { Link } from 'react-router-dom';
import Footer3 from '../footer/Footer3';
import {Requests} from "../requests/requests"
import {REqData} from "../services/reqdata"

export const RequestList = () => {

  const requestList = REqData;
 

  return (


    <div >
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
          <Link to={"/H"}class="nav-link active" aria-current="page" color="white" >Show History Requests</Link>
          </li>

          <li class="nav-item">
          <Link to={"/WH"} class="nav-link active" aria-current="page" color="white"  margin-left="50px">Warehouses</Link>
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
      {
        requestList.map((item) => {
          return (
            
            <Requests
              key={item.id}
              id={item.id}
              name={item.name}
              req={item.req}
          
            />
          );
        })
      }
     <Footer3/>
    </div>

  );
};
