import Comment from "../models/commentModel.js";

export const addComment = async (req, res) => {
  try {
    const comment = await Comment.create({
      ...req.body,
      user: req.user._id,
    });
    res.status(201).json(comment);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
