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
          value="Results"
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
      <Link to="/home-medal-table">
        <input
          type="button"
          value="Home Medal Table"
          style={{
            minWidth: "33vw",
            maxWidth: "150px",
            height: "50px",

            fontSize: "30px",
          }}
        ></input>
      </Link>
      <Link to="/upcomming-match">
        <input
          type="button"
          value="upcommingMatch"
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
