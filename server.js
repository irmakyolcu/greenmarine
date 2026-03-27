const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Backend calisiyor");
});

app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

app.post("/api/test", (req, res) => {
  const { name } = req.body;
  res.json({ message: `Merhaba ${name}` });
});

app.listen(PORT, () => {
  console.log(`Server ${PORT} portunda calisiyor`);
});
