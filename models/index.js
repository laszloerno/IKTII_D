const { Sequelize, DataTypes, QueryTypes } = require('sequelize');

const dbUsers = require('./auth/users.js');

const seq = new Sequelize('DB NAme', 'Felhasznalo', 'jelszo', {
  host: 'cim',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
    requestTimeout: 300000,
  },
  dialectOptions: {
    options: { encrypt: true },
  },
  logging: true,
});

const db = {};
db.Sequelize = Sequelize;
db.seq = seq;
db.QueryTypes = QueryTypes;

db.Auth = {};

db.Auth.User = dbUsers(seq, Sequelize, DataTypes);

db.Adatok = {};

db.Adatok.Tabla = {};

//module.exports = checkDB()
module.exports = db;
