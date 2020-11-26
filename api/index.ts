import express from 'express'
import cookieParser from 'cookie-parser'

const app = express()

app.use(express.json())
app.use(cookieParser())

app.get('/', (_, res) => {
  res.send({ message: 'hello' })
})

app.post('/login', (req, res) => {
  const name = req.body.name

  res.cookie('name', name).send()
})

app.get('/profile', (req, res) => {
  const name = req.cookies.name
  res.send({ name })
})

export default app
