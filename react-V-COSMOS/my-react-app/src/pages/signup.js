import React from 'react';
import './css/SignUp.css'; 


const SignUp = () => {
  return (
    <div className="outer-container">
    <div className="form-container">
      <form className="signup-form">
        <h2>Create an Account</h2>

        <div className="form-group">
          <input type="text" placeholder="Full Name" />
        </div>

        <div className="form-group">
          <input type="email" placeholder="Email" />
          <button type="button" className="verify-button">Verify</button>
        </div>

        <div className="form-group">
          <input type="tel" placeholder="Phone" />
          <button type="button" className="verify-button">Verify</button>
        </div>

        <div className="form-group">
          <input type="password" placeholder="Password" />
        </div>

        <div className="form-group">
          <input type="password" placeholder="Confirm Password" />
        </div>

        <div className="form-group">
          <select>
            <option value="">Select Country</option>
          </select>
        </div>

        <div className="form-group">
          <input type="text" placeholder="City" />
        </div>

        <div className="form-group">
          <select>
            <option value="">Select Gender</option>
          </select>
        </div>

        <div className="form-group">
          <input type="date" />
        </div>

        <div className="form-group">
          <input type="file" />
        </div>

        <div className="form-group">
          <label>
            <input type="checkbox" /> I agree to the Terms and Conditions
          </label>
        </div>

        <div className="form-group">
          <button type="submit" className="submit-button">Sign Up</button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default SignUp;
