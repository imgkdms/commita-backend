const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.get('/', (req, res) => {
  res.send('✅ Commita backend is running!');
});

router.post('/login', authController.login);

module.exports = router;
