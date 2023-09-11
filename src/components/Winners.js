import React, { useState } from "react";
import { Navbar } from "./Navbar";

const sports = [
  "cricket",
  "basketball",
  "lawn tennis",
  "table tennis",
  "football",
  "volleyball",
  "badminton",
  "athletics",
  "chess",
];

export const Winners = () => {
  const [branch, setBranch] = useState("");
  const [sport, setSport] = useState("cricket");
  const [gender, setGender] = useState("");
  const [position, setPosition] = useState(1);

  async function handleSubmit() {
    console.log(branch, sport, gender, position);
    if (!sport || !branch || !gender || !position) {
      alert("please fill all the values");
      return;
    }
    let data = await fetch("/api/winners/add-winner", {
      method: "post",
      body: JSON.stringify({ branch, sport, gender, position }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    data = await data.json();
    if (data.msg) alert("data added successfully");
    else alert("could not add data");

    setBranch("");
    setSport("");
    setGender("");
    setPosition(1);
  }

  return (
    <div>
      <Navbar></Navbar>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <h2>Winners</h2>
        <div>
          <label for="branch">Enter Branch</label>
          <input
            type="text"
            value={branch}
            onChange={(e) => setBranch(e.target.value)}
          ></input>
        </div>
        <br></br>

        <div>
          <label for="sport">Enter sport</label>
          <select
            name="sport"
            id="sport"
            onChange={(e) => setSport(e.target.value)}
            style={{ width: "200px" }}
          >
            {sports.map((item) => (
              <option value={item}>{item}</option>
            ))}
          </select>
        </div>
        <br></br>
        <div>
          <label for="gender">select gender</label>

          <input
            type="radio"
            value="male"
            name="gender"
            id="male"
            onChange={(e) => setGender(e.target.value)}
          ></input>
          <label for="male">Male</label>
          <input
            type="radio"
            value="female"
            name="gender"
            id="female"
            onChange={(e) => setGender(e.target.value)}
          ></input>
          <label for="female">Female</label>
        </div>
        <br></br>
        <div>
          <label for="position">Enter position</label>
          <select
            name="position"
            id="position"
            style={{ width: "100px" }}
            onChange={(e) => setPosition(e.target.value)}
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
          </select>
        </div>
        <br></br>
        <input type="button" onClick={handleSubmit} value="submit"></input>
        <br></br>
      </div>
    </div>
  );
};
