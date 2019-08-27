const express = require('express');
const router = express.Router();

//GET api/auth
router.get('/', (req, res) => {
  res.send('get logged in user');
});

//POST api/auth
router.post('/', (req, res) => {
  res.send('Auth user and get token');
});

module.exports = router;
