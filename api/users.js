const app = require("../app");
const route = require("../routes/usersRoute");

app.use("/api/", route);

module.exports = app;