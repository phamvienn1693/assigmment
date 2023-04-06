const express = require('express')
const bodyParser = require('body-parser');

const app = express()
const port = 3000
const path = require('path')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/public',express.static(path.join(__dirname, '/public')))

app.get('/', function(req, res) {
  var duongDanFile = path.join(__dirname, 'home.html')
  res.sendFile(duongDanFile)
})

app.post('/', (req, res) => {
  const { firstname, lastname } = req.body
  const fullname = [firstname, lastname].filter((name) => !!name).join(' ')
  res.json({
    "fullname": fullname,
  })
})

app.put('/user', (req, res) => {
  res.send('Got a PUT request at /user')
})

app.delete('/user', (req, res) => {
  res.send('Got a DELETE request at /user')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
