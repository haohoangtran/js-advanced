const express = require('express')
const router = express.Router()

router.get("/", async (req, res) => {
    if (!req.session.user) {
        return res.render("login", {})
    }
    res.render("home", {
        tasks: [
            {
                title: "Fixbug",
                done:1
            },
            {
                title: "Nau com",
                done:0
            },
            {
                title: "Rua bat",
                done:1
            }
        ]
    })
})
module.exports = router