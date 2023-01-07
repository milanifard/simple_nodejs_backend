const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(process.env.DATABASE_DBNAME, process.env.DATABASE_USER, process.env.DATABASE_PASSWORD, 
    {
        dialect: "mysql",
        host: process.env.DATABASE_SERVER,
        logging: false,
        dialectOptions: {
            useUTC: false, //for reading from database
            dateStrings: true,
            typeCast: true
        },
        timezone: '+03:30' //for writing to database
        
    });

module.exports = sequelize;
