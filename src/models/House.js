const { Schema, model } = require('mongoose');

const HouseSchema = new Schema({
	currentLord: {
		type: Schema.Types.ObjectId,
		ref: 'Character',
    required: false,
	},  
  name: {
		type: String,
		required: true,
	},
  region: {
		type: String,
		required: true,    
  },
  founded: {
    type: Number,
    required: true, 
  },
}, {
    timestamps: true,
})

module.exports = model('House', HouseSchema);
