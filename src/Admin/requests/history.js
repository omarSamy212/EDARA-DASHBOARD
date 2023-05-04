import { Link } from 'react-router-dom';
import Footer1 from '../footer/Footer1';
import '../header/header.css'
import '../requests/history.css'
import { Header } from '../header/header';
export const History=()=>
{

    return (<div class="gc11" >


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
          <Link to={"/req"}class="nav-link active" aria-current="page" color="white" >Requests</Link>
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
</nav> */}

<Header />



<div   class ="h">
<div    class="container py-5 text-white" >
        <div class="row">
            <div class="col-lg-7 mx-auto">
                <div class="card border-0 shadow">
                    <div class="card-body p-5">

                    <p class="list">Requests History</p>
                        <div class="table-responsive">
                            <table class="table m-0">
                                <thead>
                                
                                    <tr>
                                   
                                        <th scope="col">Supervisor Id</th>
                                        <th scope="col">Warehouse Name</th>
                                        <th scope="col">Request Type</th>
                                        <th scope="col">Request State</th>

                                       
                                        <th scope="col"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        
                                        <td >5000</td>
                                        <td >Electronic</td>
                                        <td>Increase</td>
                                        <td>Approved</td>


                                        
                                    </tr>
                                    <tr>
                                        
                                        <td >6000</td>
                                        <td >Makeup</td>
                                        <td>Increase</td>
                                        <td>Declined</td>

                                        
                                    </tr>
                                    
                                    <tr>
                                        
                                        <td >7000</td>
                                        <td >Furniture</td>
                                        <td>Decrease</td>
                                        <td>Approved</td>

                                        
                                    </tr>
                                    
                                    
                                    
                                        
                                      
                                         
                                    
                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    </div>
<Footer1/>
</div>


    );

}