import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";


dotenv.config();
const app = express();
app.use(morgan("dev"));

app.get("/", (req, res) => {
    res.send("Hello World! this is gateway");
})

app.listen(process.env.PORT || 8000, () => {
    console.log(`Gateway is running on port ${process.env.PORT}`);
})