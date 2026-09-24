require("dotenv").config();
const express = require("express");
const userRoutes = require("./routes/users");
const connectDatabase = require("./db/mongo")

const app = express();
app.use(express.json());
connectDatabase();

const requireAuth = require("./middleware/auth");

app.get("/", (req, res) => {
  res.send("<h1>hello from codebox!</h1>");
});

app.get("/api/me", requireAuth, (req, res) => {
  res.json({
    id: req.user.id,
    name: "Alex",
    role: "user",
  });
});

app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
