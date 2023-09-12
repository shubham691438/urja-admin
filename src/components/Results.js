import React, { useState } from "react";
import { Navbar } from "./Navbar";

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export const Results = () => {
  const backendUrl = process.env.REACT_APP_BACKEND_URL
  const [branch, setBranch] = useState("");
  let [gold, setGold] = useState(0);
  let [silver, setSilver] = useState(0);
  let [bronze, setBronze] = useState(0);
  let [points, setPoints] = useState(0);

  async function handleSubmit() {
    if (!branch) {
      alert("please fill out all the fields");
      return;
    }
    gold = Number(gold);
    silver = Number(silver);
    bronze = Number(bronze);
    points = Number(points);
    let data = await fetch(backendUrl+"/api/medals/update-medal-table", {
      method: "post",
      body: JSON.stringify({
        branch,
        gold,
        silver,
        bronze,
        points,
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
    setGold(0);
    setSilver(0);
    setBronze(0);
    setPoints(0);
    setBranch("");
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
        {/* <div>
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
      </div>*/}
        <br></br>

        <Box sx={{ width: "300px",  }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Select Branch</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={branch}
                label="branch"
                onChange={(e) => setBranch(e.target.value)}
              >
                <MenuItem value="cse">Computer Science And Engineering</MenuItem>
                <MenuItem value="ece">Electronics and Communication Engineering</MenuItem>
                <MenuItem value="eee">Electrical Engineering</MenuItem>
                <MenuItem value="ce">Civil Engineering</MenuItem>
                <MenuItem value="me">Mechanical Engineering</MenuItem>
                <MenuItem value="mme">Metallurgical and Materials Engineering</MenuItem>
                <MenuItem value="pie-ecm">Production and Industrial Engineering + Engineering and Computational Mechanics</MenuItem>
                <MenuItem value="pg">M. Tech + M.SC + MCA</MenuItem>
              </Select>
          </FormControl>
        </Box>

        <br></br>
        <div>
          <label for="gold" style={{ margin: "5px" }}>
            Gold :
          </label>
          <input
            type="text"
            onChange={(e) => setGold(e.target.value)}
            value={gold}
          ></input>
        </div>
        <br></br>
        <div>
          <label for="silver" style={{ margin: "5px" }}>
            Silver:
          </label>
          <input
            type="text"
            id="silver"
            name="silver"
            value={silver}
            onChange={(e) => setSilver(e.target.value)}
          ></input>
        </div>

        <br></br>
        <div>
          <label for="bronze" style={{ margin: "5px" }}>
            Bronze:
          </label>
          <input
            type="text"
            id="bronze"
            name="bronze"
            value={bronze}
            onChange={(e) => setBronze(e.target.value)}
          ></input>
        </div>
        <br></br>
        <div>
          <label for="points" style={{ margin: "5px" }}>
            Points
          </label>
          <input
            type="text"
            id="points"
            name="points"
            value={points}
            onChange={(e) => setPoints(e.target.value)}
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
