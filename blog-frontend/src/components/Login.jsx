import React, { useState } from "react";
import { loginUser } from "../api.js";

export default function Login({ setToken }) {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await loginUser(form);
    if (res.token) {
      localStorage.setItem("token", res.token);
      setToken(res.token);
      alert("Login successful");
    } else {
      alert(res.error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 max-w-md">
      <input name="email" placeholder="Email" onChange={handleChange} className="input"/>
      <input name="password" type="password" placeholder="Password" onChange={handleChange} className="input"/>
      <button className="btn bg-green-500 text-white py-1 px-3 rounded" type="submit">Login</button>
    </form>
  );
}
