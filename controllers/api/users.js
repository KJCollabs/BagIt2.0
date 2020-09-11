const router = require("express").Router();
var db = require("../../models");

router.get("/all", function (req, res) {
	// replace old function with sequelize function
	db.User.findAll({})
		// use promise method to pass the userlist...
		.then(function (dbusers) {
			// into the main index, updating the page

			var dbusers = {
				users: dbusers,
			};
			return res.json(dbusers);
		});
});

router.post("/create", function (req, res) {
	// replace old function with sequelize function
	db.User.create(
		{
			user_name: req.body.user_name,
			// user_name: "TestIt",
		},
		{ fields: ["user_name"] }
	).then(function (response) {
		// into the main index, updating the page

		// var dbusers = {
		// 	users: dbusers,
		// };
		return res.json(response);
	});
	// let's assume the default of isAdmin is false
	console.log(req); // 'alice123'
});

module.exports = router;
