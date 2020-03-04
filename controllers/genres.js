const router = require("express").Router();
const db = require("../db");

router.get("/", (req, res) => {
  db.query("SELECT * FROM genres", (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(results);
    }
  });
});

router.get("/:id", (req, res) => {
  db.query(`SELECT * FROM genres WHERE id=${req.params.id}`, (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(result.length == 1 ? result[0] : {});
    }
  });
});

module.exports = router;
