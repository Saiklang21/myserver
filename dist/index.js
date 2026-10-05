"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const UserRoutes_1 = __importDefault(require("./UserRoutes"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const app = express();
app.use((0, cors_1.default)());
app.use(express.json());
app.use("/api", UserRoutes_1.default);
const uri = process.env.MONGO_URI;
if (!uri) {
    throw new Error('MONGO_URI is not set');
}
mongoose_1.default.connect(uri)
    .then(() => {
    console.log('Connected to MongoDB');
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
})
    .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});
