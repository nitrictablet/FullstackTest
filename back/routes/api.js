var express = require('express')
var router = express.Router()

/* GET test json. */
router.get('/test', function (req, res, next) {
  res.json({success: true})
})

module.exports = router
