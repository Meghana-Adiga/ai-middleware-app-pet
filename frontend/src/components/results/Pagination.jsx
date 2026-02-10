/*
Handle page navigation
@author: Meghana Adiga
*/

import React from "react";

export default function Pagination({
    currentPage,
    total,
    pageSize,
    onPageChange,
}) {
    const totalPages = Math.ceil(total / pageSize);

    if (totalPages <= 1) return null;

    return (
        <div style={{ marginTop: 20 }}>
            <button
                disabled={currentPage === 1}
                onClick={() => onPageChange(currentPage - 1)}>
                    Prev
            </button>
            <span style={{ margin: "0 10px" }}>
                Page {currentPage} of {totalPages}
            </span>

            <button
                disabled={currentPage === totalPages}
                onClick={() => onPageChange(currentPage + 1)}>
                    Next
            </button> 
        </div>
    );
}