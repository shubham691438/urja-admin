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
        width: "100vw",
      }}
    >
      <Link to="/">
        <input
          type="button"
          value="Matches"
          style={{
            minWidth: "33vw",
            maxWidth: "150px",
            height: "50px",

            fontSize: "30px",
          }}
        ></input>
      </Link>
      {/* <Link to="/points">
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
      </Link> */}
      <Link to="/results">
        <input
          type="button"
          value="Results"
          style={{
            minWidth: "33vw",
            maxWidth: "150px",
            height: "50px",

            fontSize: "30px",
          }}
        ></input>
      </Link>
      <Link to="/winners">
        <input
          type="button"
          value="Winners"
          style={{
            maxWidth: "150px",
            minWidth: "33vw",

            height: "50px",

            fontSize: "30px",
          }}
        ></input>
      </Link>
    </div>
  );
};
