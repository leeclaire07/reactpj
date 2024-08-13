import React, { useState } from "react";
import "./App.css";
const App = () => {
  const [countries, setCountries] = useState([]);

  const [country, setCountry] = useState("");
  const [goldMedal, setgoldMedal] = useState(0);
  const [silverMedal, setsilverMedal] = useState(0);
  const [bronzeMedal, setbronzeMedal] = useState(0);
  const addEventHandler = (e) => {
    e.preventDefault();
    console.log("추가 눌렀어!");

    setCountries([...countries, { country, goldMedal, silverMedal }]);
  };
  const updataEventHandler = (e) => {
    e.preventDefault();

    console.log("업데이트 클릭됨");
    setCountries(
      countries.map((item) => {
        console.log(item);
        if (item.country == country) {
          return {
            ...item,
            goldMedal,
            silverMedal,
            bronzeMedal,
          };
        }
      })
    );
  };

  const deleteEventHandler = (deletecountry) => {};

  return (
    <>
      <div className="main">
        <h1>2024 파리 올림픽</h1>
        <from className="main-container">
          <div className="input-field">
            <label> 국가명</label>
            <input
              type="text"
              className=""
              onChange={(e) => {
                setCountry(e.target.value);
              }}
            />

            <input type="text" />
          </div>
          <div className="input-field">
            <label>금메달</label>
            <input type="number" />
          </div>
          <div className="input-field">
            <label> 은메달 </label>
            <input type="number" />
          </div>
          <div className="input-field">
            <label>동메달</label>
            <input type="number" />
          </div>
          <button id="addButton" onClick={addEventHandler}>
            국가 추가
          </button>
          <button>업데이트</button>
        </from>
      </div>
    </>
  );
};

export default App;
