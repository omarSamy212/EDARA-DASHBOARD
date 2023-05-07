import { WarehouseDate } from "../services/WarehouseData";
import { Warehouses } from "./warehouses";
import { Link } from "react-router-dom";
import "../header/header.css";
import "./warehouseList.css";
import Footer1 from "../footer/Footer1";
import { Header } from "../header/header";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { getAuthToken } from "../../services/auth";

export const refresh_list = () =>{
  WarehouseList.setWarehouses({
    ...WarehouseList.warehouses,
    loading: false,
    err: null,
    update: !WarehouseList.warehouses.update,
  });
}

export const WarehouseList = () => {

  
  const { token, user } = getAuthToken();
  const [warehouses, setWarehouses] = useState({
    loading: true,
    result: [],
    err: null,
    update: false,
  });

  const error = () => {
    return (
      <div className="container">
        <div className="row">
          {warehouses.err.map((err, index) => {
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

  useEffect(() => {
    setWarehouses({ ...warehouses, loading: true });
    axios
      .get("http://localhost:4000/api/warehouse", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((data) => {
        setWarehouses({
          ...warehouses,
          result: data.data,
          loading: false,
          err: null,
        });
      })
      .catch((err) => {});
  }, [warehouses.update]);

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

  
  return (
    <div class="Omar3">
      <Header />
      {warehouses.err !== null && error()}
      {warehouses.loading === true ? (
        loadingSpinner()
      ) : (
        <>
          <>
            <Link to={"/addw"} style={{ backgroundColor: "#6096B4" }}>
              <button type="button" className="btn btn-warning m-1">
                Add Warehouse
              </button>
            </Link>
            <div class="color">
              <div class="d-flex flex-wrap justify-content-around container">
                {warehouses.result.map((item) => {
                  return (
                    <Warehouses
                      key={item.id}
                      image={item.imageUrl}
                      id={item.id}
                      name={item.name}
                      location={item.location}
                      // status={item.status}
                    />
                  );
                })}
              </div>
            </div>
            <Footer1 />
          </>
        </>
      )}
    </div>
  );
};
