import "../supervisor/supervisor.css";
import { Link } from "react-router-dom";
import "../header/header.css";
import Footer2 from "../footer/Footer2";
import { Header } from "../header/header";
import axios from "axios";
import { getAuthToken } from "../../services/auth";
import { useEffect, useState } from "react";
export const Supervisor = () => {
  const { token, user } = getAuthToken();
  const [supervisors, setSupervisors] = useState({
    loading: true,
    result: [],
    err: null,
    update: false,
  });

  const error = () => {
    return (
      <div className="container">
        <div className="row">
          {supervisors.err.map((err, index) => {
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
    setSupervisors({ ...supervisors, loading: true });
    axios
      .get("http://localhost:4000/api/user/sp-wh", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((data) => {
        setSupervisors({
          ...supervisors,
          result: data.data,
          loading: false,
          err: null,
        });
      })
      .catch((err) => {
        setSupervisors({
          ...supervisors,
          loading: false,
          err: [
            {
              msg: err.response.data.message,
            },
          ],
        });
      });
  }, [supervisors.update]);

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
    <div class="gc">
      <Header />

      {supervisors.err !== null && error()}
      {supervisors.loading === true ? (
        loadingSpinner()
      ) : (
        <>
          <div class="omar90">
            <div
              class="container py-5 text-white"
              style={{ marginbottom: -75, marginTop: 5 }}
            >
              <div class="row">
                <div class="col-lg-9 mx-auto">
                  <div class="card border-0 shadow">
                    <div class="card-body p-5">
                      <p class="list">Supervisors List</p>
                      <div class="table-responsive">
                        <table class="table m-0">
                          <thead>
                            <tr>
                              <th scope="col">Name</th>
                              <th scope="col">Email</th>
                              <th scope="col">Warehouse</th>

                              <th scope="col"></th>
                            </tr>
                          </thead>
                          <tbody>
                            {supervisors.result.map((sp) => {
                              return (
                                <tr>
                                  <td>{sp.username}</td>
                                  <td>{sp.email}</td>
                                  <td>{sp.warehouses[0].name}</td>

                                  <td>
                                    <Link to={`/upSV/${sp.id}`}>
                                      <button
                                        type="button"
                                        class="btn btn-warning btn-sm"
                                      >
                                        Update
                                      </button>
                                    </Link>

                                    <button
                                      onClick={() => {
                                        setSupervisors({
                                          ...supervisors,
                                          loading: true,
                                          err: null,
                                        });
                                        axios
                                          .delete(
                                            `http://localhost:4000/api/user/${sp.id}`,
                                            {
                                              headers: {
                                                Authorization: `Bearer ${token}`,
                                              },
                                            }
                                          )
                                          .then((data) => {
                                            setSupervisors({
                                              ...supervisors,
                                              loading: false,
                                              err: null,
                                              update: !supervisors.update,
                                            });
                                          })
                                          .catch((err) => {
                                            setSupervisors({
                                              ...supervisors,
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
                                      type="button"
                                      class="btn btn-danger btn-sm"
                                      style={{ marginLeft: 20 }}
                                    >
                                      Delete
                                    </button>
                                  </td>
                                </tr>
                              );
                            })}

                            <div class="button1">
                              <Link to={"/addSV"}>
                                <label class="btn btn-success " for="btnradio1">
                                  Add Supervisor
                                </label>
                              </Link>
                            </div>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer2 />
        </>
      )}
    </div>
  );
};
