
const express = require("express");
const { getUsers, findUserById, addUser } = require("../services/userService");

const router = express.Router();



router.get("/", (req, res) => {
  res.json(getUsers());
});

router.get("/:id", (req, res) => {
  const user = findUserById(req.params.id);

  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  res.json(user);
});

router.post('/', (req,res) => {
  const newUser = {
    id: 3,
    name: req.body.name,
  }
  
  addUser(newUser)
  res.json(getUsers());
})

module.exports = router;
