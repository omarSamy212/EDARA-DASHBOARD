import { Link, useParams } from "react-router-dom";
import "../header/header.css";
import "../products/addProduct.css";
import Footer1 from "../footer/Footer1";
import { Header } from "../header/header";
import { useRef, useState } from "react";
import { getAuthToken } from "../../services/auth";
import axios from "axios";
export const UpdateProduct = () => {
  const { wid, pid } = useParams();
  const { token, user } = getAuthToken();
  const [product, setProduct] = useState({
    loading: true,
    result: {},
    err: null,
  });

  const form = useRef({
    name: "",
    quantity: "",
    imageUrl: "",
  });

  const submit = (e) => {
    e.preventDefault();
    setProduct({ ...product, loading: true });
    console.log(form.current.name.value);
    console.log(form.current.quantity.value);
    console.log(form.current.imageUrl.value);

    axios
      .put(
        `http://localhost:4000/api/product/${pid}`,
        {
          name: form.current.name.value,
          quantity: form.current.quantity.value,
          imageUrl: form.current.imageUrl.value,
          warehouseId: wid,
        },
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      )
      .then(() => {
        setProduct({ ...product, loading: false });
        alert("Product updated succesfully");
      })
      .catch((errors) => {
        setProduct({
          ...product,
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
          {product.err.map((err, index) => {
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
    <div class="Omar">
      <Header />

      <div id="form" className="Design">
        <div className="card">
          <form onSubmit={(e) => submit(e)}>
            <p>Manage Product</p>
            <div class="row mb-4">
              <div class="col">
                <div class="form-outline">
                  <label class="form-label" for="form6Example1">
                    Product Name
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
                    Product Id
                  </label>
                  <input type="text" id="form6Example2" class="form-control" />
                </div>
              </div> */}
            </div>

            <div class="row mb-4">
              {/* <div class="col">
                <div class="form-outline">
                  <label class="form-label" for="form6Example1">
                    Location
                  </label>
                  <input type="text" id="form6Example1" class="form-control" />
                </div>
              </div> */}
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

            <div class="row mb-4">
              <div class="col">
                <div class="form-outline">
                  <label class="form-label" for="form6Example1">
                    Stock
                  </label>
                  <input
                    type="text"
                    id="form6Example1"
                    class="form-control"
                    ref={(val) => {
                      form.current.quantity = val;
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
