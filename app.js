const express = require("express");
const path = require("path");

const app = express();

// starting the app on port 3000
const port = 3000;

// setting the static route link for static files - all the JS files and images
app.use("/static", express.static(path.join(__dirname, "public")));

// setting the view engine to pug
app.set("view engine", "pug");

// move the view into the src folder
app.set("views", path.join(__dirname, "src/views"));

// inject routes
const routes = require("./src/routes");

// set the app to use those routes
app.use(routes);

// error handling middleware - if this triggers then no route was matched
app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// error resolver - writes a console error when route doesnt exist
app.use((err, req, res, next) => {
  res.locals.error = err;
  res.status(err.status);
  console.error("There's been an error getting the resource: ", err.message);
  console.error("Status Code: ", err.status);
  console.error("Stack Trace: ", err.stack);
  res.render("error", err);
});

// starting the server and listening on port 3000
app.listen(port, () => console.log(`App listening on port ${port}`));
