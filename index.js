const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send("Olá Docker")
})

app.listen(PORT, () => {
  console.log(`App listen on port ${PORT}`)
})