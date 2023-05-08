import "../Login/login.css";
import Footer1 from "../Admin/footer/Footer1";
import axios from "axios";
import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import jwt from "jwt-decode";
import { setAuthToken } from "../services/auth";
import { Header } from "../Admin/header/header";

export const Login = (props) => {
  const navigate = useNavigate();

  const [login, setLogin] = useState({
    loading: false,
    err: null,
  });

  const form = useRef({
    email: "",
    password: "",
  });

  const submit = (e) => {
    e.preventDefault();
    setLogin({ ...login, loading: true });
    axios
      .post("http://localhost:4000/api/auth/login", {
        email: form.current.email.value,
        password: form.current.password.value,
      })
      .then((data) => {
        setLogin({ ...login, loading: false });
        const user = jwt(data.data.token);
        setAuthToken(data.data.token);
        if (user.userType === "admin") {
          navigate("/admin-home");
        } else if (user.userType === "supervisor") {
          navigate(`/supervisor-home/${user.warehouseId}/${user.id}`);
        }

        console.log(user.userType);
        console.log(user.id);
        console.log(user.warehouseId);
        // console.log(user.email);
      })
      .catch((errors) => {
        if (typeof errors.response.data.message === "string") {
          setLogin({
            ...login,
            loading: false,
            err: [{ msg: errors.response.data.message }],
          });
        } else {
          setLogin({
            ...login,
            loading: false,
            err: errors.response.data.message,
          });
        }
      });
  };

  const loadingSpinner = () => {
    return (
      <div className="container h-100">
        <div className="row h-100 justify-content-center align-items-center">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      </div>
    );
  };

  const error = () => {
    return (
      <div className="container">
        <div className="row">
          {login.err.map((err, index) => {
            return (
              <div
                key={index}
                className="col-sm-12 alert alert-danger"
                role="alert"
              >
                {err.msg}
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div class="Omar">
      {/* <nav id="navv" class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img
              src="https://www.freeiconspng.com/thumbs/dashboard-icon/dashboard-icon-3.png"
              width="35"
              height="35"
              class="d-inline-block align-top"
            ></img>
          </a>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul class="navbar-nav mb-2 mb-lg-0">
              <a>|</a>
              <Link
                      to={"/"}
                      class="navbar-brand"
                      aria-current="page"
                      color="white"
                    >
                      EDARA - Dashboard
                    </Link>
              <a>
                ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
              </a>

              <a class="navbar-brand" href="#">
                ~ W E L C O M E ~
              </a>
            </ul>
            <form class="d-flex"></form>
          </div>
        </div>
      </nav> */}
      <Header />
      {login.err !== null && error()}
      {login.loading === true ? (
        loadingSpinner()
      ) : (
        <>
          <section class="text-center text-lg-start">
            <div class="container py-4">
              <div class="row g-0 align-items-center">
                <div class="col-lg-6 mb-5 mb-lg-0">
                  <div class="omar">
                    <div class="card cascading-right">
                      <div class="card-body p-5 shadow-5 text-center">
                        <h2 class="fw-bold mb-5">Login</h2>

                        <form form onSubmit={(e) => submit(e)}>
                          <div class="form-outline mb-4">
                            <input
                              style={{ width: "75%", marginLeft: "82px" }}
                              type="email"
                              id="form3Example3"
                              class="form-control"
                              ref={(val) => {
                                form.current.email = val;
                              }}
                            />
                            <label class="form-label" for="form3Example3">
                              Email address
                            </label>
                          </div>

                          <div class="form-outline mb-4">
                            <input
                              style={{ width: "75%", marginLeft: "82px" }}
                              type="password"
                              id="form3Example4"
                              class="form-control"
                              ref={(val) => {
                                form.current.password = val;
                              }}
                            />
                            <label class="form-label" for="form3Example4">
                              Password
                            </label>
                          </div>

                          <div class="form-check d-flex justify-content-center mb-4">
                            <input
                              class="form-check-input me-2"
                              type="checkbox"
                              value=""
                              id="form2Example33"
                              checked
                            />
                            <label
                              class="form-check-label"
                              for="form2Example33"
                            >
                              I agree to the terms and conditions
                            </label>
                          </div>

                          <button
                            type="submit"
                            class="btn btn-primary btn-block mb-4"
                          >
                            Submit
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-lg-6 mb-5 mb-lg-0">
                  <img
                    src="https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg"
                    class="w-100 rounded-4 shadow-4"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </section>
          <Footer1 />
        </>
      )}
    </div>
  );
};
