const express = require('express')
const app = express()
const PORT = process.env.PORT || 3001;
const cors = require("cors");
app.use(cors());

app.get("/api", (req, res) => {
  res.json({ message: "Hi from server!" });
});

app.listen(PORT, () => {
  console.log(`Server listenning on port: ${PORT}`);
});