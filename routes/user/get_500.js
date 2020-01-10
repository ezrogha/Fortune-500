const express = require('express')
const get500Controllers = require('../../controllers/user/get_500')

const router = express.Router()

router.post('/2019', get500Controllers.post_2019)
router.get('/2019', get500Controllers.get_2019)

router.post('/2018', get500Controllers.post_2018)
router.get('/2018', get500Controllers.get_2018)

router.post('/2017', get500Controllers.post_2017)
router.get('/2017', get500Controllers.get_2017)

router.post('/2016', get500Controllers.post_2016)
router.get('/2016', get500Controllers.get_2016)

router.post('/2015', get500Controllers.post_2015)
router.get('/2015', get500Controllers.get_2015)

module.exports = router