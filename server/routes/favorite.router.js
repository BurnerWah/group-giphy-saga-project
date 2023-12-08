const express = require("express");
const pool = require("../modules/pool");

const router = express.Router();

// return all favorite images
router.get("/", async (req, res) => {
  try {
    const results = await pool.query(/*sql*/ `
      SELECT *
      FROM "favorites";
    `);
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
    res.sendStatus(400); // HTTP code 400 is a "Bad Request"
    return;
  }
  try {
    // The giphy_id is a string from Giphy's API present on each Gif object
    // https://developers.giphy.com/docs/api/schema/#gif-object
    await pool.query(
      /*sql*/ `
        INSERT INTO
          "favorites" ("giphy_id")
        VALUES ($1);
      `,
      [giphy_id],
    );
    res.sendStatus(201);
  } catch (error) {
    console.log("Error adding favorite to database:", error);
    res.sendStatus(500);
  }
});

// update a favorite's associated category
router.put("/:id", async (req, res) => {
  try {
    // ID is our internal ID, not the Giphy ID
    await pool.query(
      /*sql*/ `
        UPDATE "favorites"
        SET "category_id" = $1
        WHERE "id" = $2;
      `,
      [req.body.category, req.params.id],
    );
    res.sendStatus(200);
  } catch (error) {
    console.log("Error updating favorite in database:", error);
    res.sendStatus(500);
  }
});

// delete a favorite
router.delete("/:id", (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
