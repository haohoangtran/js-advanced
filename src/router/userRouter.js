const express = require('express')
const router = express.Router()
const logger = require('../logger')
const { User } = require('../models')
router.post("/register", async (req, res) => {
    try {
        const { username, name, password } = req.body
        const user = new User({ username, password, name })
        await user.save()
        res.json(user)
    } catch (error) {
        logger.e(error)
    }
})
router.post("/login", async (req, res) => {
    try {
        let { page, perPage } = req.query
        page = +page || 1
        perPage = +perPage || 10
        const { username, password } = req.body
        const user = await User.findOne({ username, password }).limit(perPage).skip((page - 1) * perPage)
        if (user) {
            req.session.user = user
        }
        res.redirect("/")
    } catch (error) {
        logger.e(error)
    }
})

module.exports = router
