const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {rejectUnauthenticated} = require('../modules/authentication-middleware');
/**
 * Get all of the items on the shelf
 */
router.get('/', rejectUnauthenticated, (req, res) => {
   console.log('/api/shelf GET route');
    console.log('is authenticated?', req.isAuthenticated());
    console.log('user', req.user);

    let queryText, queryParams;
        queryText = `SELECT * FROM "item"`
    
        queryParams = [req.user.id];
    

    pool.query(queryText).then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log(error);
        res.sendStatus(500);
    });
});

/**
 * Add an item for the logged in user to the shelf
 */
router.post('/', rejectUnauthenticated, (req, res) => {
  console.log("/shelf POST route");
  console.log(req.body);
  console.log("is authenticated?", req.isAuthenticated());
  console.log("user", req.user);

  // Kick out unauthenticated users
    if (!req.isAuthenticated()) {
      res.sendStatus(403);
      return;
    }

  const queryString = `INSERT INTO "item" ("description", "image_url", "user_id" )
VALUES ($1, $2, $3)`;
  pool
    .query(queryString, [req.body.description, req.body.image, req.user.id])
    .then((results) => {
      res.sendStatus(201);
    })
    .catch((err) => {
      console.err(`POST /Add Shelf_Item failed`, err);
      res.sendStatus(500);
    });
});

/**
 * Delete an item if it's something the logged in user added
 */
router.delete('/:id', (req, res) => {
  // DELETE route code here
});

/**
 * Update an item if it's something the logged in user added
 */
router.put('/:id', (req, res) => {
  // PUT route code here
});

/**
 * Return all users along with the total number of items
 * they have added to the shelf
 */
router.get('/count', (req, res) => {
  // GET /count route code here
});

/**
 * Return a specific item by id
 */
router.get('/:id', (req, res) => {
  // GET item route code here
});

module.exports = router;
