import "../supervisor/addSupervisor.css";
import { Link, useParams } from "react-router-dom";
import "../header/header.css";
import Footer1 from "../footer/Footer1";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { waitForElementToBeRemoved } from "@testing-library/react";
import { Header } from "../header/header";
export const UpdateSupervisor = () => {
  const { id } = useParams();
  const [supervisor, setSupervisor] = useState({
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
    setSupervisor({ ...supervisor, loading: true });
    axios
      .get(`http://localhost:4000/api/user/upsp/${id}`)
      .then((data) => {
        console.log(data);
        setSupervisor({
          ...supervisor,
          result: data.data,
          loading: false,
          err: null,
        });
        // console.log(data.data);
      })
      .catch((err) => {
        setSupervisor({
          ...supervisor,
          loading: false,
          err: [{ msg: `Sometthing went wrong ${err}` }],
        });
      });
  }, []);

  const submit = (e) => {
    e.preventDefault();
    setSupervisor({ ...supervisor, loading: true });
    console.log(form.current.name.value);
    console.log(form.current.password.value);
    console.log(form.current.email.value);
    console.log(form.current.warehouse.value);
    axios
      .put(`http://localhost:4000/api/user/${id}`, {
        username: form.current.name.value,
        password: form.current.password.value,
        email: form.current.email.value,
        warehouseId: form.current.warehouse.value,
      })
      .then(() => {
        setSupervisor({ ...supervisor, loading: false });
        alert("Supervisor updated succesfully");
      })
      .catch((errors) => {
        setSupervisor({
          ...supervisor,
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
          {supervisor.err.map((err, index) => {
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
      {supervisor.err !== null && error()}
      {supervisor.loading === true ? (
        load_Spinner()
      ) : (
        <>
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
                        value={supervisor.result.user.username}
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
                        {supervisor.result.warehouses.map((warehouse) => {
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
                  Update
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
