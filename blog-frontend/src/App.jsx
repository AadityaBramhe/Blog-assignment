import React, { useState } from "react";
import Register from "./components/Register.jsx";
import Login from "./components/Login.jsx";
import PostList from "./components/PostList.jsx";
import PostForm from "./components/PostForm.jsx";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token") || "");

  return (
    <div style={{ padding: "20px" }}>
      {!token && (
        <>
          <h2>Register</h2>
          <Register />
          <h2>Login</h2>
          <Login setToken={setToken} />
        </>
      )}

      {token && (
        <>
          <h2>Create Post</h2>
          <PostForm token={token} />
          <h2>Posts</h2>
          <PostList token={token} />
        </>
      )}
    </div>
  );
}

export default App;
