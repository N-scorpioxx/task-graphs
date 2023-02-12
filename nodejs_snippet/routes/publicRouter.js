var express = require('express');
var public_Route = express.Router();

//-----------importing controllers----------------
const publicController = require('../controllers/publicController')
public_Route.route('/')
.get(publicController.get_all_humans)



module.exports = public_Route;
