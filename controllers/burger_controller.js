const express = require("express");
const router = express.Router();
const burger = require("../models/burger.js");

router.get("/", function (req, res) {
    res.sendfile(path.join(__dirname, "public/index.html"));
});

router.get("/burgers", function (req, res) {
    burger.selectAll(function (data) {
        res.json({ burgers: data });
    });
});

router.post("/burgers", function (req, res) {
    burger.insertOne("burger_name", req.body.burger_name, function (result) {
        res.json({ id: result.insertID });
    });
});

router.put("/burgers/:id", function (req, res) {
    let condition = `id = ${req.params.id}`;

    burger.updateOne("devoured", 1, condition, function (result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.json({ id: req.params.id });
        }
    });
});

router.delete("/burgers/:id", function (req, res) {
    let condition = `id = ${req.params.id}`;

    burger.deleteOne(condition, function(result) {
        if (result.affectedRows == 0) {
            return res.status(404).end();
        } else {
            res.json({ id: req.params.id });
        }
    });
});

module.exports = router;