const express = require("express")
const bcrypt = require("bcrypt")
const router = express.Router()
const User = require("../models/user.js")

router.post("/users", async (req, res) => {
    const { name, email, password } = req.body
    const passwordDigest = await bcrypt.hashSync(password, bcrypt.genSaltSync(12), null)

    User
    .create(name, email, passwordDigest)
    .then(email => res.json(email))

    console.log(req.body)
    console.log(passwordDigest)
})

module.exports = router