import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

var lengthOfName;
app.get("/", (req, res) => { });

app.post("/submit", (req, res) => {
    const firstName = req.body.fName;
    const lastName = req.body.lName;
    lengthOfName = (firstName?.length || 0) + (lastName?.length || 0);
    res.render("index.ejs", {length: lengthOfName});
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
