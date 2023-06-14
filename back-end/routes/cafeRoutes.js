const express = require('express')
const router = express.Router()
const { createCafe } = require('../controllers/cafeController')


router.post('/create', createCafe)

module.exports = router