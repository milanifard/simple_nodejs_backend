const express = require('express');
const router = express.Router();

router.get('/gettoken', (req, res)=> { 
    // #swagger.tags = ['']
    // #swagger.summary = 'test'
    // #swagger.produces = ['application/json']

    res.set(200).send(`{ token: "testtoken" }`) 
} );

module.exports = router;