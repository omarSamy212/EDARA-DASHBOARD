import "../supervisor/addSupervisor.css";
import { Link } from "react-router-dom";
import "../header/header.css";
import Footer1 from "../footer/Footer1";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { waitForElementToBeRemoved } from "@testing-library/react";
import { Header } from "../header/header";
export const AddSupervisor = () => {
  const [register, setRegister] = useState({
    loading: true,
    result: {},
    err: null,
  });

  const form = useRef({
    email: "",
    password: "",
    name: "",
    warehouse: "",
  });

  useEffect(() => {
    setRegister({ ...register, loading: true });
    axios
      .get("http://localhost:4000/api/auth//registerNewSP")
      .then((data) => {
        setRegister({
          ...register,
          result: data.data,
          loading: false,
          err: null,
        });
        // console.log(data.data);
      })
      .catch((err) => {
        setRegister({
          ...register,
          loading: false,
          err: [{ msg: `Sometthing went wrong ${err}` }],
        });
      });
  }, []);

  const submit = (e) => {
    e.preventDefault();
    setRegister({ ...register, loading: true });
    axios
      .post("http://localhost:4000/api/auth/register", {
        username: form.current.name.value,
        password: form.current.password.value,
        email: form.current.email.value,
        warehouseId: form.current.warehouse.value,
      })
      .then(() => {
        setRegister({ ...register, loading: false });
        alert("Supervisor created succesfully");
      })
      .catch((errors) => {
        setRegister({
          ...register,
          loading: false,
          err: errors.response.data.message,
        });
      });
  };

  const load_Spinner = () => {
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
          {register.err.map((err, index) => {
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
    <div className="Super">
      {register.err !== null && error()}
      {register.loading === true ? (
        load_Spinner()
      ) : (
        <>
          {/* <nav
            id="navv"
            class="navbar navbar-expand-lg navbar-dark bg-dark"
            margin-left="70px"
          >
            <div class="container-fluid">
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarTogglerDemo03"
                aria-controls="navbarTogglerDemo03"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <a class="navbar-brand" href="#">
                <img
                  src="https://www.freeiconspng.com/thumbs/dashboard-icon/dashboard-icon-3.png"
                  width="35"
                  height="35"
                  class="d-inline-block align-top"
                ></img>
              </a>
              <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <a class="navbar-brand" href="#">
                    EDARA-DASHBOARED
                  </a>

                  <li class="nav-item">
                    <Link
                      to={"/SV"}
                      class="nav-link active"
                      aria-current="page"
                      color="white"
                    >
                      Supervisors
                    </Link>
                  </li>

                  <li class="nav-item">
                    <Link
                      to={"/WH"}
                      class="nav-link active"
                      aria-current="page"
                      color="white"
                      margin-left="50px"
                    >
                      Warehouses
                    </Link>
                  </li>

                  <li class="nav-item">
                    <Link
                      to={"/req"}
                      class="nav-link active"
                      aria-current="page"
                      color="white"
                    >
                      Requests
                    </Link>
                  </li>

                  <li class="nav-item">
                    <Link
                      to={"/"}
                      class="nav-link active"
                      aria-current="page"
                      color="white"
                    >
                      Logout
                    </Link>
                  </li>
                </ul>
                <form class="d-flex"></form>
              </div>
            </div>
          </nav> */}
          <Header />
          <div id="form" className="Card1">
            <div className="card">
              <form onSubmit={(e) => submit(e)}>
                <p>Manage Supervisor</p>
                <div class="row mb-4">
                  <div class="col">
                    <div class="form-outline">
                      <label class="form-label" for="form6Example1">
                        Supervisor Name
                      </label>
                      <input
                        type="text"
                        id="form6Example1"
                        class="form-control"
                        ref={(val) => {
                          form.current.name = val;
                        }}
                      />
                    </div>
                  </div>
                  <div class="col">
                    <div class="form-outline">
                      <label class="form-label" for="form6Example2">
                        Password
                      </label>
                      <input
                        type="text"
                        id="form6Example2"
                        class="form-control"
                        ref={(val) => {
                          form.current.password = val;
                        }}
                      />
                    </div>
                  </div>
                </div>

                <div class="row mb-4">
                  <div class="col">
                    <div class="form-outline">
                      <label class="form-label" for="form6Example1">
                        Warehouse
                      </label>
                      <select
                        class="form-select"
                        id="form6Example1"
                        aria-label="Default select example"
                        ref={(val) => {
                          form.current.warehouse = val;
                        }}
                      >
                        <option value="-1">Select warehouse</option>
                        {register.result.warehouses.map((warehouse) => {
                          return (
                            <option key={warehouse.id} value={warehouse.id}>
                              {warehouse.name}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                  </div>
                  <div class="col">
                    <div class="form-outline">
                      {/* <label class="form-label" for="form6Example2">
                        Warehouse Id
                      </label>
                      <input
                        type="text"
                        id="form6Example2"
                        class="form-control"
                      /> */}
                    </div>
                  </div>
                </div>

                <div class="row mb-4">
                  <div class="col">
                    <div class="form-outline">
                      <label class="form-label" for="form6Example1">
                        Email
                      </label>
                      <input
                        type="text"
                        id="form6Example1"
                        class="form-control"
                        ref={(val) => {
                          form.current.email = val;
                        }}
                      />
                    </div>
                  </div>
                  <div class="col">
                    <div class="form-outline">
                      <label class="form-label" for="form6Example2">
                        Phone
                      </label>
                      <input
                        type="text"
                        id="form6Example2"
                        class="form-control"
                      />
                    </div>
                  </div>
                </div>

                <button type="submit" class="btn btn-primary btn-block mb-4">
                  Register
                </button>
              </form>
            </div>
          </div>
          <Footer1 />
        </>
      )}
    </div>
  );
};
