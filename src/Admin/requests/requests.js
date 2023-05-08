import { useEffect, useState } from "react";
import "../../Admin/requests/requests.css";
import "../header/header.css";
import { getAuthToken } from "../../services/auth";
import axios from "axios";

export const Requests = () => {
  const { token, user } = getAuthToken();
  const [request, setRequest] = useState({
    loading: true,
    result: [],
    err: null,
    update: false,
  });

  const error = () => {
    return (
      <div className="container">
        <div className="row">
          {request.err.map((err, index) => {
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
    setRequest({ ...request, loading: true });
    axios
      .get(`http://localhost:4000/api/stockreq/pending-requests`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((data) => {
        setRequest({
          ...request,
          result: data.data,
          loading: false,
          err: null,
        });
      })
      .catch((err) => {
        setRequest({
          ...request,
          loading: false,
          err: [
            {
              msg: err.response.data.message,
            },
          ],
        });
      });
  }, [request.update]);

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
    <div class="aya">
      {request.err !== null && error()}
      {request.loading === true ? (
        loadingSpinner()
      ) : (
        <div class="mb">
          <div class="cardcolor">
            <div
              class="container py-5 text-white"
              style={{ marginTop: -220, marginTop: -5 }}
            >
              <div class="row">
                <div class="col-lg-10 mx-auto">
                  <div class="card border-0 shadow">
                    <div class="card-body p-5">
                      <div class="table-responsive">
                        <table class="table m-0">
                          <thead>
                            <tr>
                              <th scope="col">Request Id</th>
                              <th scope="col">Stock Requested</th>
                              <th scope="col">Supervisor Id</th>
                              <th scope="col">WareHouse Name</th>
                              <th scope="col">Product Name</th>

                              <th scope="col"></th>
                            </tr>
                          </thead>
                          <tbody>
                            {request.result.map((rh) => {
                              console.log(rh);
                              return (
                                <tr>
                                  <td>{rh.id}</td>
                                  <td>{rh.quantity}</td>
                                  <td>{rh.supervisorId}</td>
                                  <td>{rh.warehouseName}</td>
                                  <td>{rh.productName}</td>
                                  <td>
                                    <button
                                      type="button"
                                      class="btn btn-success btn-sm"
                                      onClick={() => {
                                        setRequest({
                                          ...request,
                                          loading: true,
                                          err: null,
                                        });
                                        console.log(rh.quantity);
                                        console.log(rh.productId);
                                        console.log(rh.id);
                                        axios
                                          .put(
                                            `http://localhost:4000/api/stockreq/approve-request/${rh.id}`,
                                            {
                                              productId: rh.productId,
                                            }
                                          )
                                          .then((data) => {
                                            setRequest({
                                              ...request,
                                              loading: false,
                                              err: null,
                                              update: !request.update,
                                            });
                                          })
                                          .catch((err) => {
                                            setRequest({
                                              ...request,
                                              loading: false,
                                              err: [
                                                {
                                                  msg: err.response.data
                                                    .message,
                                                },
                                              ],
                                            });
                                          });
                                      }}
                                    >
                                      Accept
                                    </button>
                                    <button
                                      type="button"
                                      class="btn btn-danger btn-sm"
                                      style={{ marginLeft: 20 }}
                                      onClick={() => {
                                        setRequest({
                                          ...request,
                                          loading: true,
                                          err: null,
                                        });
                                        console.log(rh.quantity);
                                        console.log(rh.productId);
                                        console.log(rh.id);
                                        axios
                                          .put(
                                            `http://localhost:4000/api/stockreq/reject-request/${rh.id}`
                                          )
                                          .then((data) => {
                                            setRequest({
                                              ...request,
                                              loading: false,
                                              err: null,
                                              update: !request.update,
                                            });
                                          })
                                          .catch((err) => {
                                            setRequest({
                                              ...request,
                                              loading: false,
                                              err: [
                                                {
                                                  msg: err.response.data
                                                    .message,
                                                },
                                              ],
                                            });
                                          });
                                      }}
                                    >
                                      Reject
                                    </button>
                                  </td>
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
        </div>
      )}
    </div>
  );
};
