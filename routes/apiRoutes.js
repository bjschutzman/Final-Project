const axios = require("axios");
const router = require("express").Router();

router.get("/drinks", (req, res) => {
  console.log('HIT DRINK ROUTE');
  const searchText = req.query.q;
  console.log('QUERY TEXT: ', searchText);
  const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchText}`;
  console.log('URLY', url);
  axios
    .get(url)
    .then(response => {
      console.log('DATA FROM API', response);
      res.json(response.data);
    })
    .catch(err => res.status(422).json(err));
});

module.exports = router;