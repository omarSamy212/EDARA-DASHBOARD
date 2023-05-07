import { Link, useParams } from "react-router-dom";
import Footer1 from "../footer/Footer1";
import "../header/header.css";
import "../warehouses/addWarehouse.css";
import { Header } from "../header/header";
import { useRef, useState } from "react";
import axios from "axios";
import { getAuthToken } from "../../services/auth";

export const UpWarehouse = () => {
  const { id } = useParams();
  const { token, user } = getAuthToken();
  const [warehouse, setWarehouse] = useState({
    loading: true,
    result: {},
    err: null,
  });

  const form = useRef({
    name: "",
    location: "",
    imageUrl: "",
  });

  const submit = (e) => {
    e.preventDefault();
    setWarehouse({ ...warehouse, loading: true });
    console.log(form.current.name.value);
    console.log(form.current.location.value);
    console.log(form.current.imageUrl.value);

    axios
      .put(`http://localhost:4000/api/warehouse/${id}`,{
        name: form.current.name.value,
        location: form.current.location.value,
        imageUrl: form.current.imageUrl.value,
      },
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        setWarehouse({ ...warehouse, loading: false });
        alert("Warehouse updated succesfully");
      })
      .catch((errors) => {
        setWarehouse({
          ...warehouse,
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
          {warehouse.err.map((err, index) => {
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
    <div class="omar6">
      <Header />
      <div className="Card">
        <div className="card">
          <form onSubmit={(e) => submit(e)}>
            <p>Manage Warehouse</p>
            <div class="row mb-4">
              <div class="col">
                <div class="form-outline">
                  <label class="form-label" for="form6Example1">
                    Warehouse Name
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
              {/* <div class="col">
                <div class="form-outline">
                  <label class="form-label" for="form6Example2">
                    Warehouse Id
                  </label>
                  <input type="text" id="form6Example2" class="form-control"  />
                </div>
              </div> */}
            </div>

            <div class="row mb-4">
              <div class="col">
                <div class="form-outline">
                  <label class="form-label" for="form6Example1">
                    Location
                  </label>
                  <input
                    type="text"
                    id="form6Example1"
                    class="form-control"
                    ref={(val) => {
                      form.current.location = val;
                    }}
                  />
                </div>
              </div>
              <div class="col">
                <div class="form-outline">
                  <label class="form-label" for="form6Example2">
                    Image URL
                  </label>
                  <input
                    type="text"
                    id="form6Example2"
                    class="form-control"
                    ref={(val) => {
                      form.current.imageUrl = val;
                    }}
                  />
                </div>
              </div>
            </div>

            <button type="submit" class="btn btn-primary btn-block mb-4">
              Submit
            </button>
          </form>
        </div>
      </div>
      <Footer1 />
    </div>
  );
};
