import '../Supervisor/productHistory.css'
import { Link } from "react-router-dom";
import '../Admin/header/header.css'
import Footer1 from '../Admin/footer/Footer1';
import { Header } from '../Admin/header/header';
export const ProductHistory=()=>
{

    return (<div class="gc22" >


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
          <Link to={"/SP"}class="nav-link active" aria-current="page" color="white" >Products</Link>
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

<div  id="hh" >
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
                                   
                                    <th scope="col">Product Id</th>
                                        <th scope="col">Product Name</th>
                                        <th scope="col">Product Description</th>
                                        <th scope="col">Stock</th>
                                        <th scope="col">Request Type</th>

                                       
                                        <th scope="col"></th>
                                    </tr>
                                </thead>
                                <tbody>   

                                    <tr class="rec">

                                        <td >49</td>   
                                        <td >Concealer</td>
                                        <td >fewehjrksmfbksdjfnwjr</td>
                                        <td>20</td>
                                        <td >Increase</td>

                                        
                                    </tr>
                                    <tr>
                                        <td >50</td>  
                                        <td >Concealer</td>
                                        <td >fewehjrksmfbksdjfnwjr</td>
                                        <td>20</td>
                                        <td >Increase</td>
                                        </tr>
                                        <tr>
                                            
                                        <td >51</td>  
                                        <td >Concealer</td>
                                        <td >fewehjrksmfbkwjr</td>
                                        <td>20</td>
                                        <td >Increase</td>
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