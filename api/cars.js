const app = require("../app");
const route = require("../routes/carsRoute");

app.use("/api/", route);

module.exports = app;