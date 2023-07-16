const express = require('express');
const app = express();
const cors = require('cors');
const db = require('./models');

app.use(cors())
app.use(express.json())

    db.sequelize.sync().then(()=>{
        app.listen("3001", ()=>{
        console.log("App is runing on port 3001");
    })
})

