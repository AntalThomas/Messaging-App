const express = require('express')
const dotenv = require('dotenv').config()

// Middlewares
const logger = require('./middlewares/logger.js')
const sessions = require('./middlewares/sessions.js')

// Controllers
const usersController = require('./controllers/users_controller.js')

// Start and listen to the server
const app = express()
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`listening on http://localhost:${PORT}`))

app.use(logger) // Log request info to terminal
app.use(express.json())
app.use(sessions)
app.use(express.static('../react-messaging-app/public'))

// Controller response to user
app.use('/api/users', usersController)
