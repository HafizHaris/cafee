const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const { errorHandler } = require('./middlewares/errorMiddleware')
const connectDB = require('./config/db')

const port = process.env.PORT || 5000

connectDB()

const app = express()

app.use(express.json())

app.use('/api/user', require('./routes/userRoutes'))
app.use('/api/cafe', require('./routes/cafeRoutes'))
app.use('/api/activity', require('./routes/activityRoutes'))

app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`))