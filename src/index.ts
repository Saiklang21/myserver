import express = require('express');
import UserRoutes from './UserRoutes';

import cors from 'cors';
import mongoose from 'mongoose';

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", UserRoutes);

const uri = process.env.MONGO_URI;
if (!uri) {
    throw new Error('MONGO_URI is not set');
}

mongoose.connect(uri)
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(3000, () => {
            console.log('Server is running on port 3000');
        });
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });