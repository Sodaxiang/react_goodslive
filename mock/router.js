const express = require('express');
const router = express.Router();
const config = require('./config');
const url = require('url');
const homehot = require('./data/home/hotdata');
const searchContent = require('./data/search');
const detailContent = require('./data/detail');
const comment = require('./data/comment');

router.get(config.homehot1, (req, res)=>{
   console.log(req.query, "lll")
   res.json(homehot.hot1);
});
router.get(config.homehot2, (req,res)=>{
    res.json(homehot.hot2);
})
router.get(config.search, (req, res) => {
    console.log(req.query);
    res.json(searchContent);
})
router.get(config.detail, (req, res) => {
    console.log(req.query);
    res.send(detailContent);

})
router.get(config.comment, (req, res) => {
    console.log(req.query);
    res.send(comment);
    
})
module.exports = router;