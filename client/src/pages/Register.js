import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "", bio: "" });
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/auth/register", form);
      alert("Registered! Please login.");
      navigate("/login");
    } catch (err) {
      alert(err.response?.data?.error || "Registration failed");
    }
  };

  useEffect(() => {
  const isAuth = localStorage.getItem("token");
  if (isAuth) navigate("/home");
}, [navigate]);


  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input className="w-full border px-3 py-2 rounded" name="name" placeholder="Name" onChange={handleChange} required />
        <input className="w-full border px-3 py-2 rounded" name="email" placeholder="Email" onChange={handleChange} required />
        <input className="w-full border px-3 py-2 rounded" name="password" type="password" placeholder="Password" onChange={handleChange} required />
        <input className="w-full border px-3 py-2 rounded" name="bio" placeholder="Bio (optional)" onChange={handleChange} />
        <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Register</button>
      </form>
      <p className="text-sm mt-4 text-center">
        Already registered? <Link to="/login" className="text-blue-600 underline">Go to Login</Link>
      </p>
    </div>
  );
};

export default Register;
