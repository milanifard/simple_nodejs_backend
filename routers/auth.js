const express = require('express');
const router = express.Router();

router.get('/gettoken', (req, res)=> { res.set(200).send(`{ token: "testtoken" }`) } );

module.exports = router;