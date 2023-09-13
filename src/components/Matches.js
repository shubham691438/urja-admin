import React, { useState } from "react";
import { Navbar } from "./Navbar";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export const Matches = () => {
  const backendUrl = process.env.REACT_APP_BACKEND_URL;

  const [sport, setSport] = useState("");
  const [gender, setGender] = useState("male");
  const [title, setTitle] = useState("");
  const [team1, setTeam1] = useState("");
  const [team2, setTeam2] = useState("");
  const [score, setScore] = useState("");
  const [result, setResult] = useState("");

  const [isTeam1Other, setIsTeam1Other] = useState(false); // Track if "Other" is selected in Team 1
  const [isTeam2Other, setIsTeam2Other] = useState(false); // Track if "Other" is selected in Team 2

  async function handleSubmit() {
    if (!sport || !gender || !title || !team1 || !team2 || !score || !result) {
      alert("Please fill out all the fields");
      return;
    }

    let data = await fetch(backendUrl + "/api/matches/add-match-score", {
      method: "post",
      body: JSON.stringify({
        sport,
        gender,
        matchTitle: title, // Use title instead of matchTitle
        team1: isTeam1Other ? team1 : team1, // Use team1 if it's not "Other"
        team2: isTeam2Other ? team2 : team2, // Use team2 if it's not "Other"
        score,
        result,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    data = await data.json();
    if (data.msg) {
      alert("Data inserted successfully");
    } else {
      alert("Data could not be uploaded");
    }
    setSport("");
    setGender("male"); // Reset gender to "male"
    setTitle("");
    setTeam1("");
    setTeam2("");
    setScore("");
    setResult("");
  }

  // Event handler for Team 1 select change
  const handleTeam1Change = (e) => {
    setTeam1(e.target.value);
    // If "Other" is selected, show the text box
    setIsTeam1Other(e.target.value === "other");
  };

  // Event handler for Team 2 select change
  const handleTeam2Change = (e) => {
    setTeam2(e.target.value);
    // If "Other" is selected, show the text box
    setIsTeam2Other(e.target.value === "other");
  };

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
        
        <Box sx={{ width: "300px",  }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Select Sports</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={sport}
                label="sport"
                onChange={(e) => setSport(e.target.value)}
              >
                <MenuItem value="cricket">Cricket</MenuItem>
                <MenuItem value="football">Football</MenuItem>
                <MenuItem value="badminton">Badminton</MenuItem>
                <MenuItem value="hockey">Hockey</MenuItem>
                <MenuItem value="athletic">Athletic</MenuItem>
                <MenuItem value="tableTennis">Table Tennis</MenuItem>
                <MenuItem value="lawnTennis">Lawn Tennis</MenuItem>
                <MenuItem value="chess">Chess</MenuItem>
                <MenuItem value="volleyball">Volleyball</MenuItem>
                <MenuItem value="basketball">Basketball</MenuItem>
                
              </Select>
          </FormControl>
        </Box>

        <br></br>
        <div>
          <label htmlFor="gender" style={{ margin: "5px" }}>
            Gender:
          </label>
          <input
            type="radio"
            value="male"
            name="gender"
            checked={gender === "male"} // Use checked to control radio button state
            onChange={(e) => setGender("male")} // Set gender to "male"
          ></input>
          <label htmlFor="male">Male</label>
          <input
            type="radio"
            value="female"
            name="gender"
            checked={gender === "female"} // Use checked to control radio button state
            onChange={(e) => setGender("female")} // Set gender to "female"
          ></input>
          <label htmlFor="female">Female</label>
        </div>
        <br></br>
        <div>
          <label htmlFor="title" style={{ margin: "5px" }}>
            Match Title:
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

        <Box sx={{ width: "300px" }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Team 1</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={team1}
              label="team1"
              onChange={handleTeam1Change} // Call the handleTeam1Change event handler
            >
              <MenuItem value="cse">Computer Science And Engineering</MenuItem>
              <MenuItem value="ece">Electronics and Communication Engineering</MenuItem>
              <MenuItem value="eee">Electrical Engineering</MenuItem>
              <MenuItem value="ce">Civil Engineering</MenuItem>
              <MenuItem value="me">Mechanical Engineering</MenuItem>
              <MenuItem value="mme">Metallurgical and Materials Engineering</MenuItem>
              <MenuItem value="pie-ecm">Production and Industrial Engineering + Engineering and Computational Mechanics</MenuItem>
              <MenuItem value="pg">M. Tech + M.SC + MCA</MenuItem>
              <MenuItem value="other">Other</MenuItem>
            </Select>
          </FormControl>
        </Box>

        {isTeam1Other && ( // Conditionally render the text box for Team 1 "Other"
          <div>
            <label htmlFor="otherTeam1" style={{ margin: "5px" }}>
              Other Team 1:
            </label>
            <input
              type="text"
              id="otherTeam1"
              name="otherTeam1"
              value={team1}
              required={true}
              onChange={(e) => setTeam1(e.target.value)}
            ></input>
          </div>
        )}

        <br />
        <Box sx={{ width: "300px" }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Team 2</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={team2}
              label="team2"
              onChange={handleTeam2Change} // Call the handleTeam2Change event handler
            >
              <MenuItem value="cse">Computer Science And Engineering</MenuItem>
              <MenuItem value="ece">Electronics and Communication Engineering</MenuItem>
              <MenuItem value="eee">Electrical Engineering</MenuItem>
              <MenuItem value="ce">Civil Engineering</MenuItem>
              <MenuItem value="me">Mechanical Engineering</MenuItem>
              <MenuItem value="mme">Metallurgical and Materials Engineering</MenuItem>
              <MenuItem value="pie-ecm">Production and Industrial Engineering + Engineering and Computational Mechanics</MenuItem>
              <MenuItem value="pg">M. Tech + M.SC + MCA</MenuItem>
              <MenuItem value="other">Other</MenuItem>
            </Select>
          </FormControl>
        </Box>

        {isTeam2Other && ( // Conditionally render the text box for Team 2 "Other"
          <div>
            <label htmlFor="otherTeam2" style={{ margin: "5px" }}>
              Other Team 2:
            </label>
            <input
              type="text"
              id="otherTeam2"
              name="otherTeam2"
              value={team2}
              required={true}
              onChange={(e) => setTeam2(e.target.value)}
            ></input>
          </div>
        )}

        <br></br>

        <div>
          <label htmlFor="score" style={{ margin: "5px" }}>
            Score:
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
          <label htmlFor="result">Result:</label>
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
          value="Submit"
          onClick={(e) => handleSubmit(e)}
        ></input>
        <br></br>
      </div>
    </div>
  );
};
