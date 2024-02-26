const csv = require("csv-parser");
const fs = require("fs");
const admin = [];

const dataReader = async () => {
  try {
    fs.createReadStream("./csv/data.csv")
      .pipe(csv({}))
      .on("data", (data) => admin.push(data))
      .on("end", () => {});
  } catch (err) {
    console.log("Error: ", err);
  }
  return admin[0];
};

module.exports = { dataReader };
