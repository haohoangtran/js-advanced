const express = require('express')
const router = express.Router()

router.get("/", async (req, res) => {
    if (!req.session.user) {
        return res.render("login", {})
    }
    res.render("home", {})
})
module.exports = router