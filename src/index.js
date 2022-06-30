const express = require('express')
const session = require('express-session')
const bodyParser = require('body-parser')
const Joi = require('joi');
require("dotenv").config()
const db = require("./db")
const { create } = require('express-handlebars');
const userRouter = require("./router/userRouter")
const viewRouter = require("./router/viewRouter")
const taskRouter = require("./router/taskRouter")
const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
const port = 3000
const hbs = create({ /* config */ });
app.use(express.static('public'))
app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 60000 } }))
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('views', __dirname + '/views');
app.use(checkLogin)
app.use("/user", userRouter)
app.use("/task", taskRouter)
app.use("/", viewRouter)
app.listen(port, () => {
    console.log("ready")
})

function checkLogin(req, res, next) {
    console.log(req.url)
    if (req.session.user || req.url === "/" || req.url === '/user/login' || req.url === '/user/register') {
        return next()
    }
    return res.redirect("/")
}