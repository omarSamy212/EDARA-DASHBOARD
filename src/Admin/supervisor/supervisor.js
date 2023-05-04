import "../supervisor/supervisor.css";
import { Link } from "react-router-dom";
import "../header/header.css";
import Footer2 from "../footer/Footer2";
import { Header } from "../header/header";
export const Supervisor = () => {
  return (
    <div class="gc">
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
      <div class="omar90">
        <div
          class="container py-5 text-white"
          style={{ marginbottom: -75, marginTop: 5 }}
        >
          <div class="row">
            <div class="col-lg-7 mx-auto">
              <div class="card border-0 shadow">
                <div class="card-body p-5">
                  <p class="list">Supervisors List</p>
                  <div class="table-responsive">
                    <table class="table m-0">
                      <thead>
                        <tr>
                          <th scope="col">Supervisor Id</th>
                          <th scope="col">Supervisor Name</th>
                          <th scope="col">Warehouse name</th>

                          <th scope="col"></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>5000</td>
                          <td>Omar</td>
                          <td>Electronics</td>

                          <td>
                            <Link to={"/addSV"}>
                              <button
                                type="button"
                                class="btn btn-warning btn-sm"
                              >
                                Update
                              </button>
                            </Link>
                            <button
                              type="button"
                              class="btn btn-danger btn-sm"
                              style={{ marginLeft: 20 }}
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>6000</td>
                          <td>Aya</td>
                          <td>Makeup</td>

                          <td>
                            <Link to={"/addSV"}>
                              <button
                                type="button"
                                class="btn btn-warning btn-sm"
                              >
                                Update
                              </button>
                            </Link>
                            <button
                              type="button"
                              class="btn btn-danger btn-sm"
                              style={{ marginLeft: 20 }}
                            >
                              Delete
                            </button>
                          </td>
                        </tr>

                        <tr>
                          <td>7000</td>
                          <td>Malek</td>
                          <td>Furniture</td>

                          <td>
                            <Link to={"/addSV"}>
                              <button
                                type="button"
                                class="btn btn-warning btn-sm"
                              >
                                Update
                              </button>
                            </Link>
                            <button
                              type="button"
                              class="btn btn-danger btn-sm"
                              style={{ marginLeft: 20 }}
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
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
    </div>
  );
};
