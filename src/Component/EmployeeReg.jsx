import axios from "axios";
import React from "react";
class Employee extends React.Component {
  constructor() {
    super();
    this.state = {
      FirstName: "",
      lastName: "",
      PhoneNo: "",
      gender: "",
      email: "",
      Password: "",
      permanentAddress: "",
      currentAddress: "",
      city: "",
      State: "",
      Zipcode: "",
      Experience: "",
      Skill: "",
      category_id:"",
      location_id:"",
      Category: [],
      location: [],
      cityList: [],
    };
  }

  // api call at loading time
  componentDidMount() {
    axios({
      method: "GET",
      url: "https://hiremeapi.herokuapp.com/category",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => this.setState({ Category: res.data.Category }))
      .catch((err) => console.log(err));

    //location api call
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
  selectChange = (event) => {
    this.state.gender = event.target.value;
  };
  selectSkilChange = (event) => {
    this.state.Skill = event.target.value.split(",")[1];
    this.state.category_id = event.target.value.split(",")[0]
    
  };

  
  selectStateChange = (event) => {
    this.state.State = event.target.value.split(",")[1];
    const state_code = event.target.value.split(",")[0];
    let Obj = {
      state_code: state_code,
    };

    axios({
      method: "POSt",
      url: "https://hiremeapi.herokuapp.com/cityByid",
      headers: { "Content-Type": "application/json" },
      data: Obj,
    })
      .then((res) => this.setState({ cityList: res.data.citylist }))
      .catch((err) => console.log(err));
  };
  selectCitychange = (event) => {
    this.state.location_id = event.target.value.split(",")[1];
    this.state.city = event.target.value.split(",")[0]
  };

  Register = () => {
    const {FirstName, lastName,email,permanentAddress,currentAddress,PhoneNo,gender,Password,city,Zipcode,
    Experience,Skill,category_id,location_id} = this.state
    const Objs = {
      FirstName:FirstName,
      lastName:lastName,
      email:email,
      permanentAddress:permanentAddress,
      currentAddress:currentAddress,
      PhoneNo:PhoneNo,
      gender:gender,
      Password:Password,
      city:city,
      Zipcode:Zipcode,
      Experience:Experience,
      Skill:Skill,
      category_id:category_id,
      location_id:location_id

    }
    axios({
      method: "POSt",
      url: "https://hiremeapi.herokuapp.com/employee",
      headers: { "Content-Type": "application/json" },
      data: Objs,
    })
      .then((res) =>{
       if(res.data.message =="employees register successfully"){
        this.props.history.push("/service")
       }
      })
      .catch((err) => console.log(err));
  };

  render() {
    const { Category, location, cityList } = this.state;
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
                            this.handleChange(event, "lastName")
                          }
                        />
                      </div>
                      <div className="col-md-6">
                        <label for="inputEmail4" className="form-label">
                          Phone-no
                        </label>
                        <input
                          type="phone"
                          className="form-control"
                          onChange={(event) =>
                            this.handleChange(event, "PhoneNo")
                          }
                        />
                      </div>
                      <div className="col-md-6">
                        <label for="inputEmail4" className="form-label">
                          gender
                        </label>
                        <select
                          onChange={(event) => this.selectChange(event)}
                          className="form-select"
                        >
                          <option selected>select gender...</option>
                          <option value="male">male</option>
                          <option value="femal">Female</option>
                        </select>
                      </div>
                      <div className="col-md-6">
                        <label for="inputEmail4" className="form-label">
                          Email
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          onChange={(event) =>
                            this.handleChange(event, "email")
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
                          permanentAddress
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="1234 Main St"
                          onChange={(event) =>
                            this.handleChange(event, "permanentAddress")
                          }
                        />
                      </div>
                      <div className="col-12">
                        <label for="inputAddress2" className="form-label">
                          CurrentAddress
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Apartment, studio, or floor"
                          onChange={(event) =>
                            this.handleChange(event, "currentAddress")
                          }
                        />
                      </div>
                      <div className="col-md-6">
                        <label for="inputCity" className="form-label">
                          City
                        </label>
                        <select id="inputState" className="form-select"
                        onChange={(event) =>
                          this.selectCitychange(event)
                        }>
                          <option selected>select city_name....</option>
                          {cityList.map((item) => (
                            <option
                              value={`${item.city_name},${item.location_id}`}
                            >
                              {item.city_name}
                            </option>
                          ))}
                        </select>
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
                          onChange={(event) =>
                            this.handleChange(event, "Zipcode")
                          }
                        />
                      </div>
                      <div className="col-md-6">
                        <label for="inputCity" className="form-label">
                          Experience
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          onChange={(event) =>
                            this.handleChange(event, "Experience")
                          }
                        />
                      </div>
                      <div className="col-md-6">
                        <label for="inputCity" className="form-label">
                          Skill
                        </label>
                        <select
                          className="form-select"
                          onChange={(event) => this.selectSkilChange(event)}
                        >
                          <option selected>select Skill...</option>
                          {Category.map((item) => (
                            <option value={`${item.category_id},${item.name}`}>
                              {item.name}
                            </option>
                          ))}
                        </select>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12">
          <button
            className="btn btn-outline-primary"
            onClick={() => this.Register()}
           style={{margin:"40px 10px 50px 80px",alignItems:"center",}}
          >
            Regiter
          </button>
        </div>
        </section>
      </div>
    );
  }
}

export default Employee;
