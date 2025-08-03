const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const Post = require('../models/Post');
const User = require('../models/User');

const authMiddleware = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ error: "Missing token" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.userId;
    next();
  } catch {
    res.status(401).json({ error: "Invalid token" });
  }
};

router.post('/', authMiddleware, async (req, res) => {
  const post = await Post.create({ content: req.body.content, author: req.userId });
  res.status(201).json(post);
});

router.get('/', async (req, res) => {
  const posts = await Post.find().populate('author', 'name').sort({ createdAt: -1 });
  res.json(posts);
});

router.get('/user/:id', async (req, res) => {
  const posts = await Post.find({ author: req.params.id }).sort({ createdAt: -1 });
  res.json(posts);
});

module.exports = router;
