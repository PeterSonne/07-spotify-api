const router = require("express").Router();
const db = require("../db");

router.get("/", (req, res) => {
  db.query("SELECT * FROM artists", (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(results);
    }
  });
});

router.get("/:id", (req, res) => {
  db.query(
    `SELECT * FROM artists WHERE id=${req.params.id}`,
    (err, results) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.send(results.length == 1 ? results[0] : {});
      }
    }
  );
});

module.exports = router;
