import React from 'react'
import '../style/filter.css'
import img from '../assets/swp.jpeg'
import axios from 'axios'
import queryString from 'query-string'
class Filter extends React.Component {
  constructor() {
    super()
    this.state = {
      Technician: [],
      States: [],
      City: [],
    }
  }
  componentDidMount() {
    const queryParams = queryString.parse(this.props.location.search)
    const category_id = queryParams.category_id
    const obj = {
      category_id: category_id,
    }
    axios({
      method: 'POST',
      url: 'https://hiremeapi.herokuapp.com/filter',
      headers: { 'Content-Type': 'application/json' },
      data: obj,
    })
      .then((res) => this.setState({ Technician: res.data.restaurant }))
      .catch((err) => console.log(err))

    //location api call
    axios({
      method: 'GET',
      url: 'https://hiremeapi.herokuapp.com/location',
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => this.setState({ States: res.data.location }))
      .catch((err) => console.log(err))
  }

  selectStateChange = (event) => {
    const state_code = event.target.value.split(',')[0]
    let Obj = {
      state_code: state_code,
    }

    axios({
      method: 'POSt',
      url: 'https://hiremeapi.herokuapp.com/cityByid',
      headers: { 'Content-Type': 'application/json' },
      data: Obj,
    })
      .then((res) => this.setState({ City: res.data.citylist }))
      .catch((err) => console.log(err))
  }

  render() {
    const { States, City, Technician } = this.state

    return (
      <div>
        <div className="mainContent">
          <div className="sidesbar">
            <h3>Filter here</h3>
            <select
              className="form-select form-select-lg mb-3"
              aria-label=".form-select-lg example"
              onChange={(event) => this.selectStateChange(event)}
            >
              <option selected>select State</option>
              {States.map((item) => (
                <option value={`${item.state_code},${item.state}`}>
                  {item.state}
                </option>
              ))}
            </select>
            <select
              className="form-select form-select-lg mb-3"
              aria-label=".form-select-lg example"
            >
              <option selected>select City</option>
              {City.map((item) => (
                <option value={`${item.city_name},${item.location_id}`}>
                  {item.city_name}
                </option>
              ))}
            </select>

            <h3>min_charge</h3>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
              />
              <label className="form-check-label">Rs500 To Rs700</label>
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
              />
              <label className="form-check-label">Rs500 To Rs700</label>
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
              />
              <label className="form-check-label">Rs500 To Rs700</label>
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
              />
              <label className="form-check-label">Rs500 To Rs700</label>
            </div>
            <hr></hr>
            <h3>Sort Item</h3>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
              />
              <label className="form-check-label">low to high</label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
              />
              <label className="form-check-label">high to low</label>
            </div>
          </div>
          <div className="contnt">
            {Technician.length>0? Technician.map((item)=>{
              return <div>
              <div className="cards">
                <div className="row">
                  <div className="left">
                    <img src={img} alt="image" className="use-image" />
                  </div>
                  <div className="right">
                    <h3>{`${item.Firstname} ${item.lastName}`}</h3>
                    <h3> Skill:{item.skill}</h3>
                    <h3>Experience :{item.experience}</h3>
                    <h3>Min_price :Rs{item.min_price}</h3>
                  </div>
                </div>
                <button
                  type="button"
                  class="btn btn-success"
                  style={{ float: 'right', marginRight: '45px' }}
                >
                  Hire...
                </button>
              </div>
              </div>
            }):
            <div className="nodata"> Sorry No Data Found ......</div>}
          </div>
        </div>
      </div>
    )
  }
}
export default Filter
