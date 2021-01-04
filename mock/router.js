const express = require('express');
const router = express.Router();
const config = require('./config');
const url = require('url');
const homehot = require('./data/home/hotdata');
const searchContent = require('./data/search');
const detailContent = require('./data/detail');
const comment = require('./data/comment');
const cartData= require('./data/cart');

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
router.get(config.cartlist, (req, res) => {
    console.log(req.query);
    res.send(cartData);
})
router.post(config.addcomment, (req, res) => {
    console.log(req.body);
    res.send({
        msg:'评论成功'
    });
})
module.exports = router;