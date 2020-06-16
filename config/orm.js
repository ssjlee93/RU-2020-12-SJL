const connection = require("./connection.js");

const orm = {
    selectAll: function(table, callback) {
        let query = "SELECT * FROM " + table + ";";
        connection.query(query, function (err, result){
            if (err) throw err; 
            callback(result);
        }); 
    },
    insertOne: function(table, column, value, callback) {
        let query = `INSERT INTO ${table} (${column}) VALUES ("${value}")`
        connection.query(query, function (err, result) {
            if (err) throw err; 
            callback(result); 
        })
    },
    updateOne: function (table, column, value, condition, callback) {
        let query = `UPDATE ${table} SET ${column} = ${value} WHERE ${condition}`;
        connection.query(query, function (err, result) {
            if (err) throw err; 
            callback(result); 
        })                                                                         
    },
    deleteOne: function (table, condition, callback) {
        let query = `DELETE FROM ${table} WHERE ${condition}`;
        connection.query(query, function (err, result) {
            if (err) throw err; 
            callback(result); 
        })             
    }
};

module.exports = orm;