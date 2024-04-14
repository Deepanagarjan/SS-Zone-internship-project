var express=require("express"),
bodyParser = require("body-parser"),
mongoose=require("mongoose"),
passport=require("passport"),
// bodyParser=require("body-parser"),
LocalStrategy=require("passport-local"),
passportLocalMongoose=require("passport-local-mongoose");
// const user = require("./Model/user");
const User=require("./models/user");
mongoose.connect("mongodb+srv://Deepa:Ol9ojpg9zTuhcMyj@cluster0.hn142tl.mongodb.net/project")


var app=express();
app.set("view engine",'ejs');
app.use(bodyParser.urlencoded({extended:true}));

app.use(require("express-session")({
        secret:"my name is deepa",
        resave:false,
        saveUninitialized:true
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// ==========================//
//        Routes             //
// ==========================//
// Showing home page//
app.get ("/",function(req,res){
    res.render("index")

});

app.get("/index",isLoggedIn,function(req,res)
{
    res.render('index')
})




var port=process.env.PORT||8080;
app.listen(port,function(){
    console.log("SERVER HAS STARTED")
});