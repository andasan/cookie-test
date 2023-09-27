const express = require("express");
const cors = require("cors");
const cookieParser = require('cookie-parser');

//Config
const app = express();
const PORT = process.env.PORT || 8800;
const cookieConfig = {
    httpOnly: process.env.NODE_ENV !== 'development' ? false : true,
    secure: process.env.NODE_ENV !== 'development',
    sameSite: process.env.NODE_ENV === 'development' ? 'lax' : 'none',
    maxAge: 30 * 24 * 60 * 60 * 1000, //30days
}
const corsConfig = {
    origin: 'https://testfront-gamma.vercel.app',
    credentials: true
};

// Middlewares
app.use(express.json());
app.use(cors(corsConfig));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (_, res) => {
    res.json("hello")
})

app.get("/token", (_, res) => {
    const token = `Bearer ${Math.random()}`
    res.cookie('jwt', token, cookieConfig).json({ success: true, user_id: 12 });
})

app.get('/test', (req,res) => {
    const reqCookies = req.cookies.jwt;
    res.cookie('jwt', reqCookies, cookieConfig).json({ cookie: req.cookies });
})

app.listen(PORT, () => { console.log("connected to backend!!") });

