const jwtSecret = "MynameisHimanshuDaddy";
const express = require("express");
const router = express.Router();
// const User = require("../Models/User");
const classes = require("../Models/class");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const fetchUSER = require('../Middleware/FtechUsers');

// fetchUSER,


router.post("/createclass", fetchUSER,
    [
        body("email").isEmail(),
        body("title").isLength({ min: 5 }),
        body("ScheduledTime").isLength({ min: 1 })
    ],

    async (req, res) => {
        console.log(req.body);
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            const d = await classes.create({
                name: req.body.title,
                discription: req.body.discription,
                email: req.body.email,
                ScheduledTime: req.body.ScheduledTime,
            });
            res.json({ success: true, classData: d });
        } catch (error) {
            console.log(error);
            res.json({ success: false });
        }
    }
);
router.get('/fetchItems', fetchUSER, async (req, res) => {
    try {
        const notes = await compData.find({ user: req.user.id })
        res.send(notes);
    } catch (err) {
        res.status(404).json({ "err occouured": err })
    }
})
// router.get('/getClasses',
//     async (req, res) => {

//         try {
//             const allData = await commentData.find()
//             res.send(allData)
//         } catch (err) {
//             // console.log(err.message);
//             res.status(404).json(
//                 {
//                     "Error occouured !! ": err
//                 }
//             );
//         }

//     }
// )

module.exports = router;
