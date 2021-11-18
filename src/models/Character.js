const { Schema, model } = require('mongoose');

const CharacterSchema = new Schema({
  name: {
		type: String,
		required: true,
	},
	seasons: [{
		type: String,
		required: true,
	}],  

}, {
    timestamps: true,
})

module.exports = model('Character', CharacterSchema);
