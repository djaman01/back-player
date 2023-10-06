const express = require('express')
const app = express()
const port = 3005
const db = require('./db')
const postModel = require('./models')

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/', async(req, res) =>{
  const {Name, Nickname} = req.body
  try{
      const newPost = await postModel.create({Name, Nickname});
      res.json(newPost)
  }catch(error){
      res.status(500).send(error)
    }
})
app.listen(port, () => {
  console.log(`Example app listening ${port}`)
})
