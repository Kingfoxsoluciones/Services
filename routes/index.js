'use strict'

const express = require('express')
const userCtrl = require('../controllers/user')
const auth = require('../middlewares/auth')
const api = express.Router()

api.post('/signup', userCtrl.signUp)

api.get('/private', auth, (req, res) => {
    res.status(200).json([{message: 'Tienes acceso'}])
})
api.post('/signin', userCtrl.signIn)

module.exports = api

