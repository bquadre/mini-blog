const express = require('express');
const router = express.Router();
const { Posts } = require('../models');


router.get("/", async (req, res) => {
    const posts = await Posts.findAll();
    res.json(posts);
});

router.post("/", async (req, res) => {
  
    const newPost = req.body;
    await Posts.create(newPost);
    res.json(newPost);

})

module.exports = router;