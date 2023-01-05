const express = require('express')
const cors = require('cors')
const connect = require('./config/db')
const {
  playlistroutes,
  songroutes,
  artistroutes,
  userroutes,
} = require('./routes')
const app = express()
require('dotenv').config()

app.use(cors())
app.use(express.json())

connect()

app.use(playlistroutes)
app.use(songroutes)
app.use(artistroutes)
app.use(userroutes)

const port = process.env.PORT || 8080

app.get('/', async (req, res) => {
  res.send('Hello Pinecone!')
})

app.listen(port, () => {
  console.log('server running at:', port)
})
