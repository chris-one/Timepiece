const User = require('./User');
const Product = require('./Product');
const Category = require('./Category');
const Order = require('./Order');

module.exports = { User, Product, Category, Order };

const express = require ('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const users =require('./models./user.model')
const jwt =require('jsonwebtoke')


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
    res.json({status: 'error', error: 'Duplicate email'})
})

app.post('/api/login', async (req, res) => {
    try {
        const user = await User.findOne({
            email: req.body.email,
            password: req.body.password,
        })

        if (user) {
            const token = jwt.sign(
                {
                    name: user.name,
                    email: user.email,
                },
                'admin123'
            )

            return res.json ({ status: 'ok', user: token })
        } else {
            return res.json ({ status: 'error', user: false })
        }
        }

    catch (err) {
        res.json({ status: 'ok' })
    }
    res.json({status: 'error', error: 'Duplicate email'})
})

if (user) {
    return res.json ({ status: 'ok', user: true })
} else {
    return res.json ({ status: 'error', user: false })
}

res.json({ status: 'ok'})

app.get('/TimePiece', (req, res)=> {
    res.send('TimePiece Website')
    res.json({ status: 'ok'})
})

app.listen(3001, () => {
    console.log('Server started on 3001')
})
