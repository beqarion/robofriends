import React from 'react'

const SearchBox = ({ searchChange }) => {
    return (
        <input type='text' placeholder='search robots' onChange={searchChange}/>
    )
}

export default SearchBox