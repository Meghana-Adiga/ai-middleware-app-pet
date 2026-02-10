/*
Handle Search filters and sorting
@author: Meghana Adiga
*/

import React, { useEffect, useState } from "react";

function SearchSort({ 
    searchTerm,
    sortField,
    sortOrder,
    onSearchChange, 
    onSortFieldChange,
    onSortOrderChange,
 }) {
    const [localSearch, setLocalSearch] = useState(searchTerm);

    useEffect(() => {
        const handler = setTimeout(() => {
            onSearchChange(localSearch);
        }, 300);
        return () => clearTimeout(handler);
    }, [localSearch, onSearchChange]);

    useEffect(() => {
        setLocalSearch(searchTerm);
    }, [searchTerm]);

    return (
        <div style={{ marginBottom: 20 }}>
            <input
                type="text"
                placeholder="Search by title or content ..."
                value={localSearch}
                onChange={(e) => setLocalSearch(e.target.value)}
                style={{ marginBottom: 12, width: "50%" }} />

            <select 
                value={sortField}
                onChange={(e) => onSortFieldChange(e.target.value)}>
                <option value="title">Sort by Title</option>
                <option value="content">Sort by Content</option>
            </select>

            <select 
                value={sortOrder}
                onChange={(e) => onSortOrderChange(e.target.value)}>
                <option value="asc">Sort A-Z</option>
                <option value="desc">Sort Z-A</option>
            </select>
        </div>
    );
}

export default React.memo(SearchSort);