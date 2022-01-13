import React from "react";
import "../App.css";

const Loader = () => {
  return (
    <div className="App">
      <header className="App-header">
        <div class="spinner-border text-primary" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </header>
    </div>
  );
};

export default Loader;
