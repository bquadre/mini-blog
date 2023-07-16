const express = require('express');
const app = express();
const cors = require('cors');
const db = require('./models');
const postsRouter = require('./routes/Posts');

app.use(express.json())
app.use(cors())
app.use("/posts", postsRouter);

    db.sequelize.sync().then(()=>{
        app.listen("3003", ()=>{
        console.log("App is runing on port 3003");
    })
})

