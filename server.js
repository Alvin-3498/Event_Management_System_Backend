const express = require("express");
const connectDB = require("./configs/db");
const eventRoute = require("./Routes/eventRoute");
const userRoute = require("./Routes/userRoute");
const dotenv = require("dotenv");

const app = express();
app.use(express.json());
dotenv.config()

connectDB();
const Port = process.env.PORT || 8080;

app.use("/event",eventRoute);
app.use("/user",userRoute);

app.listen(Port,() => {
    console.log("Server running at port 8080",Port);
})