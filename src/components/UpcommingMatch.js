import React, { useState } from "react";
import { Navbar } from "./Navbar";

export const UpcommingMatch = () => {
  const backendUrl = process.env.REACT_APP_BACKEND_URL

  const [sport, setSport] = useState("");
  const [gender, setGender] = useState("male");
  const [matchTitle, setMatchTitle] = useState("");
  const [team1, setTeam1] = useState("");
  const [team2, setTeam2] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");

  async function handleSubmit() {
    if (!sport || !gender || !matchTitle || !team1 || !team2 || !date || !location) {
      alert("please fill out all the fields");
      return;
    }

    let data = await fetch(backendUrl+"/api/matches/add-upcomming-match", {
      method: "post",
      body: JSON.stringify({
        sport,
        gender,
        matchTitle,
        team1,
        team2,
        date,
        time,
        location,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    data = await data.json();
    console.log(data);
    if (data.msg) {
      alert("data inserted successfully");
    } else alert("data could not be uploaded");
    setSport("");
    setGender("");
    setMatchTitle("");
    setTeam1("");
    setTeam2("");
    setDate("");
    setTime("");
    setLocation("");
    
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
        <h2>Upcomming Match</h2>
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
          <label for="matchTitle" style={{ margin: "5px" }}>
            matchTitle :
          </label>
          <input
            type="text"
            id="matchTitle"
            name="matchTitle"
            required={true}
            value={matchTitle}
            onChange={(e) => setMatchTitle(e.target.value)}
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
            <label htmlFor="date">Select a Date:</label>
            <input
                type="date"
                id="date"
                name="date"
                value={date}
                required={true}
                onChange={(e) => setDate(e.target.value)}
            />
        </div>

        <br></br>
        <div>
          <label for="time" style={{ margin: "5px" }}>
            time :
          </label>
          <textarea
            type="text"
            id="time"
            name="time"
            value={time}
            
            onChange={(e) => setTime(e.target.value)}
          ></textarea>
        </div>
        <br></br>
        <div>
          <label for="location">Enter the location : </label>
          <input
            type="text"
            id="location"
            name="location"
            required={true}
            value={location}
            onChange={(e) => setLocation(e.target.value)}
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
