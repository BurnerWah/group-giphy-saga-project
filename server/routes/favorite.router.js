const express = require("express");
const pool = require("../modules/pool");

const router = express.Router();

// return all favorite images
router.get("/", async (req, res) => {
  try {
    const results = await pool.query(`SELECT * FROM "favorites"`);
    res.send(results.rows);
  } catch (error) {
    console.log("Error getting favorites from database:", error);
    res.sendStatus(500);
  }
});

// add a new favorite
router.post("/", async (req, res) => {
  const giphy_id = req.body.id;
  // Require the ID to be set
  if (!giphy_id) {
    res.sendStatus(400);
    return;
  }
  try {
    await pool.query(`INSERT INTO "favorites" ("giphy_id") VALUES ($1)`, [
      giphy_id,
    ]);
    res.sendStatus(201);
  } catch (error) {
    console.log("Error adding favorite to database:", error);
    res.sendStatus(500);
  }
});

// update a favorite's associated category
router.put("/:id", (req, res) => {
  // req.body should contain a category_id to add to this favorite image
  res.sendStatus(200);
});

// delete a favorite
router.delete("/:id", (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
