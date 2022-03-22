import React, { useState } from 'react'
import UpdateAnime from '../UpdateAnime/UpdateAnime.jsx'
import SearchBar from '../SearchBar/SearchBar.jsx'
import LazyLoad from 'react-lazyload'

import './styles.scss'

const AnimeList = ({listItems, watchStatus, fetchAnimeList}) => {
	const [updatedTitle, setUpdatedTitle] = useState('')
	const [updatedEpisodes, setUpdatedEpisodes] = useState('')
	const [updatedStatus, setUpdatedStatus] = useState('')
	const [animeId, setAnimeId] = useState(0)
	const [showUpdateAnime, setShowUpdateAnime] = useState('hide')
	const [searchTerm, setSearchTerm] = useState('')
	
	const showUpdateModal = (item) => {
		setUpdatedTitle(item.anime)
		setUpdatedEpisodes(item.episodes)
		setUpdatedStatus(item.status)
		setAnimeId(item._id)
		setShowUpdateAnime('show')
	}

	let filteredListItems = [...listItems]

	if(searchTerm!=='') {
		filteredListItems = listItems.filter((search) => {
			return search.anime.toLowerCase().includes(searchTerm.toLowerCase())
		})
	}

	return (
		<React.Fragment>
			<div className="animeDiv">
				<div className='titleBarDiv'>
					<h2>{watchStatus}</h2>
					{watchStatus==='Completed'&&
						<SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
					}
				</div>
				<div className="animeListDiv">
					<div className="animeListGridBoxes">
						{filteredListItems &&
							filteredListItems
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
										<LazyLoad className="singleAnimeInfoRow">
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
										</LazyLoad>
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
