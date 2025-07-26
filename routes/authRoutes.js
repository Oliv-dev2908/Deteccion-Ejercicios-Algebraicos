const express = require('express');
const router = express.Router();
const {
  showLogin,
  showSignup,
  login,
  signup,
  logout
} = require('../controllers/authController');

router.get('/login', showLogin);
router.get('/signup', showSignup);
router.post('/login', login);
router.post('/signup', signup);
router.get('/logout', logout);

module.exports = router;
