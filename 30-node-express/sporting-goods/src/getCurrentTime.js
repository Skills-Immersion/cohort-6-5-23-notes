const getCurrentTime = (req, res, next) => {
  res.send(`The current time is ${new Date().toTimeString()}`)
};

module.exports = getCurrentTime;
