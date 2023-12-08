import React, { useState } from "react";
const App = () => {
  const [light, setLight] = useState(false);
  return (
    <div
      className={`${
        light ? "bg-[#abab9b]" : "bg-[#2ea3ae]"
      } min-h-screen w-full ${
        light ? "text-black" : "text-white"
      } relative  overflow-hidden`}
      style={{
        height: "100%",
      }}
    >
      <nav>
        <img
          src={`${light ? "./menu_dark.png" : "./menu.png"}`}
          className="menu-img"
        />

        <div className="text-7xl font-bold pl-4">WE_</div>
        <div className="text-green-700 text-7xl font-bold">TRIED</div>
        <ul lc>
          <li>
            <a href="">Latest</a>
          </li>
          <li>
            <a href="">Modern</a>
          </li>
          <li>
            <a href="">Contemporary</a>
          </li>
          <li>
            <a href="">Affordable</a>
          </li>
        </ul>
      </nav>
      <div className="lamp-container">
        <img src="./lamp.png" alt="" />

        <button
          className="border-none bg-none"
          onClick={(e) => {
            setLight((e) => !e);
          }}
        >
          <img src="./head.png" className="lamp" />
        </button>

        <img
          src="./light.png"
          className="light"
          style={{
            opacity: light ? 0 : 1,
            minWidth: "600px",
            maxHeight: "330px",
          }}
        />
      </div>
      <div className="text-container">
        <h1>
          Latest
          <br />
          in lighting
        </h1>
        <p>
          Being lazy is being modern, we present our first lamp from our company
          which can work remotely so you don't have to get up.&nbsp;Be
          Lazy.&nbsp;Be Smart.
        </p>
        <a href="#">Check all collections</a>
      </div>
    </div>
  );
};

export default App;
