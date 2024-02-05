const express = require('express');
const router = express.Router();

const Hotel = require("../model/hotel.model");

router.route("/:id")
    .get(async (req, res) => {
        try {
            const { id } = req.params;
            const hotel = await Hotel.findById(id);
            if (hotel) {
                res.json(hotel);
            } else {
                res.status(404).json({ message: "No hotel found" });
            }
        } catch (err) {
            res.status(500).json({ message: "Internal server error" });
        }
    });

module.exports = router;