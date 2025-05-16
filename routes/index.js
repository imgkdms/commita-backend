const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('✅ Commita backend is running!');
});

module.exports = router;
