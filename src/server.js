const express = require("express");
const sequelize = require("./db/dbconnect.js");
const PORT = process.env.PORT || 3001;
const app = express();
const cors = require("cors");
const Users = require("./models/Users.js");
const Categories = require("./models/Categories.js");
const PetitionsStatus = require("./models/PetitionsStatus.js")
app.use(cors());

app.get("/api", (req, res) => {
  res.json({ message: "Hi from server!" });
});

async function main() {
  try {
    await sequelize.sync({ force: true });
    app.listen(PORT, () => {
      console.log(`Server listening on ${PORT}`);
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

main();
