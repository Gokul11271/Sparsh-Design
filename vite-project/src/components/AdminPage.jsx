import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === "sparshadmin") {
      // Set your admin password here
      navigate("/admin-dashboard");
    } else {
      alert("Invalid Password!");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-[#FAF7F2] px-4">
      <div className="bg-white p-10 rounded-xl shadow-xl max-w-md w-full text-center">
        <h2
          className="text-3xl font-semibold mb-6"
          style={{ color: "#D68C45" }}
        >
          Admin Login
        </h2>
        <form onSubmit={handleLogin}>
          <input
            type="password"
            placeholder="Enter Admin Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full mb-4 p-3 rounded border border-gray-300 focus:outline-none"
          />
          <button
            type="submit"
            className="w-full py-3 rounded-full text-white text-lg"
            style={{ backgroundColor: "#D68C45" }}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
