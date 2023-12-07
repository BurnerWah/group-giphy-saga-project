const { default: axios } = require("axios");
const { Router } = require("express");

const router = Router();

router.get("/", async (req, res) => {
  // Get the query parameter
  const { q } = req.query;
  // Don't bother querying Giphy if there's no search query
  if (q) {
    try {
      // Query Giphy search API
      const results = await axios.get("https://api.giphy.com/v1/gifs/search", {
        params: {
          api_key: process.env.GIPHY_API_KEY,
          q: q,
        },
      });
      // Send back the data property of the results
      res.send(results.data.data);
    } catch (error) {
      // Log the error and send back a 500 error status
      console.log("Error making request to GIPHY API:", error);
      res.sendStatus(500);
    }
  } else {
    // No search query provided, send back an empty array of results
    console.log("No search query provided");
    res.send([]);
  }
});

module.exports = router;
