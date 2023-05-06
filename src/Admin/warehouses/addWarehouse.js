import { Link } from "react-router-dom";
import Footer1 from "../footer/Footer1";
import "../header/header.css";
import "../warehouses/addWarehouse.css";
import { Header } from "../header/header";
import { useRef } from "react";
import axios from "axios";
import { getAuthToken } from "../../services/auth";

export const AddWarehouse = () => {
  const form = useRef({
    name: "",
    location: "",
    imageUrl: "",
  });

  const { token, user } = getAuthToken();
  const submit = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost:4000/api/warehouse",
        {
          name: form.current.name.value,
          location: form.current.location.value,
          imageUrl: form.current.imageUrl.value,
        },
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      )
      .then(() => {
        alert("Warehouse created successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div class="omar6">
      <Header />
      <div className="Card">
        <div className="card">
          <form onSubmit={(e) => submit(e)}>
            <p>Manage Warehouse</p>
            <div class="row mb-4">
              <div class="col">
                <div class="form-outline">
                  <label class="form-label" for="form6Example1">
                    Warehouse Name
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
                    Warehouse Id
                  </label>
                  <input type="text" id="form6Example2" class="form-control"  />
                </div>
              </div> */}
            </div>

            <div class="row mb-4">
              <div class="col">
                <div class="form-outline">
                  <label class="form-label" for="form6Example1">
                    Location
                  </label>
                  <input
                    type="text"
                    id="form6Example1"
                    class="form-control"
                    ref={(val) => {
                      form.current.location = val;
                    }}
                  />
                </div>
              </div>
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
