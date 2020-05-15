const express = require("express");
const bodyparser = require("body-parser");

const app = express();
app.use(bodyparser.urlencoded({extended:true}));

app.get("/", function(req, res){
    res.send("<h3>I don come ooo Express</h3>");
});

app.get("/contact", function(req, res){
    res.send("This is my Contact Us page");
});

app.get("/about", function(req, res){
    res.send("This is my About Us page");
});

app.get("/index", function(req, res){
    res.sendFile(__dirname + "/index.html");
})

app.post("/index", function(req, res){

    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);

    var result = num1+num2;
    res.send( "The Result of the calculation is " + result);
    
});

app.get("/bmiCalculator", function(req, res){
    res.sendFile(__dirname + "/bmiCalculator.html")
})

app.post("/bmiCalculator", function(req, res){
     var weight = parseFloat(req.body.weight);
     var height = parseFloat(req.body.height);
     var result = weight / (height*height);

     res.send("Your BMI is " + result);
});


app.listen(3000, function(){
    console.log('Server started on port 3000');
})
