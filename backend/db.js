const mongoose = require('mongoose');

const uri = `mongodb+srv://sourav-70180:aulND2S6HYBthRXI@cluster0.fzdd4u5.mongodb.net/recipe-app?retryWrites=true&w=majority`

mongoose.connect(uri).then(()=>{
    console.log("Connected to DataBase")
}).catch(error => console.log(error));

