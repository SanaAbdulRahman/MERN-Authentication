import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { connectDB } from './db/connectDB.js';
import authRoutes from './routes/authRoute.js'

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

const corsOptions = {
    origin: 'http://localhost:5173', // React app's origin
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type, Authorization',
    credentials: true

};

app.use(cors(corsOptions));

app.use(express.json());    //allows us to parse incoming request:req.body
app.use(cookieParser());   //allows us to parse incoming cookies :req.cookies.token

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
    connectDB();
    console.log(`server is running on port ${PORT}`);

})


