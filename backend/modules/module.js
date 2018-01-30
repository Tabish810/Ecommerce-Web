var express = require('express');
var router = express.Router();
var all_records = require('./api/application/AllRecords');

        // All Items Collection
router.post('/AllRecords',all_records.saveData);

module.exports = router;