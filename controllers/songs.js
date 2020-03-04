const router = require("express").Router();
const db = require("../db");

router.get("/", (req, res) => {
  db.query(
    `SELECT s.id as id, s.name as name, s.audio as audio, al.name as album, ar.name as artist, 
    g.name as genre FROM songs as s LEFT JOIN albums as al ON s.album = al.id LEFT JOIN artists 
    as ar ON s.artist = ar.id LEFT JOIN genres as g ON s.genre = g.id ${
      Object.entries(req.query).length > 0
        ? "WHERE " +
          Object.keys(req.query)
            .map(e => `s.${e} = ${req.query[e]}`)
            .join(" AND ")
        : ""
    }`,
    (err, results) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.send(results);
      }
    }
  );
});

module.exports = router;
