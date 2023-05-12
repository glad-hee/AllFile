const express = require('express');
const router = express.Router();
const controller = require('../controller/Cuser');

// POST /users/login
router.post('/login', controller.login);

// POST /users/logout
router.post('/logout', controller.logout);

// GET /users/userinfo
router.get('/userinfo', controller.userinfo);

// GET /users/session
router.get('/session', controller.session);

module.exports = router;
