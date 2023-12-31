import express from 'express'
import cors from 'cors'
import userRouter from './routes/user.routes.js';

const app = express();
const port = process.env.PORT || 3000;

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit:"16kb"}))
app.use(express.static("public"))

app.use("/api/v1/users", userRouter);

export {app, port}