import mongoose from "mongoose"




mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});

const Sensor = mongoose.model('Sensor', { 
    id : Number,
    type: String, 
    data: Array,
    metrics: Boolean
});


export {Sensor}