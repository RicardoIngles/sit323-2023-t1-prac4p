const express = require("express");
const res = require("express/lib/response");
const app = express();
const add = (n1, n2) => (n1 + n2);
const subtract = (n1, n2) => (n1 - n2);
const multiply = (n1, n2) => (n1 * n2);
const divide = (n1, n2) => (n1 / n2);

app.get("/add", (req, res) => {
    try {
        const n1 = parseFloat(req.query.n1);
        const n2 = parseFloat(req.query.n2);
        if (isNaN(n1)) {
            console.error("n1 is incorrectly defined");
            throw new Error("n1 incorrectly defined");
        }
        if (isNaN(n2)) {
            console.error("n2 is incorrectly defined");
            throw new Error("n2 incorrectly defined");
        }

        if (n1 === NaN || n2 === NaN) {
            console.log()
            throw new Error("Parsing Error");
        }
        console.log('Parameters ' + n1 + ' and ' + n2 + ' received for addition');
        const result = add(n1, n2);
        res.status(200).json({ statuscocde: 200, data: result });
    } catch (error) {
        console.error(error)
        res.status(500).json({ statuscocde: 500, msg: error.toString() })
    }
});
app.get("/subtract", (req, res) => {
    try {
        const n1 = parseFloat(req.query.n1);
        const n2 = parseFloat(req.query.n2);
        if (isNaN(n1)) {
            console.error("n1 is incorrectly defined");
            throw new Error("n1 incorrectly defined");
        }
        if (isNaN(n2)) {
            console.error("n2 is incorrectly defined");
            throw new Error("n2 incorrectly defined");
        }

        if (n1 === NaN || n2 === NaN) {
            console.log()
            throw new Error("Parsing Error");
        }
        console.log('Parameters ' + n1 + ' and ' + n2 + ' received for subtraction');
        const result = subtract(n1, n2);
        res.status(200).json({ statuscocde: 200, data: result });
    } catch (error) {
        console.error(error)
        res.status(500).json({ statuscocde: 500, msg: error.toString() })
    }
});

app.get("/multiply", (req, res) => {
    try {
        const n1 = parseFloat(req.query.n1);
        const n2 = parseFloat(req.query.n2);
        if (isNaN(n1)) {
            console.error("n1 is incorrectly defined");
            throw new Error("n1 incorrectly defined");
        }
        if (isNaN(n2)) {
            console.error("n2 is incorrectly defined");
            throw new Error("n2 incorrectly defined");
        }

        if (n1 === NaN || n2 === NaN) {
            console.log()
            throw new Error("Parsing Error");
        }
        console.log('Parameters ' + n1 + ' and ' + n2 + ' received for multiplication');
        const result = multiply(n1, n2);
        res.status(200).json({ statuscocde: 200, data: result });
    } catch (error) {
        console.error(error)
        res.status(500).json({ statuscocde: 500, msg: error.toString() })
    }
});
app.get("/divide", (req, res) => {
    try {
        const n1 = parseFloat(req.query.n1);
        const n2 = parseFloat(req.query.n2);
        if (isNaN(n1)) {
            console.error("n1 is incorrectly defined");
            throw new Error("n1 incorrectly defined");
        }
        if (isNaN(n2)) {
            console.error("n2 is incorrectly defined");
            throw new Error("n2 incorrectly defined");
        }

        if (n1 === NaN || n2 === NaN) {
            console.log()
            throw new Error("Parsing Error");
        }
        console.log('Parameters ' + n1 + ' and ' + n2 + ' received for division');
        const result = divide(n1, n2);
        res.status(200).json({ statuscocde: 200, data: result });
    } catch (error) {
        console.error(error)
        res.status(500).json({ statuscocde: 500, msg: error.toString() })
    }
});
const port = 3040;
app.listen(port, () => {
    console.log("hello i'm listening to port " + port);
})