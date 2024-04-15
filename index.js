const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors({ origin: "https://macrohive.com" }));

// Your other server setup code
// For example, serving your Vite app
app.use(express.static(path.join(__dirname, "client/dist")));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/dist", "index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
