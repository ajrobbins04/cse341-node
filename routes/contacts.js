// import express module from node_modules
const express = require('express');

// will contain the actions to be executed for defined routes
const contactsController = require('../controllers/contacts');

const router = express.Router();

// defines route for handling HTTP GET requests to the root path
router.get('/', contactsController.getAllData);
router.post('/', contactsController.createContact);
router.get('/:id', contactsController.getDataById);

module.exports = router;
