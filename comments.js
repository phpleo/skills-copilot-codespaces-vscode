// create web server
// 2019-07-30    PV

const express = require('express');
const router = express.Router();
const Comment = require('../models/comment');
const Post = require('../models/post');

// get all comments
router.get('/', async (req, res) => {
    try {
        const comments = await Comment.find();
        res.json(comments);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})

// get one comment
router.get('/:id', getComment, (req, res) => {
    res.json(res.comment);
})