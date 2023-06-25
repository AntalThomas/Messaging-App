function logger(req, res, next) {
    console.log(`${new Date()} ${req.method} ${req.path}`)
    console.log(req.body, "Logger")
    next()
}

module.exports = logger