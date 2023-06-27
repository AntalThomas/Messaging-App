const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv').config()
const bcrypt = require('bcrypt')
const User = require("./models/user")


// Middlewares
const logger = require('./middlewares/logger.js')
const sessions = require('./middlewares/sessions.js')

// Controllers
// const usersController = require("./controllers/users_controller")

// Start and listen to the server
const app = express()
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`listening on http://localhost:${PORT}`))

app.use(logger) // Log request info to terminal
app.use(cors({
    origin: 'http://localhost:3001/',
    credentials: true
}))
app.use(express.json())
app.use(sessions)
// app.use(express.static('../react-messaging-app/public'))

// Controller response to user
app.post("/signup", async (req, res) => {
    const { name, email, password } = req.body
    const passwordDigest = await bcrypt.hashSync(password, bcrypt.genSaltSync(12), null)

    await User
        .findByEmail(email)
        .then(found => {
            if (!found) {
                User
                    .create(name, email, passwordDigest)
                    .then(email => res.json(email))
            } else {
                console.log("User Exists")
            }
        })
})

app.post("/login", async (req, res) => {
    const { email, password } = req.body

    await User
        .findByEmail(email)
        .then(user => {
            if (email === '' || password === '' || !user) {
                return undefined
            } else {
                const isValidPassword = bcrypt.compareSync(password, user.password_digest)

                if (user && isValidPassword) {
                    req.session.userId = user.id

                    console.log(`${user["name"]} logged in`)
                    
                    return res.status(200).json({
                        message: "Successfully logged in",
                        name: user["name"],
                        email: user["email"]
                    })
                }
            }
        })
})

app.delete("/signout", async (req, res) => {
    await req.session.destroy(error => {
        res.clearCookie("user_sid")
        res.json({ success: true})
    })

    console.log("DELETED")
})

app.get("/allusers", async (req, res) => {
    await User
        .selectAllUsers()
        .then(users => console.log(users))
})