

import importsensors from "./censors.js"

let sensors = importsensors


import express from "express"

const { PORT = '3000' } = process.env
const app = express()
app.use(express.json());

// app.use((req, res, next) => {
//     res.send('Hello Jack')
// })

app.listen(PORT)




//index get capteur
app.get('/sensor/:id', function (req, res) {
    let sensor = sensors.filter((s) => s.id == req.params.id)
    if (sensor[0]) {
        res.status(200)
        res.json(sensor[0])
    } else {
        res.status(404)
        res.json({ "err": "Not aviable" })
    }
})

//Add add a sensor
app.post('/sensor/', function (req, res) {
    let index = sensors.findIndex((elem) => elem.id == req.body.id)
    if (index == -1) {
        sensors.push(req.body)
        res.status(200)
        res.json({
            "response": "success",
            "payload": req.body.id
        })
    } else {
        res.status(201)
        res.json({
            "response": "error",
            "payload": req.body.id
        })
    }

})


app.delete('/sensor/:id', function (req, res) {
    if (!req.params.id) {
        res.status(404)
        res.json({
            "response": "error",
            "msg": "Provide an Id to delete"
        })
        return
    }
    let index = sensors.findIndex((elem) => elem.id == req.params.id)
    if (index != -1) {
        sensors.splice(index, 1)
        res.status(200)
        res.json({
            "response": "success",
            "payload": req.params.id
        })
    } else {
        res.status(404)
        res.json({
            "response": "error",
            "payload": req.params.id
        })
    }

})



//update sensor
app.put('/sensor/:id', function (req, res) {

    let index = sensors.findIndex((elem) => elem.id == req.params.id)
    if (index != -1) {
        sensors[index] = {
            ...sensors[index],
            ...req.body
        }
        res.status(200)
        res.json({
            "response": "success",
            "payload": req.params.id,
            "test":sensors
        })
    }
    else {
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
