const express = require('express');
const deckService = require('../services/deckService');
const authenticateToken = require('../middleware/auth');

const router = express.Router();

router.post('/register', authenticateToken, async(req, res) =>{
    try{
        const {id, userid, deckname, text } = req.body;
        const deck = deckService.createdeck({id, userid, deckname, text});
        res.json(deck);
    }
    catch(error){
        res.status(400).json({error: error.message});
    }
})

module.exports = router;