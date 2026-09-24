require("dotenv").config({ quiet: true });

const jwt = require("jsonwebtoken");

if (!process.env.JWT_SECRET) {
  throw new Error("JWT_SECRET is required in .env");
}

console.log(
  jwt.sign({ id: 1 }, process.env.JWT_SECRET, {
    algorithm: "HS256",
    expiresIn: "15m",
  })
);
