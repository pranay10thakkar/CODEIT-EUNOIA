var express = require("express");
const app = express();

//require routes
var coursesRoutes = require("./routes/courses");

app.get("/main", (req, res) => {
  const customers = [
    { id: 1, Name: "Hriday" },
    { id: 2, Name: "Vedant" },
    { id: 3, Name: "Pranay" },
    { id: 4, Name: "Rahil" },
  ];
});

app.use(coursesRoutes);

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log("Server is listening!");
});
