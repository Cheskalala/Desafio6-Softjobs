const express = require('express');
const { register, login, getUser } = require('../controllers/authController');
const { verifyToken } = require('../middlewares/authMiddleware');
const router = express.Router();


router.post('/usuarios', register);
router.post('/login', login);
router.get('/usuarios', verifyToken, getUser);

module.exports = router;