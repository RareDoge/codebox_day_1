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

export default auth