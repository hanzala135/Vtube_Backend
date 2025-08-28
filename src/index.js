require("dotenv").config();
const app = require("./app");
const DBConnect = require("./Db/index");

DBConnect()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.error(
      " Failed to connect to data base .not start the server",
      error
    );
    process.exit(1);
  });
