import React from 'react'
import  "../style/login.css"
import fb from '../assets/fb.png'
import gmail from '../assets/gmail.png'
import google from '../assets/google.png'

class Login extends React.Component {
  handleCostChange(itemd) {
   
  }

  render() {
    return (
      <div>
        <div class="box">
          <div class="form-box">
            <div class="button">
              <div id="btn"></div>
              <button type="button" class="toggle-btn" onclick="login()">
                Log In
              </button>
              <button type="button" class="toggle-btn" onclick="register()">
                Register
              </button>
            </div>
            <div class="social-icon">
              <img src={fb} />
              <img src={google} />
              <img src={gmail} />
            </div>
            <form id="login" action="" class="input-group">
              <input
                type="text"
                class="input-field"
                placeholder="User Id"
                required
              />
              <input
                type="password"
                class="input-field"
                placeholder="Enter password"
                required
              />
              <input type="checkbox" class="check-box" />
              <span>Remember me!</span>
              <button
                type="submit"
                class="submit-btn"
                onChange={() => this.handleCostChange(-1)}
              >
                Log in
              </button>
            </form>

            <form id="register" action="" class="input-group">
              <input
                type="text"
                class="input-field"
                placeholder="User Id"
                required
              />
              <input
                type="email"
                class="input-field"
                placeholder="Email Id"
                required
              />
              <input
                type="password"
                class="input-field"
                placeholder="Password"
                required
              />
              <input type="checkbox" class="check-box" />
              <span>I Agree To the Terms and condition.</span>
              <button
                type="submit"
                class="submit-btn"
                onChange={() => this.handleCostChange(-1)}
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
export default Login
