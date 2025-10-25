import React, { useEffect, useState } from "react";
import { fetchPosts } from "../api.js";
import CommentForm from "./CommentForm.jsx";

const PostList = ({ token }) => {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");

  const loadPosts = async () => {
    const data = await fetchPosts(search, 1, token);
    setPosts(data);
  };

  useEffect(() => {
    loadPosts();
  }, [search]);

  return (
    <div className="flex flex-col gap-4">
      <input
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 max-w-sm"
      />
      {posts.length === 0 && <p>No posts found.</p>}
      {posts.map((post) => (
        <div key={post._id} className="border p-4 rounded">
          <h3 className="font-bold text-lg">{post.title}</h3>
          <p>{post.content}</p>
          {post.tags && <p className="text-sm text-gray-500">Tags: {post.tags.join(", ")}</p>}
          {token && <CommentForm postId={post._id} token={token} />}
        </div>
      ))}
    </div>
  );
};

export default PostList;
