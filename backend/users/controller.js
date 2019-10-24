const usertable = require("./model");
const jwt = require("jsonwebtoken");

usertable.createTable();
const controller = {};

controller.insert = (req, res) => {
  const data = req.body;
  usertable.insert(data);
  res.send(data);
};

controller.getUser = (req, res) => {
  const login = req.body.login;
  const password = req.body.password;
  const response = usertable.getUserById(login, password);
  response.then(user => {
    const data = user.rows;
    if (data.length !== 0) {
      jwt.sign({ user: data }, "Sororezo@2016", (err, token) => {
        if (err) {
          res.sendStatus(403);
        } else {
          res.send({ token });
        }
      });
    } else {
      res.sendStatus(403);
    }
  });
};

controller.checkUser = (req, res) => {
  const login = req.params.login;
  const password = req.params.password;
  const result = usertable.checkUser(login, password);

  result.then(x => {
    if (x.rows.length === 0) {
      res.status(403).send("Wrong login or password");
    } else {
      console.log(x.rows[0]);
      jwt.sign({ user: x.rows[0] }, "hello", (err, token) => {
        res.json({
          token
        });
      });
      res.status(200).send(x.rows);
    }
  });
};

controller.getUserByName = (req, res) => {
  const name = req.params.name;
  const result = usertable.getUserByName(name);
  result.then(x => {
    if (x.rows.length === 0) {
      res.status(403).send("error server");
    } else {
      res.send(x.rows);
    }
  });
};

controller.testtoken = (req, res) => {
  jwt.verify(req.token, "hello", (err, authData) => {
    if (err) {
      res.sendStatus(403);
    } else {
      res.json({
        message: "certified",
        authData
      });
    }
  });
};

controller.verifyToken = (req, res, next) => {
  const bearerHeader = req.headers["authorization"];

  if (typeof bearerHeader !== "undefined") {
    const bearer = bearerHeader.split(" ");
    const bearerToken = bearer[1];
    req.token = bearerToken;
    console.log("icu");
    next();
  } else {
    res.sendStatus(403);
  }
};

module.exports = controller;
