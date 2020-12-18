const express = require('express');
const router = express.Router();
const config = require('./config');
const url = require('url');
const homehot = require('./data/home/hotdata');

router.get(config.homehot1, (req, res)=>{
   res.json(homehot.hot1);
});
router.get(config.homehot2, (req,res)=>{
    res.json(homehot.hot2);
})
module.exports = router;