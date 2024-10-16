const express = require('express');
const app = express();
const port = 3000;
app.get('/', (req,res) => {
   res.send('hellow world hoy 15 oct 2024')
});
app.listen(port, () => {
  console.log(`example app listening on port ${port}`)
});
