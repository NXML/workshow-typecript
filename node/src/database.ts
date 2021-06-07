import  mongoose from "mongoose"



mongoose.connect('mongodb://root:example@mongo:27017/',{ useNewUrlParser: true , useUnifiedTopology: true } );

interface ISensor {
    _id : String,
    type: String, 
    data: Array<any>,
    metrics?: Boolean
}

const sensorSchema = new mongoose.Schema<ISensor>({
    type:{ type:String},
    data:{ type:Array},
    metrucs:{ type:Boolean}
})

const Sensor = mongoose.model('Sensor', sensorSchema);


export default Sensor