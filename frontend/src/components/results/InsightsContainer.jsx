/*
Handles display and memoization
@author: Meghana Adiga
*/

import React, { useMemo, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import SearchSort from "./SearchSort";
import Pagination from "./Pagination";
import InsightsList from "./InsightsList";
import { useGetInsightsQuery } from "../../app/appSlice";
import { setPage } from "../../app/requestSlice";

export default function InsightsContainer() {
    const dispatch = useDispatch();

    const { prompt, targetLanguage, page } = useSelector(
        (state) => state.request
    );

    const [searchTerm, setSearchTerm] = useState("");
    const [sortOrder, setSortOrder] = useState("asc");
    const [sortField, setSortField] = useState("title");

    useEffect(() => {
        setSearchTerm("")
        setSortOrder("asc")
        setSortField("title")
    }, [prompt, targetLanguage]);

    const { data, error, isLoading } = useGetInsightsQuery(
        { prompt, targetLanguage, page },
        { skip: !prompt || !targetLanguage }
    );

    const filteredAndSorted = useMemo(() => {
        if (!data || data.status !== "SUCCESS") {
            return [];
        }
        let filtered = data.data;

        if (searchTerm.trim()) {
            const lowerSearch = searchTerm.toLowerCase();
            filtered = filtered.filter(
                (item) => 
                    item.title.toLowerCase().includes(lowerSearch) ||
                    item.content.toLowerCase().includes(lowerSearch)
            );
        }
        
        const sorted = [...filtered].sort((a,b) => {
            const valueA = a[sortField]?.toLowerCase() || "";
            const valueB = b[sortField]?.toLowerCase() || "";

            if (sortOrder === "asc") {
                return valueA.localeCompare(valueB);
            } else {
                return valueB.localeCompare(valueA);
            }
        });

        return sorted;
    }, [data, searchTerm, sortField, sortOrder]);

    if (!prompt) return null;
            
    if (isLoading) return <p>Loading ...</p>;

    if (error) {
        return (
            <pre style={{ color: "red", padding: 12, borderRadius: 4, overflowX: "auto" }}>
                {JSON.stringify(error, null, 2)}
            </pre>
        );
    }

    if (!data) return null;

    if (data.status === "NEEDS_CLARIFICATION") {
        return <p>{data.message}</p>
    }

    return (
        <div>
            <div 
            style={{ marginBottom: 20, padding: 12, borderRadius: 6, background: "#f7f7f7", border: "1px solid #e5e5e5"}}>
            <SearchSort 
                searchTerm={searchTerm}
                sortField={sortField}
                sortOrder={sortOrder}
                onSearchChange={setSearchTerm}
                onSortFieldChange={setSortField}
                onSortOrderChange={setSortOrder} />
            </div>
            
            <InsightsList items={filteredAndSorted} />

            <Pagination
                currentPage={page}
                total={data.pagination.total}
                pageSize={data.pagination.pageSize}
                onPageChange={(newPage) =>
                    dispatch(setPage(newPage))
                } />
        </div>
    );
}
