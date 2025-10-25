import Post from "../models/postModel.js";

export const createPost = async (req, res) => {
  try {
    const post = await Post.create({ ...req.body, author: req.user._id });
    res.status(201).json(post);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getAllPosts = async (req, res) => {
  const { search, page = 1, limit = 5 } = req.query;
  const query = {
    status: "published",
    ...Post(
      search && {
        $or: [
          { title: new RegExp(search, "i") },
          { content: new RegExp(search, "i") },
          { tags: new RegExp(search, "i") },
        ],
      }
    ),
  };
  const posts = await Post.find(query)
    .populate("author", "username")
    .skip((page - 1) * limit)
    .limit(Number(limit));

  res.json(posts);
};
