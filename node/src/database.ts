import  mongoose from "mongoose"


mongoose.connection.on('connected', function() {
    console.log('Connection established to MongoDB');
});

const dbURI = "mongodb://root:example@mongo:27017/"



mongoose.connect(dbURI,{ useNewUrlParser: true , useUnifiedTopology: true } );

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


export {Sensor} 