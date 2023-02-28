const { default: axios } = require("axios");
const express = require("express");
const cors = require('cors')
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors())

app.get("/", async (req, res) => {
  try {
    const response = await axios.get("https://fakestoreapi.com/products");
    res.status(200).json(response.data);
  } catch (error) {
    console.log(error);
  }
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en puerto ${PORT}`);
});
