import React from "react";

function SearchBar({ UpdateSearch }) {
    return (
        <div className="searchbar">
            <form className="form-inline">
                <input className="form-control m-4 w-75 mx-auto" type="search" placeholder="Search" aria-label="Search" onChange={e => UpdateSearch(e)} />
            </form>
        </div>
    )
}

export default SearchBar;