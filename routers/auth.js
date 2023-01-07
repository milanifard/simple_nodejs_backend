const { request } = require('express');
const express = require('express');
const { DataTypes, QueryTypes, Op } = require("sequelize");
const sequelize = require("../utils/sequilizedb");
const router = express.Router();

router.post('/gettoken', async (req, res)=> { 
    // #swagger.tags = ['']
    // #swagger.summary = 'test'
    // #swagger.produces = ['application/json']
    /* #swagger.parameters['login'] = {
               in: 'body',
               required: true,
               schema: { $ref: "#/definitions/login" }
    } */

    const list = await sequelize.query(`select * from users where username=:username and password=:password`,  
                { type: QueryTypes.SELECT, replacements: { username: req.body.username, password: req.body.password }, raw: true });    
    if(list.length>0) 
    {
        res.set(200).send(`{ token: "testtoken" }`) 
    }
    else
    {
        res.set(404).send(`Not found!`) 
    }
} );

module.exports = router;