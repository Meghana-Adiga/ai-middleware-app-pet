/*
Store for API response
@author: Meghana Adiga
*/

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:8000"}),
    endpoints: (builder) => ({
        getInsights: builder.query({
            query: ({ prompt, targetLanguage, page = 1 }) => ({
                url: `/api/ai_prompt?page=${page}`,
                method: "POST",
                body: { prompt, targetLanguage },
            }),
            keepUnusedDataFor: 90,
            refetchOnMountOrArgChange: true,
        }),
    }),
});

export const { useGetInsightsQuery } = apiSlice;