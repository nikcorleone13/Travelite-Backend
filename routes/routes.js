const express = require("express");
const dbMethods = require("../dbMethods/dbMethods");
const controller = require("../controllers/controllers");
const router = express.Router();

router.get("/:name", controller.getTravelDestinationByName);
router.get("/", controller.getAllTravelDestinations);
router.get(
  "/location/:locationName",
  controller.getTravelDestinationsByLocation
);
router.get("/rating/desc", controller.readTravelDestinationsByRating);

router.get("/filter/:minRating", controller.filterDestinationsByRating);

router.get(
  "/:destinationId/reviews",
  controller.getDestinationReviewsWithUserDetails
);
router.post("/", controller.createDestination);
router.post("/update/:destinationId", controller.updateTravelDestination);
router.post("/:destinationId/reviews", controller.addReview);
router.delete("/:destinationId", controller.deleteTravelDestination);

module.exports = router;
