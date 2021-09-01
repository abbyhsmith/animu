const mongoose = require('mongoose')
const Schema = mongoose.Schema

const AnimeSchema = new Schema({
	anime: {
		type: String,
		required: true
	},
	status: {
		type: String,
		required: true
	},
	episodes: {
		type: Number,
		required: true
	}
})

const Anime = mongoose.model('anime', AnimeSchema)

module.exports = Anime
