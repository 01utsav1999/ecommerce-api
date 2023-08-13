const mongoose = require('mongoose');
mongoose.connect(`mongodb+srv://01utsav1999:qXehA4fNwMeF1PuM@cluster0.bfk6wsm.mongodb.net/?retryWrites=true&w=majority`);

const db = mongoose.connection;

db.on('error',console.error.bind(console,"Error in connection db"));

db.once('open',function(){
    console.log("Successfully connected to database :: MongoDB");
})