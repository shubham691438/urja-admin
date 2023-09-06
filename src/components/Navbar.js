import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div
      style={{
        position: "sticky",
        top: 0,
        backgroundColor: "grey",
        height: "50px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Link to="/">
        <input
          type="button"
          value="Matches"
          style={{
            width: "150px",
            height: "50px",
            margin: "10px",
            fontSize: "30px",
          }}
        ></input>
      </Link>
      <Link to="/points">
        <input
          type="button"
          value="Points"
          style={{
            width: "150px",
            height: "50px",
            margin: "10px",
            fontSize: "30px",
          }}
        ></input>
      </Link>
      <Link to="/results">
        <input
          type="button"
          value="Results"
          style={{
            width: "150px",
            height: "50px",
            margin: "10px",
            fontSize: "30px",
          }}
        ></input>
      </Link>
    </div>
  );
};
