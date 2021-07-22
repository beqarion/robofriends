import React from 'react'

const SearchBox = ({ onSearchChange }) => {
    return (
        <input type='text' placeholder='search robots' onChange={onSearchChange}/>
    )
}

export default SearchBox