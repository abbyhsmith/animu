import { useState, useEffect } from 'react'
import PageTitle from './components/PageTitle/PageTitle.jsx'
import NewAnimeInput from './components/NewAnimeInput/NewAnimeInput.jsx'
import AnimeList from './components/AnimeList/AnimeList.jsx'

function App() {
	const [listItems, setListItems] = useState([])

	useEffect(() => {
		fetch('/api/get-anime', {
			method: 'GET'
		})
			.then((response) => response.json())
			.then((data) => {
				setListItems(data)
			})
	}, [])

	return (
		<div className="App">
			<PageTitle />
			<NewAnimeInput />
			<AnimeList listItems={listItems} watchStatus="Watching" />
			<AnimeList listItems={listItems} watchStatus="Completed" />
		</div>
	);
}

export default App;
