const User = require('./User');
const Product = require('./Product');
const Category = require('./Category');
const Order = require('./Order');

module.exports = { User, Product, Category, Order };

const express = require ('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')

app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://localhost:3001/timepiece')

app.post('/api/register', async (req, res) => {
    console.log(req.body)
    try {
        const user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        })
    }catch (err) {
        res.json({ status: 'ok' })
    }
    res.json({status: 'error', error: 'duplicate email'})
})

app.get('/TimePiece', (req, res)=> {
    res.send('TimePiece Website')
    res.json({ status: 'ok'})
})

app.listen(3001, () => {
    console.log('Server started on 3001')
})
