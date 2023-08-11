function methodNotAllowed(req, res, next) {
  next({
    status: 405,
    message: `Method ${req.method} not allowed for path ${req.originalUrl}`
  })
}

module.exports = methodNotAllowed;