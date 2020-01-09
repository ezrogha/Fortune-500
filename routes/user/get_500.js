const express = require('express')
const get500Controllers = require('../../controllers/user/get_500')

const router = express.Router()

router.get('/500', get500Controllers.get_500)

module.exports = router