require("dotenv").config();
const fs = require("fs");
const { Pool } = require("pg");
const db = new Pool(); // Auto connects using .env
const express = require("express");
const bodyParser = require("body-parser");
const api = require("./api");
const server = express();

db.on("error", (err, client) => {
    console.log("Pool error", err);
});

// Make sure dist exists
if (!fs.existsSync("dist")) {
    console.log("Dist does not exist to serve from!");
    process.exit(1); // Force quit
}

// Serve directly from the dist folder
server.use(express.static("dist"));

// Convert POST body into params
server.use(bodyParser.urlencoded({
    extended: true
}));

server.post("/factchecker", (req, res) => {
    let keywords = req.body.content
        .toLowerCase() // Convert everything to lowercase since the SQL statement is case sensitive
        .split(" ")
        .map((keyword) => keyword.replace(/[^a-z0-9+]+/gi, "")) // Remove non alphanumeric characters
        .filter((keyword) => keyword.length > 0) // Remove empty strings        
        .map((keyword) => `"${keyword}"`);
    let queryString = `SELECT * FROM facts WHERE keywords && '{${keywords}}'::text[];`; // Is this SQLi prone? I don't know!
    db.query(queryString).then((dbRes) => {
        res.send(dbRes.rows);
    })
    .catch((err) => {
        res.status(500).send(err);
    });
});

let regurgitator = (req, res) => {
    db.query("SELECT * FROM " + req.params.table + " WHERE id = $1", [req.params.id]).then((dbRes) => {
        res.send(dbRes.rows[0]);
    })
    .catch((err) => {
        console.error(err.stack);
        res.status(500).send(err);
    });
}

server.get("/:table(posts|responses|threads|users)/:id", (req, res) => {
    // Why concatenate? SQLi? https://github.com/brianc/node-postgres/issues/1426#issuecomment-324618787
    db.query("SELECT * FROM " + req.params.table + " WHERE id = $1", [req.params.id]).then((dbRes) => {
        res.send(dbRes.rows[0]);
    })
        .catch((err) => {
            console.error(err.stack);
            res.status(500).send(err);
        });
});

server.get("/:table(posts|responses|threads|users)", (req, res) => {
    // Why concatenate? SQLi? https://github.com/brianc/node-postgres/issues/1426#issuecomment-324618787
    db.query("SELECT * FROM " + req.params.table).then((dbRes) => {
        res.send(dbRes.rows);
    })
        .catch((err) => {
            console.error(err.stack);
            res.status(500).send(err);
        });
});

server.listen(8080, () => {
    console.log("Online!")
});
