"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sensor = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
mongoose_1.default.connection.on('connected', function () {
    console.log('Connection established to MongoDB');
});
const dbURI = "mongodb://root:example@mongo:27017/";
mongoose_1.default.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });
const sensorSchema = new mongoose_1.default.Schema({
    type: { type: String },
    data: { type: Array },
    metrucs: { type: Boolean }
});
const Sensor = mongoose_1.default.model('Sensor', sensorSchema);
exports.Sensor = Sensor;
