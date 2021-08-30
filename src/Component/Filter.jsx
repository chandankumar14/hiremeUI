import React from 'react'
import '../style/filter.css'
class Filter extends React.Component {
  render() {
    return (
      <div>
        <div className="mainContent">
          <div className="sidesbar">
            <h3>Filter here</h3>
            <select
              className="form-select form-select-lg mb-3"
              aria-label=".form-select-lg example"
            >
              <option selected>select State</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <select
              className="form-select form-select-lg mb-3"
              aria-label=".form-select-lg example"
            >
              <option selected>select City</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
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
            <div className="cards">card1</div>
            <div className="cards">card2</div>
            <div className="cards">card3</div>
          </div>
        </div>
      </div>
    )
  }
}
export default Filter
