const mongoose = require('mongoose');
require('dotenv').config();
process.on('uncaughtException', function (err) {
    console.error((new Date).toUTCString() + ' uncaughtException:', err.message);
    console.error(err.stack);
    process.exit(1);
});
//.......................................................
mongoose.connect( "mongodb+srv://bilza2024:bils32611@taleem-db.oyecc5h.mongodb.net/" );
const db = mongoose.connection;
db.on('error',(error)=> {throw new Error(error)} );

module.exports = db;

