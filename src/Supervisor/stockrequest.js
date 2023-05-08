import "../Admin/supervisor/addSupervisor.css";
import { Link, useParams } from "react-router-dom";
// import "../header/header.css";
import Footer1 from "../Admin/footer/Footer1";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { waitForElementToBeRemoved } from "@testing-library/react";
import { Header } from "../Admin/header/header";
export const StockRequest = () => {
  const { uid, cq, pid } = useParams();
  const [request, setRequest] = useState({
    loading: true,
    result: {},
    err: null,
  });

  const form = useRef({
    requestedQuantity: "",
  });

  // useEffect(() => {
  //   setRequest({ ...request, loading: true });
  //   axios
  //     .get(`http://localhost:4000/api/user/upsp/${id}`)
  //     .then((data) => {
  //       console.log(data);
  //       setRequest({
  //         ...request,
  //         result: data.data,
  //         loading: false,
  //         err: null,
  //       });
  //       // console.log(data.data);
  //     })
  //     .catch((err) => {
  //       setRequest({
  //         ...request,
  //         loading: false,
  //         err: [{ msg: `Sometthing went wrong ${err}` }],
  //       });
  //     });
  // }, []);

  const submit = (e) => {
    e.preventDefault();
    setRequest({ ...request, loading: true });

    // console.log(form.current.name.value);
    // console.log(form.current.password.value);
    // console.log(form.current.email.value);
    console.log(pid);
    axios
      .post(`http://localhost:4000/api/stockreq/send-request`, {
        productId: pid,
        supervisorId:uid,
        quantity: form.current.requestedQuantity.value,
      })
      .then(() => {
        setRequest({ ...request, loading: false });
        alert("Supervisor updated succesfully");
      })
      .catch((errors) => {
        setRequest({
          ...request,
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

  return (
    <div className="Super">
      {/* {request.err !== null && error()}
      {request.loading === true ? (
        load_Spinner()
      ) : ( */}
        <>
          <Header />
          <div id="form" className="Card1">
            <div className="card">
              <form onSubmit={(e) => submit(e)}>
                <p>Stock Request</p>
                <div class="row mb-4">
                  <div class="col">
                    <div class="form-outline">
                      <label class="form-label" for="form6Example1">
                        Current Stock
                      </label>
                      <input
                        type="text"
                        id="form6Example1"
                        class="form-control"
                        value={cq}
                        ref={(val) => {
                          form.current.name = val;
                        }}
                      />
                    </div>
                  </div>
                  <div class="col">
                    <div class="form-outline">
                      <label class="form-label" for="form6Example2">
                        New Stock
                      </label>
                      <input
                        type="text"
                        id="form6Example2"
                        class="form-control"
                        ref={(val) => {
                          form.current.requestedQuantity = val;
                          form.current.quantity = val;
                        }}
                      />
                    </div>
                  </div>
                </div>
                <button type="submit" class="btn btn-primary btn-block mb-4">
                  Submit Request
                </button>
              </form>
            </div>
          </div>
          <Footer1 />
        </>
      
    </div>
  );
};
