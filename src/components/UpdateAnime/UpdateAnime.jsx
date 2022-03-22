import React from 'react'
import FlowerSvg from '../svgs/Flower.jsx'

import './styles.scss'

const UpdateAnime = ({fetchAnimeList, setShowUpdateAnime, updatedTitle, updatedEpisodes, updatedStatus, setUpdatedTitle, setUpdatedEpisodes, setUpdatedStatus, animeId}) => {
	const updateAnime = (e) => {
		e.preventDefault()
		fetch('/api/update-anime', {
			method: 'PUT',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({id: animeId, anime: updatedTitle, episodes: updatedEpisodes, status: updatedStatus})
		})
		.then(() => {
			setUpdatedTitle('')
			setUpdatedEpisodes('')
			setUpdatedStatus('Watching')
			setShowUpdateAnime('hide')
			fetchAnimeList()})
	}

	const deleteAnime = (e) => {
		e.preventDefault()
		fetch('/api/delete-anime', {
			method: 'DELETE',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({id: animeId})
	})
		.then(() => {
			setUpdatedTitle('')
			setUpdatedEpisodes('')
			setUpdatedStatus('Watching')
			setShowUpdateAnime('hide')
			fetchAnimeList()
		})
	}

	return (
		<div className="modal" onClick={() => setShowUpdateAnime('hide')}>
			<div className="modalContent" onClick={e => e.stopPropagation()}>
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
							<button className="submitButton" type="submit"><FlowerSvg /></button>
						</div>
					</form>
					<div className="deleteAnime">
						<button type="button" className="deleteButton" onClick={(e) => deleteAnime(e)}>Delete</button>
					</div>
				</div>
			</div>
	)
}

export default UpdateAnime
