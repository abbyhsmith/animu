import React, { useState } from 'react'

const UpdateAnime = () => {
	const [updatedTitle, setUpdatedTitle] = useState('')
	const [updatedEpisodes, setUpdatedEpisodes] = useState('')
	const [updatedStatus, setUpdatedStatus] = useState('')

	const updateAnime = (e) => {
		e.preventDefault()
		fetch('/api/update-anime', {
			method: 'PUT',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({anime: updatedTitle, episodes: updatedEpisodes, status: updatedStatus})
		})
		setUpdatedTitle('')
		setUpdatedEpisodes('')
		setUpdatedStatus('Watching')
	}

	return (
		<form className="inputForm" onSubmit={(e) => updateAnime(e)}>
				<div className="inputLabels">
					<label className="animeTitleLabel" htmlFor="animeTitle">Title:</label>
					<label className="episodesLabel" htmlFor="episodesWatched">Episodes:</label>
					<label className="statusLabel" htmlFor="statusSelect">Status:</label>
				</div>
				<div className="inputBoxes">
					<input type="text" className="animeTitle" id="animeTitle" name="title" placeholder="Title" value={updatedTitle} onChange={(e) => setUpdatedTitle(e.target.value)} required />
					<input type="number" className="episodesWatched" id="episodesWatched" name="episodes" value={updatedEpisodes} onChange={(e) => setUpdatedEpisodes(e.target.value)} required />
					<select name="status" className="statusSelect" id="statusSelect" value={updatedStatus} onChange={(e) => setUpdatedStatus(e.target.value)} >
						<option value="Watching">Watching</option>
						<option value="Completed">Completed</option>
						<option value="Dropped">Dropped</option>
					</select>
					<button className="submitButton" type="submit">Save</button>
				</div>
			</form>
	)
}

export default UpdateAnime
