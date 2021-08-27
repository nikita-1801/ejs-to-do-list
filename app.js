const express= require('express');
const bodyParser= require('body-parser')
const app= express();

var items= ["Play", "Eat", "Sleep"];

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static("public"));

app.get('/', (req, res)=>{
    var today = new Date();

    var options ={
        weekday:"long",
        day:"numeric",
        month:"long",
        year:"numeric"
    }
    var day= today.toLocaleDateString("en-US", options)

    res.render("list", {dayOfWeek: day, newListItem: items});
});

app.post("/", (req, res)=>{
    var item= req.body.newItem;
    items.push(item);

    res.redirect("/");
})

app.get("/about", (req, res)=>{
    res.render("about");
});

app.listen(3000, ()=>{
    console.log("Server started");
});