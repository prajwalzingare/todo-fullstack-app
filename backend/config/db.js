const mongoose = require("mongoose");

const connectToDB = () => {
  mongoose
    .connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((conn) => {
      console.log(`connected db:${conn.connection.host}`);
    })
    .catch((err) => {
      console.log(err.message);
      console.log("object");
      process.exit(1);
    });
};

module.exports = connectToDB;
