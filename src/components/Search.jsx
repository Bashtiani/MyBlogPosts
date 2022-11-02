import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import React from "react";
import "../css/navbar.scss";

function SearchInput() {
  return (
    <div style={{ display: "flex" }}>
      <MagnifyingGlassIcon className="icon" />
      <input className="input" placeholder="Search..." />
    </div>
  );
}

export default SearchInput;
