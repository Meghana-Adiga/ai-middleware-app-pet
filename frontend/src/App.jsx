import './App.css';

import React from "react";
import PromptForm from './components/prompt/PromptForm';
import InsightsContainer from './components/results/InsightsContainer';

export default function App() {

  return (
    <div style={{ padding: 20, maxWidth: 900, margin: "0 auto" }}>
      <h1>AI Prompt Middleware UI</h1>

      <div
        style={{
          border: "1px solid #ddd",
          borderRadius: 8,
          padding: 20,
          marginBottom: 30,
          background: "#fafafa"
        }}>
          <h2>Prompt Search</h2>
          <PromptForm />
      </div>

      <div
        style={{
          border: "1px solid #ddd",
          borderRadius: 8,
          padding: 20,
          marginBottom: 30,
          background: "#fff"
        }}>
          <h2>Results</h2>
          <InsightsContainer />
      </div>
    </div>
  );
}