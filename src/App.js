import { useState, useEffect } from 'react'
import PageTitle from './components/PageTitle/PageTitle.jsx'
import NewAnimeInput from './components/NewAnimeInput/NewAnimeInput.jsx'
import AnimeList from './components/AnimeList/AnimeList.jsx'

function App() {
	const [listItems, setListItems] = useState([])
	const [title, setTitle] = useState('')
	const [episodes, setEpisodes] = useState('')
	const [status, setStatus] = useState('Watching')

	const fetchAnimeList = () => {
		fetch('/api/get-anime', {
			method: 'GET'
		})
			.then((response) => response.json())
			.then((data) => {
				setListItems(data)
			})
	}

	useEffect(() => {
		fetchAnimeList()
	}, [])

	return (
		<div className="App">
			<PageTitle />
			<NewAnimeInput title={title} setTitle={setTitle} episodes={episodes} setEpisodes={setEpisodes} status={status} setStatus={setStatus} fetchAnimeList={fetchAnimeList} />
			<AnimeList listItems={listItems} watchStatus="Watching" fetchAnimeList={fetchAnimeList} />
			<AnimeList listItems={listItems} watchStatus="Completed" fetchAnimeList={fetchAnimeList} />
		</div>
	);
}

export default App;
