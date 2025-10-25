import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Register from "../components/Register";
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isRegister, setRegister] = useState(false);

  const closeRegisterModal = () => setRegister(false);
  const navigate = useNavigate();
  return (
    <>
      <div className="h-screen bg-[#253E5B] flex items-center justify-center relative overflow-hidden">
        <div className="w-1/2 h-full hidden md:flex items-center justify-center">
          <img
            src="/images/airplane.png"
            alt="airplane"
            className="object-cover h-full w-full"
          />
        </div>

        <div className="w-full md:w-1/2 h-full flex items-center justify-center">
          <div className="w-[90%] h-[60%] max-w-md bg-white/20 backdrop-blur-xl rounded-2xl p-8 flex flex-col justify-center items-center">
            <h1 className="text-4xl font-semibold text-white mb-6">Log in</h1>

            <form className="w-full flex flex-col space-y-4">
              <div className="flex flex-col">
                <label className="text-white text-lg mb-1" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="text-base px-4 py-2 border border-white bg-white rounded-xl focus:border-slate-500 outline-none"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-white text-lg mb-1" htmlFor="password">
                  Password
                </label>
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  className="text-base px-4 py-2 border border-white bg-white rounded-xl focus:border-slate-500 outline-none"
                />
                <label className="text-white mt-2 text-sm flex items-center space-x-2">
                  <input
                    className="w-5 h-5"
                    type="checkbox"
                    checked={showPassword}
                    onChange={() => setShowPassword(!showPassword)}
                  />
                  <span className="text-xl">Show Password</span>
                </label>
              </div>

              <div className="text-white text-center mt-4 flex flex-col items-center space-y-2">
                <button
                  onClick={() => navigate("/dashboard")}
                  type="button"
                  className="text-white text-lg font-bold px-6 py-2 rounded-xl bg-slate-800 border border-slate-500 hover:text-slate-300 transition-all"
                >
                  Log In
                </button>
                <p>
                  Don't have an account?
                  <a
                    onClick={() => setRegister(true)}
                    className="underline pl-1 text-blue-200 font-semibold cursor-pointer"
                  >
                    Sign up here
                  </a>
                </p>
                <p className="cursor-pointer" onClick={() => navigate("/")}>
                  Back
                </p>
              </div>
            </form>
          </div>
        </div>

        {isRegister && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50">
            <Register onClose={closeRegisterModal} />
          </div>
        )}
      </div>
    </>
  );
};

export default Login;
