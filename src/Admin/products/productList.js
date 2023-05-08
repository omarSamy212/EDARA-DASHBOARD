import { useParams } from "react-router-dom";
import { ProductData } from "../services/productData";
import { Products } from "./products";
import { Link } from "react-router-dom";
import "../header/header.css";
import "./productList.css";
import Footer1 from "../footer/Footer1";
import { Header } from "../header/header";
import { getAuthToken } from "../../services/auth";
import { useEffect, useState } from "react";
import axios from "axios";

export const ProductList = () => {
  const { id } = useParams();
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
      .get(`http://localhost:4000/api/product/wh-p/${id}`, {
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
    <div class="Omar1">
      <Header />
      {products.err !== null && error()}
      {products.loading === true ? (
        loadingSpinner()
      ) : (
        <>
          <Link to={`/addp/${id}`} style={{ backgroundColor: "#6096B4" }}>
            <button type="button" className="btn btn-warning m-1">
              Add New Product
            </button>
          </Link>
          <div class="color">
            <div className="d-flex flex-wrap justify-content-between container ">
              {products.result.map((item) => {
                console.log(products.result);
                return (
                  <Products
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
      ;
    </div>
  );
};
