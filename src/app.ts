import userRouter from './controllers/user'
import { connect } from './db/mongo'
import bodyParser from 'body-parser'
import express from 'express'

const port = 3000
const app = express()

// register middlewares
app.use(bodyParser.json())

// register controllers
app.use('/user', userRouter)

// register error handler 
app.use((err, req, res, next) => {
  res.status(500).send({ error: true, data: err })
})

app.listen(port, async () => {
  // initial mongo
  await connect()
  return console.log(`Listening on http://localhost:${port}`)
})
