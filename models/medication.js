const mongoose = require('mongoose');

const medSchema = new mongoose.Schema({
    name: { type: String, required: true },
    rxcui: { type: Number, required: false },
    contraAll: { type: String, required: false }
})

const Medication = mongoose.model('Medication', medSchema);

module.exports = Medication;
