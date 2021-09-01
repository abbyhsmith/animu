import React from 'react'
import './styles.scss'

const AnimeList = ({listItems, watchStatus}) => {
	return (
		<div className="tableDiv">
			<h2>{watchStatus}</h2>
			<table className="animeListTable">
				<thead>
					<tr>
						<td className="animeListTitleColumn">
							Title:
						</td>
						<td className="animeListEpisodesColumn">
							Episodes:
						</td>
						<td className="animeListStatusColumn">
							Status:
						</td>
					</tr>
				</thead>
				<tbody>
					{listItems &&
						listItems
							.filter(item => item.status === watchStatus)
							.sort((a, b) => {
								if(a.anime > b.anime) {
									return 1
								}
								if(b.anime > a.anime) {
									return -1
								} else {
									return 0
								}
							})
							.map((item, i) => {
								return (
									<tr className="tableRow" key={`animu-${i}`}>
										<td className="titleCell">
											{item.anime}
										</td>
										<td className="episodesCell">
											{item.episodes}
										</td>
										<td className="statusCell">
											{item.status}
										</td>
									</tr>
								)
							})
					}
				</tbody>
			</table>
		</div>
	)
}

export default AnimeList
