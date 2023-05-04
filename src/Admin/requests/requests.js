import "../../Admin/requests/requests.css";
import "../header/header.css";

export const Requests = (props) => {
  return (
    <div class="aya">
      <div class="mb">
        <div class="cardcolor">
          <div
            class="container py-5 text-white"
            style={{ marginTop: -220, marginTop: -5 }}
          >
            <div class="row">
              <div class="col-lg-7 mx-auto">
                <div class="card border-0 shadow">
                  <div class="card-body p-5">
                    <div class="table-responsive">
                      <table class="table m-0">
                        <thead>
                          <tr>
                            <th scope="col">Supervisor Id</th>
                            <th scope="col">WareHouse Name</th>
                            <th scope="col">Request Type</th>

                            <th scope="col"></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>{props.id}</td>
                            <td>{props.name}</td>
                            <td>{props.req}</td>

                            <td>
                              <button
                                type="button"
                                class="btn btn-success btn-sm"
                              >
                                Accept
                              </button>
                              <button
                                type="button"
                                class="btn btn-danger btn-sm"
                                style={{ marginLeft: 20 }}
                              >
                                Reject
                              </button>
                            </td>
                          </tr>
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
    </div>
  );
};
