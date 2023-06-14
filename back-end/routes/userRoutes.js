const express = require('express')
const router = express.Router()
const { getUser, createUser, loginUser } = require('../controllers/userController')


router.route('/:id').get(getUser)

router.post('/create', createUser)
router.route('/login').post(loginUser)

module.exports = router