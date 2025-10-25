import React, { useState } from "react";
import { addComment } from "../api.js";

const CommentForm = ({ postId, token }) => {
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addComment({ content, post: postId }, token);
    setContent("");
    alert("Comment added!");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mt-2">
      <input
        placeholder="Write a comment..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="border p-2 flex-1"
      />
      <button type="submit" className="bg-yellow-500 text-white p-2">Comment</button>
    </form>
  );
};

export default CommentForm;
