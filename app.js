const express = require("express");
const app = express();
const PORT = process.env.PORT || 3010;

app.set("view engine", "ejs");

let data = require("./1st.json");

app.get("/", (req, res) => {
  console.log(data.materials);
  res.render("index", {
    data: data.materials,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
