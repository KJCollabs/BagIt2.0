const router = require("express").Router();
var db = require("../../models");

// get route, edited to match sequelize
router.get("/active", function (req, res) {
	// replace old function with sequelize function
	db.items
		.findAll({
			where: {
				active: 1,
			},
		})
		// use promise method to pass the userlist...
		.then(function (dbitems) {
			// into the main index, updating the page

			var dbitems = {
				items: dbitems,
			};
			return res.json(dbitems);
		});
});

router.get("/inactive", function (req, res) {
	// replace old function with sequelize function
	db.items
		.findAll({
			where: {
				active: 0,
			},
		})
		// use promise method to pass the userlist...
		.then(function (dbitems) {
			// into the main index, updating the page

			var dbitems = {
				items: dbitems,
			};
			return res.json(dbitems);
		});
});

router.get("/all", function (req, res) {
	// replace old function with sequelize function
	db.items
		.findAll({})
		// use promise method to pass the userlist...
		.then(function (dbitems) {
			// into the main index, updating the page

			var dbitems = {
				items: dbitems,
			};
			return res.json(dbitems);
		});
});

router.post("/", function (req, res) {
	console.log("Hit the Items Create route with", req.body);
	db.User.create({
		user_name: req.body.user,
	}).then((results) => {
		db.items
			.create({
				items_name: req.body.item,
				CategoryId: req.body.categoryId,
				UserId: results.id,
			})

			.then(function (dbitems) {
				var dbitems = {
					items: dbitems,
				};
				return res.json(dbitems);
			});
	});
});

module.exports = router;
