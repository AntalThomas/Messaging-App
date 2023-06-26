const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv').config()
const bcrypt = require('bcrypt')
const User = require("./models/user")


// Middlewares
const logger = require('./middlewares/logger.js')
// const sessions = require('./middlewares/sessions.js')

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
// app.use(sessions)
// app.use(express.static('../react-messaging-app/public'))

// Controller response to user
app.post("/users", async (req, res) => {
    const { name, email, password } = req.body
    const passwordDigest = await bcrypt.hashSync(password, bcrypt.genSaltSync(12), null)

    User
        .create(name, email, passwordDigest)
        .then(email => res.json(email))
    console.log(req.body)
    console.log(passwordDigest)
})

// app.use('/users', usersController)