const express = require("express");
const router = express.Router();

const controller = require("./controller");

router.get("/", (req, res) => {
  res.send("hello122");
});

router.post("/", controller.insert);

router.post("/login", controller.getUser);

router.get("/search/:name", controller.getUserByName);

router.get("/:login/:password", controller.checkUser);
router.post("/testtoken", controller.verifyToken, controller.testtoken);

module.exports = router;
