import { useParams } from "react-router-dom";
import { ProductData } from "../Admin/services/productData";
import { Product } from "./product";
import { Link } from "react-router-dom";
import "../Admin/header/header.css";
import "../Admin/products/productList.css";
import Footer1 from "../Admin/footer/Footer1";
import { Header } from "../Admin/header/header";
import { getAuthToken } from "../services/auth";
import { useEffect, useState } from "react";
import axios from "axios";

export const SproductList = () => {
  // const productlist = ProductData;

  const { wid,sid } = useParams();
  const productList = ProductData;

  const { token, user } = getAuthToken();
  const [products, setProducts] = useState({
    loading: true,
    result: [],
    err: null,
    update: false,
  });

  const error = () => {
    return (
      <div className="container">
        <div className="row">
          {products.err.map((err, index) => {
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
    setProducts({ ...products, loading: true });
    axios
      .get(`http://localhost:4000/api/stockreq/products/${wid}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((data) => {
        setProducts({
          ...products,
          result: data.data,
          loading: false,
          err: null,
        });
      })
      .catch((err) => {});
  }, [products.update]);

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
    <div class="Omar5">
      <Header />
      {products.err !== null && error()}
      {products.loading === true ? (
        loadingSpinner()
      ) : (
        <>
          <div class="color">
            <div className="d-flex flex-wrap justify-content-between container">
              {products.result.map((item) => {
                return (
                  <Product
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    stock={item.quantity}
                    image={item.imageUrl}
                  />
                );
              })}
            </div>
          </div>
          <Footer1 />
        </>
      )}
    </div>
  );
};
