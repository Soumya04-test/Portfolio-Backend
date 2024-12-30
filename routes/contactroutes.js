const express = require('express');
const router = express.Router();
const { getContacts } = require('../controllers/contactcontroller');

router.post('/contact', getContacts);

module.exports = router;