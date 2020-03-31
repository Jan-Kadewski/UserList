const express = require('express')
const fileManager = require('./fileManager')



const app = express()
const port = 3001

app.get('/en/github', (req, res) =>{

    // console.log(req)

    let data = req.query
    console.log(data);
    fileManager.saveToFile(JSON.stringify(data))
    res.send('init project World!')


}) 

app.listen(port, () => console.log(`Example app listening on port ${port}!`) )