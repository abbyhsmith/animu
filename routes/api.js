const express = require('express')
const router = express.Router()
const Anime = require('../models/anime.js')

router.get('/get-anime', (req, res, next) => {
	Anime.find()
		.then(data => res.json(data))
		.catch(next)
})

router.post('/add-anime', (req, res, next) => {
	if(req.body) {
		Anime.create({anime: req.body.anime, episodes: req.body.episodes, status: req.body.status})
			.then(data => res.json(data))
			.catch(next)
	} else {
		res.json({
			error: 'Enter valid input'
		})
	}
})

router.delete('/delete-anime', (req, res, next) => {
	Anime.findOneAndDelete({_id: req.body.id})
		.then(data => res.json(data))
		.catch(next)
})

router.put('/update-anime', (req, res, next) => {
	Anime.findOneAndUpdate({_id: req.body.id}, {anime: req.body.anime, episodes: req.body.episodes, status: req.body.status})
		.then(data => res.json(data))
		.catch(next)
})

module.exports = router
