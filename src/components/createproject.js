import React from "react";
import Header from "./Header";

function createproject() {
  return (
    <div>
      <Header />
      <div className="container mt-5">
        <select
          class="form-select form-select-sm"
          aria-label=".form-select-sm example"
        >
          <option selected>Select project category</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
    </div>
  );
}

export default createproject;
