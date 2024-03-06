const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL);

const connection = mongoose.connection;

connection.on('connected', () => {
    console.log('Conneted to mongogb');
})
connection.on('error', (error) => {
    console.log(error);
})

module.exports = mongoose;