require('dotenv').config();

const app = require("./app.js");
const sequelize = require("./db/dbconnect.js");
const PORT = process.env.PORT
const secret = process.env.SECRET
const Users = require("./db/models/Users.js");
const Categories = require("./db/models/Categories.js");

async function main() {
  try {
    await sequelize.sync({force: false});
    app.listen(PORT, () => {
      console.log(`Server listening on ${PORT}`);
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

main();
