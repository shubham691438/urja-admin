import React, { useState } from "react";
import { Navbar } from "./Navbar";

export const Results = () => {
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
    let data = await fetch("http://localhost:5000/medals/update-medal-table", {
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
        <div>
          <label for="branch" style={{ margin: "5px" }}>
            Branch :
          </label>
          <input
            type="text"
            id="branch"
            name="branch"
            value={branch}
            required={true}
            onChange={(e) => setBranch(e.target.value)}
          ></input>
        </div>

        {/* <div>
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
        </div> */}
        {/* <br></br> */}
        {/* <div>
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
      </div>*/}
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
