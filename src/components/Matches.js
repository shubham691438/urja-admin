import React, { useState } from "react";
import { Navbar } from "./Navbar";

export const Matches = () => {
  const [sport, setSport] = useState("");
  const [gender, setGender] = useState("male");
  const [title, setTitle] = useState("");
  const [team1, setTeam1] = useState("");
  const [team2, setTeam2] = useState("");
  const [score, setScore] = useState("");
  const [result, setResult] = useState("");

  async function handleSubmit() {
    if (!sport || !gender || !title || !team1 || !team2 || !score || !result) {
      alert("please fill out all the fields");
      return;
    }

    let data = await fetch("http://localhost:5000/matches/add-match-score", {
      method: "post",
      body: JSON.stringify({
        sport,
        gender,
        title,
        team1,
        team2,
        score,
        result,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    data = await data.json();
    //console.log(data);
    if (data.msg) {
      alert("data inserted successfully");
    } else alert("data could not be uploaded");
    setSport("");
    setGender("");
    setTitle("");
    setTeam1("");
    setTeam2("");
    setScore("");
    setResult("");
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
        <h2>Matches</h2>
        <div>
          <label for="sport" style={{ margin: "5px" }}>
            sport :
          </label>
          <input
            type="text"
            id="sport"
            name="sport"
            value={sport}
            required={true}
            onChange={(e) => setSport(e.target.value)}
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
          <label for="female">female</label>
        </div>
        <br></br>
        <div>
          <label for="title" style={{ margin: "5px" }}>
            matchTitle :
          </label>
          <input
            type="text"
            id="title"
            name="title"
            required={true}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></input>
        </div>
        <br></br>
        <div>
          <label for="team1" style={{ margin: "5px" }}>
            team1 :
          </label>
          <input
            type="text"
            id="team1"
            name="team1"
            value={team1}
            required={true}
            onChange={(e) => setTeam1(e.target.value)}
          ></input>
        </div>
        <br></br>
        <div>
          <label for="team2" style={{ margin: "5px" }}>
            team2 :
          </label>
          <input
            type="text"
            id="team2"
            name="team2"
            value={team2}
            required={true}
            onChange={(e) => setTeam2(e.target.value)}
          ></input>
        </div>
        <br></br>

        <div>
          <label for="score" style={{ margin: "5px" }}>
            score :
          </label>
          <textarea
            type="text"
            id="score"
            name="score"
            value={score}
            required={true}
            onChange={(e) => setScore(e.target.value)}
          ></textarea>
        </div>
        <br></br>
        <div>
          <label for="result">Enter the result : </label>
          <input
            type="text"
            id="result"
            name="result"
            required={true}
            value={result}
            onChange={(e) => setResult(e.target.value)}
          ></input>
        </div>
        <br></br>
        <input
          type="button"
          value="submit"
          onClick={(e) => handleSubmit(e)}
        ></input>
        <br></br>
      </div>
    </div>
  );
};
