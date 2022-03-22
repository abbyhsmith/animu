import React from 'react'

import './styles.scss'

const SearchBar = ({setSearchTerm, searchTerm}) => {
    return (
        <input type="text" placeholder='Filter animu' className="searchTerm" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}></input>
    )
}

export default SearchBar