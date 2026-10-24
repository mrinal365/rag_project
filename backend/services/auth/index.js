import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";

dotenv.config();

const app = express();
app.use(morgan("dev"));

app.get("/", (req, res) => {
    res.send("Hello World! this is auth");
})

app.listen(process.env.PORT, () => {
    console.log(`Auth is running on port ${process.env.PORT}`);
    connectDB();
})