const express = require('express')
const app = express()
const port = 3000

app.use(express.static('index'))
app.use('/apispec', express.static('../apispec'))
app.get('/', (req, res) => {
  res.redirect('index/index.html')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})