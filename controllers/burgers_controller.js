var express = require("express");
var app = express();
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/burgers", function (req, res) {
    burger.insertOne(["burger_name"], [req.body.burger_name], function (data) {
        // res.json({ id: result.insertId });
        res.redirect("/");
    });
});

// router.put("/burgers/:id", function (req, res) {
//     var condition = "id = " + req.params.id;
//     burger.updateOne(condition, function (result) {
//             if (result.changedRows == 0) {
//                 return res.status(404).end();
//             } else {
//                 res.status(200).end();
//             }
//         });
// })

router.put("/burgers/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    burger.updateOne({
        devoured: true
    }, condition, function (result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            // res.status(200).end();
            res.redirect("/")
        }
    });
});

module.exports = router;