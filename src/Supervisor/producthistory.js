import "../Supervisor/productHistory.css";
import { Link, useParams } from "react-router-dom";
import "../Admin/header/header.css";
import Footer1 from "../Admin/footer/Footer1";
import { Header } from "../Admin/header/header";
import { useEffect, useState } from "react";
import axios from "axios";
import { getAuthToken } from "../services/auth";
export const ProductHistory = () => {
    const {uid} = useParams()
  const { token, user } = getAuthToken();
  const [phistory, setPhistory] = useState({
    loading: true,
    result: [],
    err: null,
    update: false,
  });

  const error = () => {
    return (
      <div className="container">
        <div className="row">
          {phistory.err.map((err, index) => {
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
    console.log(uid);
    setPhistory({ ...phistory, loading: true });
    axios
      .get(`http://localhost:4000/api/stockreq/requests/${uid}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((data) => {
        setPhistory({
          ...phistory,
          result: data.data,
          loading: false,
          err: null,
        });
      })
      .catch((err) => {
        setPhistory({
          ...phistory,
          loading: false,
          err: [
            {
              msg: err.response.data.message,
            },
          ],
        });
      });
  }, [phistory.update]);

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
    <div class="gc22">
      <Header />
      {phistory.err !== null && error()}
      {phistory.loading === true ? (
        loadingSpinner()
      ) : (
        <>
          <div id="hh">
            <div class="container py-5 text-white">
              <div class="row">
                <div class="col-lg-7 mx-auto">
                  <div class="card border-0 shadow">
                    <div class="card-body p-5">
                      <p class="list">Requests History</p>
                      <div class="table-responsive">
                        <table class="table m-0">
                          <thead>
                            <tr>
                              <th scope="col">StockRequest Id</th>
                              <th scope="col">Product Name</th>
                              <th scope="col">Requested stock</th>
                              <th scope="col">State</th>

                              <th scope="col"></th>
                            </tr>
                          </thead>
                          <tbody>
                            {phistory.result.map((rh) => {
                              console.log(rh);
                              return (
                                <tr class="rec">
                                  <td>{rh.id}</td>
                                  <td>{rh.product.name}</td>
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
