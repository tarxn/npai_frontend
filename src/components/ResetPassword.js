import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link, useParams } from "react-router-dom";
import logo from './Navbar/logo.jpeg';

const ResetPassword = () => {
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setError(false);
    setErrorMessage("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError(true);
      setErrorMessage("Passwords do not match.");
      return;
    }

    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?#.&])[A-Za-z\d@$!#%*.?&]{8,}$/;
    if (!passwordPattern.test(formData.password)) {
      setError(true);
      setErrorMessage(
        "Password must be at least 8 characters long, contain at least one number, one uppercase and one lowercase letter, and one special character."
      );
      return; // Prevent form submission
    }

    // Assuming an endpoint for password reset exists
    axios.post('/api/reset-password', {
      password: formData.password
    })
    .then(() => {
      navigate("/login"); // Redirect to login page on successful password reset
    })
    .catch(error => {
      setError(true);
      setErrorMessage("An error occurred. Please try again.");
    });
  };

  return (
    <div className="georama-light min-h-screen flex items-center justify-center bg-gray-100 font-serif">
      <div className="flex gap-8 ">
        <div className="text-white vertical-rl text-upright p-4 flex justify-center items-center text-[2rem]">
          <img
            src={logo}
            alt="Neuropixel AI Logo"
            style={{ width: '300px', height: 'auto', marginRight: '10px' }}
          />
        </div>
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-[100rem]">
          <h2 className="text-2xl font-bold mb-6 text-center">Reset Password</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700">New Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-100"
                  required
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Confirm New Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-100"
                  required
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 px-4 py-2 bg-gray-200 rounded-r-lg focus:outline-none"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
              {error && (
                <span id="passwordHelp" className="text-sm text-red-500">
                  {errorMessage}
                </span>
              )}
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
            >
              Reset Password
            </button>

            <div className="flex justify-start gap-[2rem] py-[1rem]">
              <Link to="/login" className="text-blue-500 underline">
                Return to Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
