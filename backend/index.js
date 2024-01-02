const express = require("express");
const mongoose = require("mongoose")
const JwtStrategy = require('passport-jwt').Strategy
 const   ExtractJwt = require('passport-jwt').ExtractJwt;
const passport = require("passport")
const User = require("./models/User")
const authRoutes = require("./routes/auth")
const songRoutes = require("./routes/song")
const playlistRoutes = require("./routes/playlist")
require('dotenv').config();
const cors = require("cors")
const app = express();
const port = 8000;

app.use(cors())

console.log(process.env.MONGO_PASSWORD);
app.use(express.json());

mongoose.connect(
   
    "mongodb+srv://deepakdhumal2204:"+process.env.MONGO_PASSWORD+"@cluster0.qenozlz.mongodb.net/?retryWrites=true&w=majority",
    {

        useNewUrlParser:true,
        useUnifiedTopology: true
    }
    )
    .then((x)=>{
        console.log("Connected to mongo!");
    })
    .catch((err)=>{
        console.log("Error while mongo");
    }
);


let opts = {
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
         secretOrKey : "secret"
}

passport.use(
    new JwtStrategy(opts, function(jwt_payload, done) {
    User.findOne({_id: jwt_payload.identifier}, function(err, user) {
        if (err) {
            return done(err, false);
        }
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
            // or you could create a new account
        }
    });
   
}));


app.get("/",(req,res)=>{
    res.send("Hello World");
})

app.use("/auth", authRoutes);
app.use("/song", songRoutes);
app.use("/playlist", playlistRoutes);

app.listen(port , ()=>{
    console.log("App is running on port "+ port);
})











// 8qiCgqEE5ZrCtDds 

