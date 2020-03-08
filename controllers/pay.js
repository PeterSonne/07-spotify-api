const router = require("express").Router();
const stripe = require("stripe")(process.env.STRIPE_SK);

router.post("/", (req, res) => {
  console.log(req.body);
  stripe.charges
    .create({
      amount: 1000,
      currency: "usd",
      description: "Tortuga Spotify Exercise",
      source: req.body.token.id
    })
    .then(data => {
      console.log(data);
      res.status(200).send(data);
    })
    .catch(err => {
      console.log(err);
      res.status(406).send(err);
    });
});

module.exports = router;
