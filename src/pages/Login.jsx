import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="px-5 lg:px-0">
      <div className="w-full max-w-[570px] mx-auto rounded-lg shadow-2xl md:p-10">
        <h3 className="text-black text-[22px] leading-9 font-bold mb-10 text-center">
          Hello! <span className="text-blue-400">Welcome</span> Back
        </h3>

        <form className="py-4 md:py-0 mx-4">
          <div className="mb-5">
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-blue-400 text-[16px] leading-7 text-black placeholder:text-stone-500 rounded-md cursor-pointer"
              required
            />
          </div>

          <div className="mb-5">
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-blue-400 text-[16px] leading-7 text-black placeholder:text-stone-500 rounded-md cursor-pointer"
              required
            />
          </div>

          <div className="mt-7">
            <button className="w-full bg-blue-600 text-white text-[18px] leading-[30px] rounded-lg px-4 py-3">
              Login
            </button>
            <p className="mt-5 text-center text-stone-600">
              Don't have an account?{" "}
              <Link to="/register" className="text-blue-500 font-medium ml-1">
                Register
              </Link>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
