import React from 'react'

const SearchBar = ( {filterBots} ) => {
    return (
        <div>
            <label><strong>Filter by Class:</strong></label>
            <select className="dropdown" onChange={(event) => filterBots(event.target.value)}>
                <option value="All">All</option>
                <option value="Assault">Assault</option>
                <option value="Defender">Defender</option>
                <option value="Support">Support</option>
            </select>
        </div>

    )
}

export default SearchBar