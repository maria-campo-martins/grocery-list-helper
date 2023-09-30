import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
var produce = []; 
var proteins = []; 
var dairy = [];
var carbs = [];
var snacks =[]; 
var conds = []; 
var other = []; 

app.get("/", (req, res) => {
    res.render("index.ejs", {
        produceList: produce,
        proteinList: proteins,
        dairyList: dairy,
        carbList: carbs,
        snackList: snacks,
        condsList: conds, 
        otherList: other, 
    }); 
  });

app.post("/newlist", (req, res) => {
    produce = []; 
    proteins = []; 
    dairy = [];
    carbs = [];
    snacks =[]; 
    conds = []; 
    other = []; 
    res.redirect("/"); 
  });
  
app.post("/addprod", (req, res) => {
    let newItem = req.body.prod; 
    produce.push(newItem); 
    res.redirect("/");  
  });

app.post("/addprot", (req, res) => {
    let newItem = req.body.prot; 
    proteins.push(newItem); 
    res.redirect("/"); 
  });

app.post("/adddair", (req, res) => {
    let newItem = req.body.dair; 
    dairy.push(newItem); 
    res.redirect("/"); 
  });

app.post("/addcarb", (req, res) => {
    let newItem = req.body.carb; 
    carbs.push(newItem); 
    res.redirect("/"); 
  });

app.post("/addsnack", (req, res) => {
    let newItem = req.body.snack; 
    snacks.push(newItem); 
    res.redirect("/");; 
  });

app.post("/addcond", (req, res) => {
    let newItem = req.body.cond; 
    conds.push(newItem); 
    res.redirect("/"); 
  });

app.post("/addother", (req, res) => {
    let newItem = req.body.other; 
    other.push(newItem); 
    res.redirect("/"); 
  });

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
  