import React from "react";

function SearchBar({ UpdateSearch }) {
    return (
        <div className="searchbox">
            <form className="form-inline">
                <input className="form-control" type="search" placeholder="Search" aria-label="Search" onChange={e => UpdateSearch(e)} />
            </form>
        </div>
    )
}

export default SearchBar;