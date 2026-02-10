
import React from "react";

function InsightsList({ items }) {
    if (!items.length) {
        return <p style={{ color: "red" }}>No results found!</p>;
    }

    return (
        <ul style={{ 
            listStyle: "none", 
            padding: 0, margin: 0, 
            display: "flat", 
            flexDirection: "column", 
            gap: 16 }}>
            {items.map((item) => (
                <li 
                    key={item.id} 
                    style={{ 
                        marginBottom: 12,
                        border: "1px solid #e0e0e0",
                        borderRadius: 6,
                        padding: 16,
                        background: "#fdfdfd",
                        boxShadow: "0 1px 3px rgba(0,0,0,0.05)"
                     }}>
                    <strong>{item.title}</strong>
                    <p>{item.content}</p>
                </li>
            ))}
        </ul>
    );
}

export default React.memo(InsightsList);