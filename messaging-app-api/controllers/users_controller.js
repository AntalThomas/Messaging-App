const express = require("express")
const bcrypt = require("bcrypt")
const router = express.Router()
const User = require("../models/user.js")

// router.get('/', (req, res) => {
//     const userId = req.session.userId
//     if (userId) {
//         User
//         .findById(userId)
//         .then(email => {
//             User
//                 .findByEmail(email)
//                 .then(user => {
//                     res.json({email: user.email, name: user.name})
//                 })
//         })
//     } else {
//         res.json({})
//     }
// })

router.post("/api/users", (req, res) => {
    const { name, email, password } = req.body
    const passwordDigest = bcrypt.hashSync(password, bcrypt.genSaltSync(12), null)

    User
    .create(name, email, passwordDigest)
    .then(email => res.json(email))
})

module.exports = router