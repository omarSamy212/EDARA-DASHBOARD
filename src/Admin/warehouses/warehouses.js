import { Link } from "react-router-dom";
import "./warehouses.css";
import { getAuthToken } from "../../services/auth";
import { useEffect, useState } from "react";
import axios from "axios";
import {refresh_list} from "./warehouseList"
export const Warehouses = (props) => {
  const { token, user } = getAuthToken();
  const [warehouse, setWarehouse] = useState({
    loading: true,
    result: [],
    err: null,
    update: false,
  });
  useEffect(() => {
    setWarehouse({ ...warehouse, loading: true });
  }, [warehouse.update]);

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
    <div className="cardDesign55 bg-white">
      <div className="card">
        <img className="card-img-top" src={props.image} alt="" />
        <div
          className="card-body"
          class=" p-1 text-center position-relative parent-card"
        >
          <h4 className="card-name text-center">{props.name}</h4>
          <span className="card-text">{props.location} </span>
          <div class="grid">
            <span className="card-text">{props.satus} </span>
          </div>
          <div
            class="btn-group"
            role="group"
            aria-label="Basic radio toggle button group"
          ></div>

          <div class="w-100 text-center position-absolute child-card">
            <Link to={`/products/${props.id}`}>
              <label class="btn btn-success m-1">Products</label>
            </Link>

            <Link to={`/upw/${props.id}`}>
              <button type="button" class="btn btn-warning m-1">
                Update
              </button>
            </Link>

            <button
              type="button"
              class="btn btn-danger m-1"
              onClick={() => {
                setWarehouse({
                  ...warehouse,
                  loading: true,
                  err: null,
                });
                console.log(props.id);
                axios
                  .delete(`http://localhost:4000/api/warehouse/${props.id}`, {
                    headers: {
                      Authorization: `Bearer ${token}`,
                    },
                  })
                  .then(() => {
                    refresh_list()
                  })
                  .catch((err) => {
                    setWarehouse({
                      ...warehouse,
                      loading: false,
                      err: [
                        {
                          msg: err.response.data.message,
                        },
                      ],
                    });
                  });
              }}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
