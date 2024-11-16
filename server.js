const express = require("express");
const app = express();
const fs = require("fs");

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Serveris running on port ${PORT}.`);
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/users", (req, res) => {
  fs.readFile("./users.json", "utf8", (err, data) => {
    if (err) {
      res.status(500).send("An error occured.");
      return;
    }
    res.send(JSON.parse(data));
  });
});

app.get("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  fs.readFile("./users.json", "utf8", (err, data) => {
    if (err) {
      res.status(500).send("An error occured.");
      return;
    }
    const users = JSON.parse(data);
    const user = Object.values(users).find((user) => user.id == id);
    if (user) {
      res.send(user);
    } else {
      res.status(404).send("User not found.");
    }
  });
});

app.get("/users/profession/:profession", (req, res) => {
  const profession = req.params.profession;
  fs.readFile("./users.json", "utf8", (err, data) => {
    if (err) {
      res.status(500).send("An error occured.");
      return;
    }
    const users = JSON.parse(data);
    const filteredUsers = Object.values(users).filter(
      (user) => user.profession === profession
    );
    if (filteredUsers.length > 0) {
      res.send(filteredUsers);
    } else {
      res.status(404).send("User not found.");
    }
  });
});
app.get("/users/name/:name", (req, res) => {
  const name = req.params.name.toLowerCase();
  fs.readFile("./users.json", "utf8", (err, data) => {
    if (err) {
      res.status(500).send("An error occured.");
      return;
    }
    const users = JSON.parse(data);
    const user = Object.values(users).find(
      (user) => user.name.toLowerCase() == name
    );
    if (user) {
      res.send(user);
    } else {
      res.status(404).send("User not found.");
    }
  });
});
