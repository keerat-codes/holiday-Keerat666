const mongoose = require('mongoose');

const locationsSchema = new mongoose.Schema({
city : { type:  String, description: "Required Field", required: true },
});

module.exports = mongoose.model('locations', locationsSchema);