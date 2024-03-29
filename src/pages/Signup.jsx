import React, { useState } from "react";
import signupImg from "../assets/images/signup.gif";
import avatar from "../assets/images/doctor-img01.png";
import { Link } from "react-router-dom";

const Signup = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previeURL, setPreviewURL] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    photo: "selectedFile",
    gender: "",
    role: "patient",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileInputChange = async (event) => {
    const file = event.target.files[0];
  };

  const submitHandler = async (event) => {
    event.preventDefault();
  };

  return (
    <section className="px-5 xl:px-0">
      <div className="max-w-[1170px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* ==== img box ==== */}
          <div className="hidden lg:block bg-blue-500 rounded-full overflow-hidden">
            <figure className="rounded-full">
              <img
                src={signupImg}
                alt=""
                className="w-full h-full object-cover"
              />
            </figure>
          </div>
          {/* ==== sign up form ===== */}
          <div className="rounded-full lg:pl-16 py-10">
            <h3 className="text-black text-[22px] leading-9 font-bold mb-10">
              Create an <span className="text-blue-500">account</span>
            </h3>

            <form className="md:mx-6 sm:mx-6" onSubmit={submitHandler}>
              <div>
                <input
                  type="text"
                  placeholder="Full Name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full pr-4 px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-blue-400 text-[16px] leading-7 text-black placeholder:text-stone-500 rounded-md cursor-pointer"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full pr-4 px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-blue-400 text-[16px] leading-7 text-black placeholder:text-stone-500 rounded-md cursor-pointer"
                  required
                />
              </div>
              <div>
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full pr-4 px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-blue-400 text-[16px] leading-7 text-black placeholder:text-stone-500 rounded-md cursor-pointer"
                  required
                />
              </div>

              <div className="mb-5 flex items-center justify-between">
                <label
                  htmlFor=""
                  className="text-black font-semibold text-[15px] leading-7"
                >
                  Are you a:
                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                    className="text-stone-600 font-semi-bold text-[15px] leading-7 px-4 py-3 focus:outline-none "
                  >
                    <option value="patient">Patient</option>
                    <option value="doctor">Doctor</option>
                  </select>
                </label>
                <label
                  htmlFor=""
                  className="text-black font-semibold text-[15px] leading-7"
                >
                  Gender:
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                    className="text-stone-600 font-semi-bold text-[15px] leading-7 px-4 py-3 focus:outline-none "
                  >
                    <option value="select">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </label>
              </div>
              <div className="mb-5 flex items-center gap-3">
                <figure className="w-[60px] rounded-full border-2 border-solid border-blue-400 flex items-center justify-center">
                  <img src={avatar} alt="" className="w-full rounded-full" />
                </figure>
                <div className="relative w-[130px] h-[50px]">
                  <input
                    type="file"
                    name="photo"
                    id="customFile"
                    onChange={handleFileInputChange}
                    accept=".jpg, .png"
                    className="absolute top-0 left-0 w-full opacity-0 cursor-pointer"
                  />

                  <label
                    htmlFor="customFile"
                    className="absolute top-0 left-0 w-full h-full flex items-center px-[0.75rem] py-[0.375rem] text[15px] leading-6 overflow-hidden bg-[#0066ff46] text-black font-semibold rounded-lg truncate cursor-pointer"
                  >
                    Upload Photo
                  </label>
                </div>
              </div>
              <div className="mt-20">
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white text-[18px] leading-[30px] rounded-lg px-4 py-3"
                >
                  Sign Up
                </button>
                <p className="mt-10 text-center text-stone-600">
                  Already have an account?{" "}
                  <Link to="/login" className="text-blue-500 font-medium ml-1">
                    Login
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
