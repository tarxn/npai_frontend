import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import logo from './Navbar/logo.jpeg';

const SignUp = () => {
  const [formData, setFormData] = useState({
    organizationName: "",
    username: "",
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    profilePicture: null
  });

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "profilePicture") {
      setFormData({ ...formData, [name]: e.target.files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }

    // Clear error when user starts typing
    setError(false);
    setErrorMessage("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate password
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
      return;
    }

    // Here you would typically handle the actual signup logic, perhaps sending a request to your backend
    console.log(formData);
    navigate("/home"); // Redirect after successful sign-up
  };

  return (
    <div className="georama-light min-h-screen flex items-center justify-center bg-gray-100 font-serif">
      <div className="flex gap-8">
        <div className="text-white vertical-rl text-upright p-4 flex justify-center items-center text-[2rem]">
          <img
            src={logo}
            alt="Neuropixel AI Logo"
            style={{ width: '300px', height: 'auto', marginRight: '10px' }}
          />
        </div>
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-[100rem]">
          <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
          <form onSubmit={handleSubmit} encType="multipart/form-data">
            <div className="mb-4">
              <label className="block text-gray-700">Organization Name</label>
              <input
                type="text"
                name="organizationName"
                value={formData.organizationName}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-100"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Username</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-100"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-100"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Email ID</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-100"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-100"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-100"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Upload Profile Picture (optional)</label>
              <input
                type="file"
                name="profilePicture"
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-100"
              />
            </div>
            {error && (
              <span className="text-sm text-red-500">{errorMessage}</span>
            )}
            <button
              type="submit"
              className="w-full bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
