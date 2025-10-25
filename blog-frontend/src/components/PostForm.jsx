import React, { useState } from "react";
import { createPost } from "../api.js";

const PostForm = ({ token }) => {
  const [form, setForm] = useState({ title: "", content: "", tags: "", status: "draft" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createPost({ ...form, tags: form.tags.split(",") }, token);
    alert("Post created!");
    setForm({ title: "", content: "", tags: "", status: "draft" });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 max-w-md mb-4">
      <input name="title" placeholder="Title" value={form.title} onChange={handleChange} className="border p-2" />
      <textarea name="content" placeholder="Content" value={form.content} onChange={handleChange} className="border p-2" />
      <input name="tags" placeholder="Tags (comma separated)" value={form.tags} onChange={handleChange} className="border p-2" />
      <select name="status" value={form.status} onChange={handleChange} className="border p-2">
        <option value="draft">Draft</option>
        <option value="published">Published</option>
      </select>
      <button type="submit" className="bg-purple-500 text-white p-2">Create Post</button>
    </form>
  );
};

export default PostForm;
