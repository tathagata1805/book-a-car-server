const app = require("../app");
const route = require("../routes/bookingsRoute");

app.use("/api/", route);

module.exports = app;