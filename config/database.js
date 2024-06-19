const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('database_development', 'root', '12345678', {
  host: 'localhost',
  dialect: 'mysql' 
});

async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('Conexão bem-sucedida com o banco de dados.');
  } catch (error) {
    console.error('Erro ao conectar ao banco de dados:', error);
  }
}

testConnection();

module.exports = sequelize;


