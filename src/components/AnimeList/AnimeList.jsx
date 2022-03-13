import React, { useState } from 'react'
import UpdateAnime from '../UpdateAnime/UpdateAnime.jsx'
import './styles.scss'

const AnimeList = ({listItems, watchStatus, fetchAnimeList}) => {
	const [updatedTitle, setUpdatedTitle] = useState('')
	const [updatedEpisodes, setUpdatedEpisodes] = useState('')
	const [updatedStatus, setUpdatedStatus] = useState('')
	const [animeId, setAnimeId] = useState(0)
	const [showUpdateAnime, setShowUpdateAnime] = useState('hide')
	
	const showUpdateModal = (item) => {
		setUpdatedTitle(item.anime)
		setUpdatedEpisodes(item.episodes)
		setUpdatedStatus(item.status)
		setAnimeId(item._id)
		setShowUpdateAnime('show')
	}

	return (
		<React.Fragment>
			<div className="animeDiv">
				<h2>{watchStatus}</h2>
				<div className="animeListDiv">
					<div className="animeListGridBoxes">
						{listItems &&
							listItems
								.filter(item => item.status === watchStatus)
								.sort((a, b) => {
									if(a.anime.toLowerCase() > b.anime.toLowerCase()) {
										return 1
									}
									if(b.anime.toLowerCase() > a.anime.toLowerCase()) {
										return -1
									} else {
										return 0
									}
								})
								.map((item, i) => {
									return (
										<div className="singleAnimeInfo" key={`animu-${i}`} onClick={() => showUpdateModal(item)}>
											<div className="boxInfo boxInfoTitle">
												{item.anime}
											</div>
											<div className="boxInfo">
												Episodes: {item.episodes}
											</div>
											<div className="boxInfo">
												{item.status}
											</div>
										</div>
									)
								})
						}
					</div>
				</div>
			</div>
			{showUpdateAnime === 'show' && <UpdateAnime fetchAnimeList={fetchAnimeList} setShowUpdateAnime={setShowUpdateAnime} setUpdatedTitle={setUpdatedTitle} setUpdatedEpisodes={setUpdatedEpisodes} setUpdatedStatus={setUpdatedStatus} updatedTitle={updatedTitle} updatedEpisodes={updatedEpisodes} updatedStatus={updatedStatus} animeId={animeId} />}
		</React.Fragment>
	)
}

export default AnimeList
