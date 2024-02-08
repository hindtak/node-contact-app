const express = require("express");

const router = express.Router();
// uuid it a module
const uuid = require("uuid");

let users = require("../../Users")
router.get("/", (req, res) => {

    res.json(users);
  
  });

// router.get(‘/’): This route displays the users’ data in the API response  
// router.get(‘/:id’): We define this route to search for a user’s data using their ID.
//  It returns the data if found; otherwise, it sends an error message
router.get("/:id", (req, res) => {

    const found = users.some(user => user.id === parseInt(req.params.id));
  
   
  
    if (found) {
  
      res.json(users.filter(user => user.id === parseInt(req.params.id)));
  
    } else {
  
      res.sendStatus(400);
  
    }
    // to add a new user
    users.push(newUser);

  res.json(users);

});
//Update User

router.put("/:id", (req, res) => {
    // ??
    const found = users.some(user => user.id === parseInt(req.params.id));
  
    if (found) {
  
      const updateUser = req.body;
  
      users.forEach(user => {
  
        if (user.id === parseInt(req.params.id)) {
            // ??
          user.name = updateUser.name ? updateUser.name : user.name;
  
          user.email = updateUser.email ? updateUser.email : user.email;
  
          res.json({ msg: "User updated", user });
  
        }
  
      });
  
    } else {
  
      res.sendStatus(400);
  
    }
  
  });
//Delete User

router.delete("/:id", (req, res) => {
// ???????,
    const found = users.some(user => user.id === parseInt(req.params.id))
  
    if (found) {
  
      users = users.filter(user => user.id !== parseInt(req.params.id))
  
      res.json({
  
        msg: "User deleted",
  
        users
  
      });
  
    } else {
  
      res.sendStatus(400);
  
    }
  
  });
  module.exports = router;
  
  
//  successefully work