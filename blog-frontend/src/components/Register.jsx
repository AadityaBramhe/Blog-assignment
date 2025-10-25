import React, { useState } from "react";
import { registerUser } from "../api.js";

export default function Register() {
  const [form, setForm] = useState({ username: "", email: "", password: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await registerUser(form);
    alert(res.message || res.error);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 max-w-md">
      <input name="username" placeholder="Username" onChange={handleChange} className="input"/>
      <input name="email" placeholder="Email" onChange={handleChange} className="input"/>
      <input type="password" name="password" placeholder="Password" onChange={handleChange} className="input"/>
      <button className="btn bg-blue-500 text-white py-1 px-3 rounded" type="submit">Register</button>
    </form>
  );
}
