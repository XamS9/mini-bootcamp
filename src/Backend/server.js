const app = require("./app.js");
const sequelize = require("./db/dbconnect.js");
const PORT = process.env.PORT || 3001;
const Users = require("./db/models/Users.js");
const Categories = require("./db/models/Categories.js");
const Roles = require("./db/models/Roles.js");

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
