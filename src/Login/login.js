import '../Login/login.css'
import Footer1 from "../Admin/footer/Footer1"
 export const Login =(props)=>
{
  return (<div class="Omar" >
 <>
 <nav  id ="navv"class="navbar navbar-expand-lg navbar-dark bg-dark" >
    <div class="container-fluid" >
      <a  class="navbar-brand" href="#">
      <img src="https://www.freeiconspng.com/thumbs/dashboard-icon/dashboard-icon-3.png" width="35" height="35" class="d-inline-block align-top" ></img>
      </a>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
        <ul class="navbar-nav mb-2 mb-lg-0">
        <a>|</a>  
        <a class="navbar-brand" href="#">EDARA-DASHBOARED</a>
        <a>||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||</a>
      
        <a class="navbar-brand" href="#" >~ W E L C O M E ~</a>
        </ul>
        <form class="d-flex">
         
          
        </form>
      </div>
    </div>
  </nav>

<section class="text-center text-lg-start">

  <div class="container py-4">
    <div class="row g-0 align-items-center">
      <div class="col-lg-6 mb-5 mb-lg-0">
      <div class= "omar" >
        <div class="card cascading-right" 
            >
          <div class="card-body p-5 shadow-5 text-center">
            <h2 class="fw-bold mb-5">Login</h2>
           
            <form>

 
              <div class="form-outline mb-4">
                <input type="email" id="form3Example3" class="form-control" />
                <label class="form-label" for="form3Example3">Email address</label>
              </div>

       
              <div class="form-outline mb-4">
                <input type="password" id="form3Example4" class="form-control" />
                <label class="form-label" for="form3Example4">Password</label>
              </div>

        
              <div class="form-check d-flex justify-content-center mb-4">
                <input class="form-check-input me-2" type="checkbox" value="" id="form2Example33" checked />
                <label class="form-check-label" for="form2Example33">
                I agree to the terms and conditions
                </label>
              </div>

        
              <button type="submit" class="btn btn-primary btn-block mb-4">
                Submit
              </button>

             
            </form>
          </div>
        </div>
      </div>
      </div>

      <div class="col-lg-6 mb-5 mb-lg-0">
        <img src="https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg" class="w-100 rounded-4 shadow-4"
          alt="" />
      </div>
    </div>
  </div>

</section>

 </>

 <Footer1/>
</div>


);

}