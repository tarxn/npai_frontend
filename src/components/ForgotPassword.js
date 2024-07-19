import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link, useParams } from "react-router-dom";
import logo from './Navbar/logo.jpeg';


const ForgotPassword = () => {
  const [formData, setFormData] = useState({
    email: ""
  });

  const [submit, setSubmit] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear error when user starts typing
    setSubmit(false);
    setSubmitMessage("");
  };

  axios.defaults.withCredentials = true;

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmit(true);
    // logic for, if the email id is not in the records
    setSubmitMessage(
      "The password reset link has been sent to your email successfully!"
    );
    
  };

  return (
    <div className="georama-light min-h-screen flex items-center justify-center bg-gray-100 font-serif">
      <div className="flex gap-8 ">
        <div className="text-white vertical-rl text-upright p-4  flex justify-center  items-center text-[2rem]">
        <img
            src={logo}
            alt="Neuropixel AI Logo"
            style={{ width: '300px', height: 'auto', marginRight: '10px' }}
          />
        </div>
        <div className="bg-white p-8 rounded-lg shadow-lg  max-w-md w-[100rem]">
          <h2 className="text-2xl font-bold mb-6 text-center">Forgot Password</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-100"
                required
              />
            </div>
            {submit && (
                <span className="text-sm text-green-500">
                  {submitMessage}
                </span>
              )}
            <button
              type="submit"
              className="w-full bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
            >
              Reset Password 
            </button>

            <div className="flex justify-start gap-[2rem] py-[1rem]">
              <span>
              {'Take me to '} 
              <Link to="/" className="text-blue-500 underline">
                 Login
              </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;