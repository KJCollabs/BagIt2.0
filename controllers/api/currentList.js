const router = require("express").Router();
var db = require("../../models");
// get route -> index
router.get("/", function (req, res) {
  //do things here for other routes
});

// get route, edited to match sequelize
router.get("/currentList", function (req, res) {
  // replace old function with sequelize function
  db.items
    .findAll({
      // Here we specify we want to return our currentList in ordered by ascendin'item_name
      order: ["item_name", "ASC"],
    })
    // use promise method to pass the currentList...
    .then(function (dbitems) {
      // into the main index, updating the page
      console.log(dbitems);
      var dbitems = {
        items: dbitems,
      };
      //I'M NOT USING HANDLEBARS! WE CANT USE THIS.
      // return res.render('index', hbsObject);
      return res.json(dbitems);
    });
});

// post route to create currentList
router.post("/currentList/create", function (req, res) {
  // edited items create to add in 'item_name
  db.items
    .create({
      item_name: req.bod.item_name,
    })
    // pass the result of our call
    .then(function (dbitems) {
      // log the result to our terminal/bash window
      console.log(dbitems);
      // redirect
      res.redirect("/");
    });
});

// put route to devour a items
router.put("/currentList/update", function (req, res) {
  // If we are given a user, create the user and give them this devoured items
  if (req.body.user) {
    db.user
      .create({
        user: req.body.user,
        itemsId: req.body.item_id,
      })
      .then(function (dbuser) {
        return db.items.update(
          {
            devoured: true,
          },
          {
            where: {
              id: req.body.item_id,
            },
          }
        );
      })
      .then(function (dbitems) {
        res.json("/");
      });
  }
  // If we aren't given a user, just update the items to be devoured
  else {
    db.items
      .update(
        {
          devoured: true,
        },
        {
          where: {
            id: req.body.item_id,
          },
        }
      )
      .then(function (dbitems) {
        res.json("/");
      });
  }
});

module.exports = router;
