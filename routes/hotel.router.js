const express = require('express');
const router = express.Router();

const hotels = require("../data/hotel");

router.route("/")
    .get((req, res) => {
        res.json(hotels.data);
    });

module.exports = router;