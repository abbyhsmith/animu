import React, { useState } from 'react'
import './styles.scss'

const Input = () => {
	const [title, setTitle] = useState('')
	const [episodes, setEpisodes] = useState('')
	const [status, setStatus] = useState('Watching')

	const addNewAnime = (e) => {
		e.preventDefault()
		if(title && episodes) {
			fetch('/api/add-anime', {
				method: 'POST',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({anime: title, episodes: episodes, status: status})
			})
		}
		setTitle('')
		setEpisodes('')
		setStatus('Watching')
	}

	return (
		<div className="inputNew">
			<form className="inputForm" onSubmit={(e) => addNewAnime(e)}>
				<div className="inputLabels">
					<label className="animeTitleLabel" htmlFor="animeTitle">Title:</label>
					<label className="episodesLabel" htmlFor="episodesWatched">Episodes:</label>
					<label className="statusLabel" htmlFor="statusSelect">Status:</label>
				</div>
				<div className="inputBoxes">
					<input type="text" className="animeTitle" id="animeTitle" name="title" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
					<input type="number" className="episodesWatched" id="episodesWatched" name="episodes" value={episodes} onChange={(e) => setEpisodes(e.target.value)} required />
					<select name="status" className="statusSelect" id="statusSelect" value={status} onChange={(e) => setStatus(e.target.value)} >
						<option value="Watching">Watching</option>
						<option value="Completed">Completed</option>
						<option value="Dropped">Dropped</option>
					</select>
					<button className="submitButton" type="submit">+</button>
				</div>
			</form>
		</div>
	)
}

export default Input
