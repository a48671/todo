import React from 'react';

const buttons = [
    {name: 'all', label: 'All'},
    {name: 'active', label: 'Active'},
    {name: 'done', label: 'Done'},
];

const ItemStatusFilter = ({filter, changeFilter}) => {
    return (
        <div className="btn-group">
            {
                buttons.map(({label, name}) => {
                    const classNames = (name === filter) ? "btn btn-info" : "btn btn-outline-secondary";
                    return (
                        <button
                            key={name}
                            type="button"
                            className={classNames}
                            onClick={() => changeFilter(name)}
                        >
                            {label}
                        </button>
                    );
                })
            }
        </div>
    );
};
export default ItemStatusFilter;