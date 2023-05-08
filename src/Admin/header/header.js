import React, { Component } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getAuthToken, removeAuthToken } from "../../services/auth";

export const Header = () => {
  const { token, user } = getAuthToken();
  const{wid,sid} = useParams();

  const navigate = useNavigate();
  return (
    <>
      <nav
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
              <Link class="navbar-brand" to={
                "/login"
              }>
                EDARA-DASHBOARED
              </Link>
              {user && user.userType === "admin" && (
                <li class="nav-item">
                  <Link
                    to={"/admin-home"}
                    class="nav-link active"
                    aria-current="page"
                    color="white"
                    margin-left="50px"
                  >
                    Warehouses
                  </Link>
                </li>
              )}

              {/* {user && user.userType === "admin" && (
                <li class="nav-item">
                  <Link
                    to={"/addw"}
                    class="nav-link active"
                    aria-current="page"
                    color="white"
                  >
                    Add Warehouse
                  </Link>
                </li>
              )} */}

              {user && user.userType === "admin" && (
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
              )}
              {/* {token && (
                <li class="nav-item">
                  <Link
                    to={"/H"}
                    class="nav-link active"
                    aria-current="page"
                    color="white"
                  >
                    Show History Requests
                  </Link>
                </li>
              )} */}

              {user && user.userType === "supervisor" && (
                <li class="nav-item">
                  <Link
                    to={`/PH/${user.id}`}
                    class="nav-link active"
                    aria-current="page"
                    color="white"
                  >
                    Show Requests History
                  </Link>
                </li>
              )}

              {user && user.userType === "admin" && (
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
              )}
              {/* {user && user.userType === "admin" && (
                <li class="nav-item">
                  <Link
                    to={"/addp"}
                    class="nav-link active"
                    aria-current="page"
                    color="white"
                  >
                    Add Prouduct
                  </Link>
                </li>
              )} */}
              {token && (
                <li onClick={()=>{
                  removeAuthToken();
                  navigate("/login");
                }} class="nav-item">
                  <Link
                    class="nav-link active"
                    aria-current="page"
                    color="white"
                  >
                    Logout
                  </Link>
                </li>
              )}
            </ul>
            <form class="d-flex"></form>
          </div>
        </div>
      </nav>
    </>
  );
};
