"use strict";
// let sensors = importsensors
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_js_1 = __importDefault(require("./database.js"));
const express_1 = __importDefault(require("express"));
const { PORT = '3000' } = process.env;
const app = express_1.default();
app.use(express_1.default.json());
// app.use((req, res, next) => {
//     res.send('Hello Jack')
// })
app.listen(PORT);
//index get capteur
app.get('/sensor/:id', async function (req, res) {
    try {
        let sensor = await database_js_1.default.findById(req.params.id);
        res.status(200);
        res.json(sensor);
    }
    catch (error) {
        res.status(404);
        res.json({ "err": error });
    }
});
//Add add a sensor
app.post('/sensor/', function (req, res) {
    let newSensor = new database_js_1.default(req.body);
    newSensor.save((err) => {
        if (err) {
            res.status(201);
            res.json({
                "response": "error",
                "payload": req.body.id
            });
        }
        else {
            res.status(200);
            res.json({
                "response": "success",
                "payload": req.body.id
            });
        }
    });
});
//Get all sensors
app.get('/sensor', async function (req, res) {
    try {
        let sensors = await database_js_1.default.find();
        res.status(200);
        res.json(sensors);
    }
    catch (error) {
        res.status(404);
        res.json({
            "response": "error"
        });
    }
});
app.delete('/sensor/:id', async function (req, res) {
    try {
        await database_js_1.default.deleteOne({
            _id: req.params.id
        });
        res.status(200);
        res.json({
            "response": "success",
            "payload": req.params.id
        });
    }
    catch (error) {
        res.status(404);
        res.json({
            "response": "error",
            "msg": error
        });
    }
});
//update sensor
app.put('/sensor/:id', async function (req, res) {
    try {
        let sensor = await database_js_1.default.updateOne({
            _id: req.params.id
        }, {
            ...req.body
        });
        res.status(200);
        res.json({
            "response": "success",
            "payload": req.params.id,
        });
    }
    catch (error) {
        res.status(404);
        res.json({
            "response": "error",
            "payload": req.params.id
        });
    }
});
app.get('/', function (req, res) {
    res.status(200);
    res.json({ "response": "true" });
});
