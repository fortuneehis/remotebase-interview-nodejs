const express = require('express');
const router = express.Router();
const { createTrade, getTrade, getTrades, deleteTrade, modifyTrade } = require('../controllers/trades')



router.post("/", createTrade)

router.get("/", getTrades)

router.get("/:id", getTrade)

router.delete("/:id", deleteTrade)

router.patch("/:id", modifyTrade)

router.put("/:id", modifyTrade)




module.exports = router;
