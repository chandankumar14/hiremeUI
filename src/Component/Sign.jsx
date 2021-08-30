import React from "react";
import axios from "axios";

class Sign extends React.Component {
  constructor() {
    super();
    this.state = {
      FirstName: "",
      LastName: "",
      Email: "",
      Password: "",
      Address: "",
      Address_2: "",
      City: "",
      State: "",
      Zip: "",
      location: [],
    };
  }
  componentDidMount() {
    axios({
      method: "GET",
      url: "https://hiremeapi.herokuapp.com/location",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => this.setState({ location: res.data.location }))
      .catch((err) => console.log(err));
  }

  handleChange = (event, state) => {
    this.setState({ [state]: event.target.value });
  };
  selectStateChange = (event) => {
    this.state.State = event.target.value.split(",")[1];
  };

  Register = () => {
    const {
      FirstName,
      LastName,
      Email,
      Password,
      Address,
      Address_2,
      City,
      State,
      Zip,
    } = this.state;
    const custObj = {
      FirstName: FirstName,
      LastName: LastName,
      Email: Email,
      Password: Password,
      Address: Address,
      Address_2: Address_2,
      City: City,
      State: State,
      Zip: Zip,
    };
    axios({
      method: "POST",
      url: "https://hiremeapi.herokuapp.com/customer",
      headers: { "Content-Type": "application/json" },
      data: custObj,
    })
      .then((response) => {
        if (response.data.message == "customer added") {
          this.setState({
            FirstName: "",
            LastName: "",
            Email: "",
            Password: "",
            Address: "",
            Address_2: "",
            City: "",
            State: "",
            Zip: "",
          });
        }
      })
      .catch((err) => console.log(err));
  };
  render() {
    const { location } = this.state;
    return (
      <div>
        <section id="header" className="align-items-center">
          <div className="container-fluid ">
            <div className="row">
              <div className="col-10 mx-auto">
                <div className="row">
                  <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center">
                    <form className="row g-3">
                      <div className="col-md-6">
                        <label for="inputEmail4" className="form-label">
                          First Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          onChange={(event) =>
                            this.handleChange(event, "FirstName")
                          }
                        />
                      </div>
                      <div className="col-md-6">
                        <label for="inputEmail4" className="form-label">
                          Last Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          onChange={(event) =>
                            this.handleChange(event, "LastName")
                          }
                        />
                      </div>
                      <div className="col-md-6">
                        <label for="inputEmail4" className="form-label">
                          Email
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          onChange={(event) =>
                            this.handleChange(event, "Email")
                          }
                        />
                      </div>
                      <div className="col-md-6">
                        <label for="inputPassword4" className="form-label">
                          Password
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          onChange={(event) =>
                            this.handleChange(event, "Password")
                          }
                        />
                      </div>
                      <div className="col-12">
                        <label for="inputAddress" className="form-label">
                          Address
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          onChange={(event) =>
                            this.handleChange(event, "Address")
                          }
                          placeholder="1234 Main St"
                        />
                      </div>
                      <div className="col-12">
                        <label for="inputAddress2" className="form-label">
                          Address 2
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          onChange={(event) =>
                            this.handleChange(event, "Address_2")
                          }
                          placeholder="Apartment, studio, or floor"
                        />
                      </div>
                      <div className="col-md-6">
                        <label for="inputCity" className="form-label">
                          City
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          onChange={(event) => this.handleChange(event, "City")}
                        />
                      </div>
                      <div className="col-md-4">
                        <label for="inputState" className="form-label">
                          State
                        </label>
                        <select
                          id="inputState"
                          className="form-select"
                          onChange={(event) => this.selectStateChange(event)}
                        >
                          <option selected>select state....</option>
                          {location.map((item) => (
                            <option value={`${item.state_code},${item.state}`}>
                              {item.state}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="col-md-2">
                        <label for="inputZip" className="form-label">
                          Zip
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          onChange={(event) => this.handleChange(event, "Zip")}
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12">
            <button
              type="submit"
              className="btn btn-outline-primary"
              onClick={() => this.Register()}
              style={{margin:"20px 60px 60px 120px"}}
            >
              Sign in
            </button>
          </div>
        </section>
      </div>
    );
  }
}

export default Sign;
