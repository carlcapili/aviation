import React, { useState } from "react";

const Register = ({ onClose }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-[90%] h-[50%] max-w-md bg-white/20 backdrop-blur-xl p-8 rounded-2xl shadow-xl relative text-white flex flex-col justify-center space-y-3">
      <button
        onClick={onClose}
        className="absolute top-2 right-4 text-2xl font-bold text-white hover:text-red-400"
      >
        ✕
      </button>

      <h2 className="text-4xl font-semibold mb-6 text-center">Register</h2>

      <form className="flex flex-col space-y-4">
        <input
          type="text"
          placeholder="Name"
          className="px-4 py-2 border border-white bg-white text-black rounded-xl outline-none focus:border-slate-500"
        />

        <input
          type="email"
          placeholder="Email"
          className="px-4 py-2 border border-white bg-white text-black rounded-xl outline-none focus:border-slate-500"
        />

        <input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          className="px-4 py-2 border border-white bg-white text-black rounded-xl outline-none focus:border-slate-500"
        />
        <label className="text-white text-sm flex items-center space-x-2">
          <input
            className="w-5 h-5"
            type="checkbox"
            checked={showPassword}
            onChange={() => setShowPassword(!showPassword)}
          />
          <span className="text-xl">Show Password</span>
        </label>

        <button
          type="submit"
          className="mt-4 bg-slate-800 text-white font-bold py-2 rounded-xl border border-slate-500 hover:text-slate-300 transition"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Register;
