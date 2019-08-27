const express = require('express');
const router = express.Router();

//GET api/contacts
router.get('/', (req, res) => {
  res.send('Get all your contacts');
});

//POST api/contacts
router.post('/', (req, res) => {
  res.send('Add contact');
});

//PUT api/contacts/:id
router.put('/:id', (req, res) => {
  res.send('Update contact');
});

//DELETE api/contacts/:id
router.delete('/:id', (req, res) => {
  res.send('Delete contact');
});

module.exports = router;
