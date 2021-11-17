require('dotenv').config()

const mongoose = require("mongoose");
const express = require("express");
const app = express();

mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex:true
}).then(() => {
    console.log("DB CONNECTED")
})




require('./models/device_connection_status_m')


app.use(express.json())

app.use(require('./routes/device_connection_status'))


const port = process.env.PORT||9000;

app.listen(port, () => {
  console.log(`app is running at ${port}`);
});
