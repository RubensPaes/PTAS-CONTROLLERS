const port = 3000 
const express = require('express') 
const app = express() 
const itemsRoute = require('./routes/itemsRoute') 
const homeRoute = require('./routes/homeRoute')
const logger = require('./middlewares/logger') 

app.use(logger)  
app.use(express.json()) 
app.use('/', homeRoute)
app.use('/', itemsRoute) 

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`) 
}) 