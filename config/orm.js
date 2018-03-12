var connection = require("./connection.js");

function printQuestionMarks(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
    return arr.toString();
  }

function objToSql(ob) {
    var arr = [];
    for (var key in ob) {
        if (Object.hasOwnProperty.call(ob, key)) {
            arr.push(key + "=" + ob[key]);
        }
    }
    return arr.toString();
}

var orm = {
    selectAll: function (tableInput, cb) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableInput], function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    insertOne: function (table, cols, vals, cb) {
        var queryString = "INSERT INTO " + table + " (" + cols.toString() + ") VALUES (" + printQuestionMarks(vals.length) + ");";
        connection.query(queryString, vals, function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    // updateOne: function (table, cols, condition, cb) {
    //     var queryString = "UPDATE ?? SET devoured = NOT devoured WHERE " + condition + ";";
    //     connection.query(
    //         queryString, [table, condition], function (err, result) {
    //             if (err) throw err;
    //             cb(result);
    //         },

    //     );
    // }
    updateOne: function (table, objColVals, condition, cb) {
        var queryString = "UPDATE " + table + " SET " + objToSql(objColVals) + " WHERE "  + condition + ";";
        connection.query(
            queryString, function (err, result) {
                if (err) throw err;
                cb(result);
            },

        );
    }

};

module.exports = orm;