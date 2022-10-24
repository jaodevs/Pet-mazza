const mongoose = require("mongoose")
const newPost = new mongoose.Schema({

    NomeCuidador: {
        type: String,
        require: true
    },

    Nomepet: {
        type: String,
        require: true
    },

    animal: {
        type: String,
        require: true,
        enum:[ "gato","cachorro","hamster","passarinho"]
    },
    
    docil:{
        type: String,
        require: true,
        or: false
       
    },

    date: {
        type: Date,
        default: Date.now()
    }

})

mongoose.model("posts", newPost)

