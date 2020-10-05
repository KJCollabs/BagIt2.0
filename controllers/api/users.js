const router = require("express").Router();
var db = require("../../models");
require("dotenv").config();
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

router.get("/auth0", function (req, res) {
	const domain = process.env.REACT_APP_AUTH0_DOMAIN;
	const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
	res.json({
		clientId: clientId,
		domain: domain,
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
	// TODO let's assume the default of isAdmin is false
	// console.log(req); // 'alice123'
});

module.exports = router;
