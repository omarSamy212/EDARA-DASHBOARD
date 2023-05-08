import { Link, useParams } from "react-router-dom";
import "../products/products.css";
import axios from "axios";
export const Products = (props) => {
  const { id } = useParams();
  return (
    <div>
      <div className="cardDesign5 bg-white">
        <div className="card">
          <img className="card-img-top" src={props.image} alt="" />
          <div
            className="card-body"
            class=" p-1 text-center position-relative parent-card"
          >
            <h4 className="card-name text-center">{props.name}</h4>
            <span className="card-text">{props.Desc} </span>
            <div class="grid">
              <span className="card-text">Quantity : {props.stock}</span>
            </div>

            <div class="w-100 text-center position-absolute child-card">
              <Link to={`/upp/${id}/${props.id}`}>
                <button type="button" class="btn btn-warning m-1">
                  Update
                </button>
              </Link>
              <Link>
                <button
                  type="button"
                  class="btn btn-danger m-1"
                  onClick={() => {
                    // s({
                    //   ...warehouse,
                    //   loading: true,
                    //   err: null,
                    // });
                    // console.log(props.id);
                    axios
                      .delete(
                        `http://localhost:4000/api/product/${props.id}`,
                        {
                          // headers: {
                          //   Authorization: `Bearer ${token}`,
                          // },
                        }
                      )
                      .then(() => {
                        alert("Product deleted succesfully")
                      })
                      .catch((err) => {
                        console.log(err.response.data.message);
                      });
                  }}
                >
                  Delete
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
