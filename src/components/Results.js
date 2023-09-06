import React, { useState } from "react";
import { Navbar } from "./Navbar";

export const Results = () => {
  const [sport, setSport] = useState("");
  const [branch, setBranch] = useState("");
  const [gender, setGender] = useState("");
  const [medal, setMedal] = useState("");
  const [points, setPoints] = useState("");
  

  async function handleSubmit() {
    if (!sport || !gender || !branch || !medal || !points) {
      alert("please fill out all the fields");
      return;
    }
    const data = await fetch(`${process.env.BACKEND_URL}`, {
      method: "post",
      body: JSON.stringify({
        sport,
        branch,
        gender,
       medal,
        points, 
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    data = await data.json();
    if (data.message == "success") {
      alert("data inserted successfully");
    } else alert("data could not be uploaded");
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
        <h2>Results</h2>
        <div>
          <label for="sport" style={{ margin: "5px" }}>
            sport : 
          </label>
          <input
            type="text"
            id="sport"
            name="sport"
            required={true}
            onChange={(e) => setSport(e.target.value)}
          ></input>
        </div>
        <br></br>
        <div>
        <label for="branch" style={{ margin: "5px" }}>
            Branch : 
          </label>
          <input
            type="text"
            id="branch"
            name="branch"
            required={true}
            onChange={(e) => setBranch(e.target.value)}
          ></input>
        </div>
        <br></br>
        <div>
          <label for="gender" style={{ margin: "5px" }}>
            gender : 
          </label>
          <input
            type="radio"
            value="male"
            name="gender"
            defaultChecked={true}
            onChange={(e) => setGender(e.target.value)}
          ></input>
          <label for="male">Male</label>
          <input
            type="radio"
            value="female"
            name="gender"
            onChange={(e) => setGender(e.target.value)}
          ></input>
          <label for="male">female</label>
        </div>
        <br></br>
        <div>
          <label for="medal" style={{ margin: "5px" }}>
            Medal : 
          </label>
          <input
            type="radio"
            value="gold"
            name="medal"
            defaultChecked={true}
            onChange={(e) => setMedal(e.target.value)}
          ></input>
          <label for="gold">Gold</label>
          <input
            type="radio"
            value="silver"
            name="medal"
            onChange={(e) => setMedal(e.target.value)}
          ></input>
          <label for="silver">Silver</label>
          <input
            type="radio"
            value="bronze"
            name="medal"
            onChange={(e) => setMedal(e.target.value)}
          ></input>
          <label for="bronze">Bronze</label>
        </div>
        <br></br>
        <div>
          <label for="points" style={{ margin: "5px" }}>
            Points Secured : 
          </label>
          <textarea
            type="decomal-number"
            id="score"
            name="score"
            required={true}
            onChange={(e) => setPoints(e.target.value)}
          ></textarea>
        </div>
        
        <br></br>
        <input
          type="button"
          value="submit"
          onClick={(e) => handleSubmit(e)}
        ></input>
      </div>
    </div>
  );
};
