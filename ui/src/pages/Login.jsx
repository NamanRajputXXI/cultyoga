import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import Footer from "../components/global/Footer";
import Navbar from "../components/global/Navbar";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { handleError, handleSuccess } from "../utils/AuthUtil";
import { ToastContainer } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handleLoginForm = async (e) => {
    e.preventDefault();
    console.log("Sending login data:", { email, password }); // Log form data

    if (!email || !password) {
      return handleError("All fields are required.");
    }

    try {
      const response = await fetch(
        "https://cultyogabackend.vercel.app/api/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );

      const result = await response.json();
      console.log(result);

      if (response.ok) {
        const token = result.token;
        localStorage.setItem("token", token);
        localStorage.setItem("userName", result.name);

        console.log("Successfully logged in");
        handleSuccess(result?.message || "Login successful!");

        // Navigate to the homepage after showing success
        setTimeout(() => {
          navigate("/");
        }, 2000);
      } else {
        handleError(
          result.error?.details?.[0]?.message ||
            result.error?.message ||
            result.message ||
            "Login failed"
        );
        console.error(
          "Signup failed with status:",
          response.status,
          result // Log parsed error response
        );
      }
    } catch (err) {
      console.error("Error during signup:", err);
      handleError("An unexpected error occurred. Please try again later.");
    }
  };
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center">
        <div className=" w-full justify-center p-5 sm:p-10 items-center h-full  flex  rounded-lg overflow-hidden">
          <div className="w-[700px]  flex flex-col items-center justify-center  space-y-6">
            <div>
              <h2 className=" text-3xl font-extrabold text-gray-900">
                WELCOME BACK
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                Welcome back! Please enter your details.
              </p>
            </div>
            <form
              className="mt-8 w-full space-y-6"
              action="#"
              method="POST"
              onSubmit={handleLoginForm}
            >
              <div className=" space-y-6 w-full">
                <div className="w-full">
                  {/* Email feild */}
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Enter your email"
                  />
                </div>

                {/* Password Field */}
                <div className="relative">
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Enter your password"
                  />
                  {/* Eye Icon Button */}
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
                  >
                    {showPassword ? (
                      <AiFillEyeInvisible className="h-5 w-5 text-gray-500" />
                    ) : (
                      <AiFillEye className="h-5 w-5 text-gray-500" />
                    )}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 block text-sm text-gray-900"
                  >
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <a
                    href="#"
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password
                  </a>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-smallButton hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                  Sign in
                </button>
              </div>
            </form>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">
                    Or continue with
                  </span>
                </div>
              </div>

              <div className="mt-6">
                <button className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                  <span className="sr-only">Sign in with Google</span>
                  <FcGoogle className="w-5 h-5 mr-2" />
                  Sign in with Google
                </button>
              </div>
            </div>

            <p className="mt-2 text-center text-sm text-gray-600">
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Sign up for free!
              </Link>
            </p>
          </div>
        </div>
      </div>
      <ToastContainer />
      <Footer />
    </>
  );
};

export default Login;
