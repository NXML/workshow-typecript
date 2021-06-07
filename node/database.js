import mongoose from "mongoose"




mongoose.connect('mongodb://root:example@mongo:27017/',{ useNewUrlParser: true , useUnifiedTopology: true } );

const Sensor = mongoose.model('Sensor', { 
    _id : Number,
    type: String, 
    data: Array,
    metrics: Boolean
});


export {Sensor}