const router = require("express").Router();
const stripe = require("stripe")(process.env.STRIPE_SK);

router.post("/", (req, res) => {
  stripe.charges
    .create({
      amount: 9.99,
      currency: "usd",
      description: "Tortuga Spotify Exercise",
      source: req.body
    })
    .then(data => {
      console.log(data);
      res.status(406).send({ error: { content: "Error" } });
    })
    .catch(err => {
      console.log(err);
      res.send(err);
    });
});

module.exports = router;
