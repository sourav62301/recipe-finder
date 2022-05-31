const mongoose = require('mongoose');

const uri = process.env.DATABASE

mongoose.connect(uri).then(()=>{
    console.log("Connected to DataBase")
}).catch(error => console.log(error));

