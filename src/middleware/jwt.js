const jwt = require("jsonwebtoken");
const path = require("path");
const fs = require("fs");
const privateKey = fs.readFileSync(
  path.join(__dirname, "../../s4t", "private.key")
);
const publicKey = fs.readFileSync(
  path.join(__dirname, "../../s4t", "public.key")
);

const signOptions = {
  algorithm: "RS256",
};

const generateToken = (payload) =>
  jwt.sign(payload, privateKey, { ...signOptions, expiresIn: "30d" });

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) {
    res.status(200).json({ Status: false, msg: "no tokens!!!", username: "" });
    return;
  }

  jwt.verify(token, publicKey, signOptions, (err, decode) => {
    if (err) {
      res
        .status(200)
        .json({ Status: false, msg: "token expired!!!", username: "" });
      return;
    }
    req.nameEm = decode.nameEm;
    req.usernameEm = decode.usernameEm;
    req.role = decode.role;
    next();
  });
};

module.exports = {
  generateToken,
  verifyToken,
};