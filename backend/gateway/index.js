import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import proxy from 'express-http-proxy'

dotenv.config();

const app = express();
app.use(morgan("dev"));

// routes
app.use('/auth', proxy(process.env.AUTH_SERVICE));

app.get("/", (req, res) => {
    console.log(req.url);
    res.send("Hello World! this is gateway");
})

app.listen(process.env.PORT, () => {
    console.log(`Gateway is running on port ${process.env.PORT}`);
})