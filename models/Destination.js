const mongoose = require("mongoose");

const destinationSchema = new mongoose.Schema({
    name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  reviews: [
    {
      userId: {
        type: String,
      },
      reviewText: {
        type: String,
      },
    },
  ],
});

const Destination = mongoose.model("Destination", destinationSchema);
module.exports = Destination;
