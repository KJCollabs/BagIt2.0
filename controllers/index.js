const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

// API Routes
router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
router.use(function (req, res) {
	// TODO console.log(req.url, req.originalUrl);
	//didn't find a valid route. sending home for new product
	// if (process.env.NODE_ENV === "production") {
	res.sendFile(path.join(__dirname, "../client/build/index.html"));
	// }
});
module.exports = router;
