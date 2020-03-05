const router = require("express").Router();
const db = require("../db");

router.get("/", (req, res) => {
  db.query(
    `SELECT al.id as id, al.name as name, ar.name as artist, al.cover as cover FROM albums as al 
    LEFT JOIN artists ar ON al.artist = ar.id`,
    (err, results) => {
      res.status(err ? 500 : 200).send(err ? err : results);
    }
  );
});

router.get("/:id", (req, res) => {
  db.query(
    `SELECT al.id as id, al.name as name, ar.name as artist, al.cover as cover FROM albums as al 
    LEFT JOIN artists ar ON al.artist = ar.id WHERE al.id=${req.params.id}`,
    (err, results) => res.status(err ? 500 : 200).send(err ? err : results[0])
  );
});

module.exports = router;
