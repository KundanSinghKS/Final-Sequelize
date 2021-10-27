const Sequelize = require('sequelize');

const sequelize = new Sequelize('nodesql', 'root', '', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
