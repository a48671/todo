import React from 'react';

import "./search-panel.css"

import ItemStatusFilter from "../item-status-filter";

const SearchPanel = ({changeTerm, filter, changeFilter}) => {
    return (
        <div className="search-panel">
            <input placeholder='search' className="form-control" onChange={changeTerm}/>
            <ItemStatusFilter filter={filter} changeFilter={changeFilter}/>
        </div>
    );
};

export default SearchPanel;