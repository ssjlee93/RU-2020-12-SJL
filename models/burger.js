const orm = require("../config/orm.js");

const burger = {
    selectAll: function (callback) {
        orm.selectAll("burgers", function (res) {
            callback(res);
        })
    },
    insertOne: function (column, value, callback) {
        orm.insertOne("burgers", column, value, function (res) {
            callback(res);
        })
    },
    updateOne: function (column, value, condition, callback) {
        orm.updateOne("burgers", column, value, condition, function (res) {
            callback(res);
        })
    },
    deleteOne: function (condition, callback) {
        orm.deleteOne("burgers", condition, function (res) {
            callback(res);
        });
    }
};

module.exports = burger;