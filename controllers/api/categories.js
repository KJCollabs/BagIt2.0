const router = require("express").Router();
var db = require("../../models");

router.get("/all", function (req, res) {
	// replace old function with sequelize function
	db.Category.findAll({})
		// TODO use promise method to pass the userlist...
		.then(function (dbcategory) {
			// into the main index, updating the page

			var dbcategory = {
				categories: dbcategory,
			};
			return res.json(dbcategory);
		});
});

module.exports = router;
