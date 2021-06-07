"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
mongoose_1.default.connect('mongodb://root:example@mongo:27017/', { useNewUrlParser: true, useUnifiedTopology: true });
const sensorSchema = new mongoose_1.default.Schema({
    type: { type: String },
    data: { type: Array },
    metrucs: { type: Boolean }
});
const Sensor = mongoose_1.default.model('Sensor', sensorSchema);
exports.default = Sensor;
