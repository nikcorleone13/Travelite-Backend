const Destination = require("../models/Destination");

const createTravelDestination = async (destinationObj) => {
  try {
    const newTravelDestination = new Destination({
      name: destinationObj.name,
      location: destinationObj.location,
      description: destinationObj.description,
      rating: destinationObj.rating,
      reviews: destinationObj.reviews,
    });

    const savedDestination = await newTravelDestination.save();
    return savedDestination;
  } catch (error) {
    throw error;
  }
};

const readTravelDestination = async (destinationName) => {
  try {
    const destinationResult = await Destination.find({ name: destinationName });
    return destinationResult;
  } catch (error) {
    throw error;
  }
};

const readAllTravelDestinations = async () => {
  try {
    const allDestinations = await Destination.find({});
    console.log(allDestinations);
    return allDestinations;
  } catch (error) {
    throw error;
  }
};

const readTravelDestinationsByLocation = async (locationName) => {
  try {
    const locationDestinations = await Destination.find({
      location: { $regex: locationName },
    });
    console.log(locationDestinations);
    return locationDestinations;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const readTravelDestinationsByRating = async () => {
  console.log("DESC");
  try {
    const filteredDestinations = await Destination.find({}).sort({ rating: '-1' });
    return filteredDestinations;
  } catch (error) {
    console.error(error);
  }
};

const updateTravelDestination = async (destId, destObj) => {
  try {
    const updatedDestination = await Destination.findByIdAndUpdate(
      destId,
      destObj,
      {
        new: true,
      }
    );
    return updatedDestination;
  } catch (error) {
    console.error(error);
  }
};

const deleteTravelDestination = async (deleteId) => {
  try {
    const deletedObj = await Destination.findByIdAndDelete(deleteId);
    console.log("Deleted", deletedObj);
    return deletedObj;
  } catch (error) {
    throw error;
  }
};

const filterDestinationsByRating = async (ratingValue) => {
  try {
    const filteredDestinations = await Destination.find({
      rating: { $gte: ratingValue },
    }).sort({ rating: 1 });
    return filteredDestinations;
  } catch (error) {
    throw error;
  }
};

const addReviewToDestination = async (destId, reviewObj) => {
  try {
    const addedReviewDestination = await Destination.updateOne(
      { _id: destId },
      { $push: { reviews: reviewObj } }
    );
    console.log(addReviewToDestination);
    return addedReviewDestination;
  } catch (error) {
    throw error;
  }
};

const destinationReviews = async (destId) => {
  try {
    const allReviewsFilter = await Destination.findOne(
      { _id: destId },
      "reviews"
    );
    const allReviews = allReviewsFilter.reviews;
    console.log("Reviews", allReviews);
    return allReviews;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createTravelDestination,
  readTravelDestination,
  readAllTravelDestinations,
  readTravelDestinationsByLocation,
  readTravelDestinationsByRating,
  updateTravelDestination,
  deleteTravelDestination,
  filterDestinationsByRating,
  addReviewToDestination,
  destinationReviews,
};
