import React from "react"
import "./App.css";

export default function SeachEngine() {

  return (
    <div className="search-engine">
      <form>
        <div className="row">
          <div className="col-6">
            <input
              type="search"
              placeholder="Enter a City..."
              autoFocus="on"
              autoComplete="off"
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="searchButton btn btn-dark btn-outline-light w-100"
            />
          </div>
          <div className="col-2">
            <button className="currentButton btn btn-dark btn-outline-light w-100">
              <i className="fas fa-map-marker"></i>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
