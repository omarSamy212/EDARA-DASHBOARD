import { Link } from "react-router-dom";
import Footer1 from "../footer/Footer1";
import "../header/header.css";
import "../requests/history.css";
import { Header } from "../header/header";
import { getAuthToken } from "../../services/auth";
import { useEffect, useState } from "react";
import axios from "axios";
export const History = () => {
  const { token, user } = getAuthToken();
  const [requesth, setRequesth] = useState({
    loading: true,
    result: [],
    err: null,
    update: false,
  });

  const error = () => {
    return (
      <div className="container">
        <div className="row">
          {requesth.err.map((err, index) => {
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
    setRequesth({ ...requesth, loading: true });
    axios
      .get(`http://localhost:4000/api/stockreq/all-requests`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((data) => {
        setRequesth({
          ...requesth,
          result: data.data,
          loading: false,
          err: null,
        });
      })
      .catch((err) => {
        setRequesth({
          ...requesth,
          loading: false,
          err: [
            {
              msg: err.response.data.message,
            },
          ],
        });
      });
  }, []);

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
    <div class="gc11">
      <Header />
      {requesth.err !== null && error()}
      {requesth.loading === true ? (
        loadingSpinner()
      ) : (
        <>
          <div class="h">
            <div class="container py-5 text-white">
              <div class="row">
                <div class="col-lg-10 mx-auto">
                  <div class="card border-0 shadow">
                    <div class="card-body p-5">
                      <p class="list">Requests History</p>
                      <div class="table-responsive">
                        <table class="table m-0">
                          <thead>
                            <tr>
                              <th scope="col">Request Id</th>
                              <th scope="col">Product Id</th>
                              <th scope="col">Product Name</th>
                              <th scope="col">Supervisor Id</th>
                              <th scope="col">Supervisor Name</th>
                              <th scope="col">Warehouse Id</th>
                              <th scope="col">Warehouse Name</th>
                              <th scope="col">Requested Quantity</th>
                              <th scope="col">Request State</th>
                              <th scope="col"></th>
                            </tr>
                          </thead>
                          <tbody>
                          {requesth.result.map((rh) => {
                              
                              return (
                            <tr>
                              <td>{rh.id}</td>
                              <td>{rh.productId}</td>
                              <td>{rh.productName}</td>
                              <td>{rh.supervisorId}</td>
                              <td>{rh.supervisorName}</td>
                              <td>{rh.warehouseId}</td>
                              <td>{rh.warehouseName}</td>
                              <td>{rh.quantity}</td>
                              <td>{rh.status}</td>
                            </tr>
                            );
                            })}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer1 />
        </>
      )}
    </div>
  );
};
