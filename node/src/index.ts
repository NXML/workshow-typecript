

// let sensors = importsensors

import { Sensor } from "./database.js"

import express from "express"

const { PORT = '3000' } = process.env
const app = express()
app.use(express.json());

// app.use((req, res, next) => {
//     res.send('Hello Jack')
// })

app.listen(PORT)




//index get capteur
app.get('/sensor/:id', async function (req, res) {

    try {

        let sensor = await Sensor.findById("" + req.params.id)
        res.status(200)
        res.json(sensor)

    } catch (error) {
        res.status(404)
        res.json({ "err": error })
    }



})

//Add add a sensor
app.post('/sensor/', function (req, res) {
    let newSensor = new Sensor(req.body)
    newSensor.save((err: any) => {
        if (err) {
            res.status(201)
            res.json({
                "response": "error",
                "payload": req.body.id,
                "err":err
            })
        } else {
            res.status(200)
            res.json({
                "response": "success",
                "payload": req.body.id
            })
        }
    })


})




//Get all sensors
app.get('/sensor', async function (req, res) {
    try {

        let sensors = await Sensor.find()
        res.status(200)
        res.json(sensors)

    } catch (error) {
        res.status(404)
        res.json({
            "response": "error"
        })
    }

})












app.delete('/sensor/:id', async function (req, res) {
    try {

        await Sensor.deleteOne({
            _id: req.params.id
        })
        res.status(200)
        res.json({
            "response": "success",
            "payload": req.params.id
        })

    } catch (error) {
        res.status(404)
        res.json({
            "response": "error",
            "msg": error
        })
    }


})



//update sensor
app.put('/sensor/:id', async function (req, res) {
    try {


        let sensor = await Sensor.updateOne({
            _id: req.params.id
        }, {
            ...req.body
        })
        res.status(200)
        res.json({
            "response": "success",
            "payload": req.params.id,
        })
    } catch (error) {
        res.status(404)
        res.json({
            "response": "error",
            "payload": req.params.id
        })
    }

})





app.get('/', function (req, res) {
    res.status(200)
    res.json({ "response": "true" })
})
