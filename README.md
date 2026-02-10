# AI Prompt Middleware

------------------------------------------------------------------------

## Project

AI-powered prompt middleware with backend and UI.

------------------------------------------------------------------------

## Description

A full-stack application that:

-   Accepts a user prompt and target language\
-   Returns paginated (dummy) AI insights\
-   Supports insight search and sorting\
-   Sort by title or content\
-   Sort in ascending (A--Z) or descending (Z--A) order\
-   Search by title or content\
-   Displays structured error messages

------------------------------------------------------------------------

## Technology Stack Used

### Backend

-   Python\
-   FastAPI\
-   Uvicorn\
-   Pydantic

### Frontend

-   ReactJS\
-   Redux Toolkit\
-   Zod\
-   RTK Query\
-   React Hook Form

------------------------------------------------------------------------

## Project Structure

    ai-prompt-middleware
    │
    ├── backend
    │   ├── requirements.txt
    │   └── app
    │       ├── main.py              (API logic)
    │       ├── data.py              (dummy data layer)
    │       ├── models.py            (request and response models)
    │       └── helpers.py           (utilities and helper methods)
    │
    └── frontend
        ├── package.json
        └── src
            ├── app
            │   ├── apiSlice.js
            │   ├── requestSlice.js
            │   └── store.js         (Redux stores)
            │
            ├── components
            │   ├── prompt
            │   │   ├── schema.js
            │   │   └── PromptForm.jsx   (UI and validation for form)
            │   │
            │   └── results
            │       ├── InsightsContainer.jsx
            │       ├── InsightsList.jsx
            │       ├── Pagination.jsx
            │       └── SearchSort.jsx   (handling insights results)
            │
            ├── App.jsx
            └── index.js

------------------------------------------------------------------------

## Setup Instructions

### Pre-requisites

-   Python installed\
-   Node.js installed

------------------------------------------------------------------------

### Backend Setup

Navigate to backend directory:

``` bash
cd ai-prompt-middleware/backend
```

Create a virtual environment:

``` bash
python3 -m venv venv
```

Activate the virtual environment:

``` bash
source venv/bin/activate
```

Install dependencies:

``` bash
pip install -r requirements.txt
```

Run backend server:

``` bash
uvicorn app.main:app --reload
```

Backend runs at:

    http://localhost:8000

Swagger documentation:

    http://localhost:8000/docs

------------------------------------------------------------------------

### Frontend Setup

Navigate to frontend directory:

``` bash
cd ai-prompt-middleware/frontend
```

Install dependencies:

``` bash
npm install
```

Run frontend server:

``` bash
npm start
```

Frontend runs at:

    http://localhost:3000

------------------------------------------------------------------------

## How to Use the Application

1.  Open `http://localhost:3000` in your browser.\
2.  In the **Prompt Search** section:
    -   Enter a prompt\
    -   Choose target language from dropdown\
    -   Click **Submit**\
3.  View results in the **Results** section.\
4.  Use:
    -   Page navigation controls at the bottom\
    -   Search by title or content\
    -   Sort by title or content\
    -   Sort in ascending (A--Z) or descending (Z--A) order

------------------------------------------------------------------------

## Future Enhancements

-   User authentication layer for authorized access\
-   Context-based conversation handling:
    -   `contextId` tracks conversation history\
    -   History is passed to AI service\
    -   Enables multi-turn conversational support
