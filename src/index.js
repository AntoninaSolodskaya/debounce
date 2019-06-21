import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function useDebounce(value, delay) {
  return value;
}

function App() {
  const delay = 2000;
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, delay);

  const handleInputChange = event => setQuery(event.target.value);

  return (
    <div className="App">
      <input type="text" value={query} onChange={handleInputChange} />
      <p>Query: {query}</p>
      <p>Debounced Query: {debouncedQuery}</p>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
