import React, { useState, useRef, Component } from "react";
import "./App.css";
import CodeDesign from "./component/codeDesign";
import Discover from "./component/discover";
import Profile from "./component/profile";
import Planif from "./component/planificAdore";
import Consult from "./component/ConsultAway";
import Bonbo from "./component/bonbo";
import JustEez from "./component/justEez";
import ReactFlix from "./component/reactFlix";
import MobileDev from "./component/mobilePortfolio";
import WebDev from "./component/webPortfolio";

function App() {
  return (
    <main className="sectionSize">
      <section >
        <CodeDesign></CodeDesign>
      </section>
      <div>
        <section>
          <Discover></Discover>
        </section>
        <section>
          <Profile></Profile>
        </section>
        <section>
          <MobileDev></MobileDev>
        </section>
        <section>
          <Consult></Consult>
        </section>
        <section>
          <Bonbo></Bonbo>
        </section>
        <section>
          <WebDev></WebDev>
        </section>
        <section>
          <Planif></Planif>
        </section>
        <section>
          <ReactFlix></ReactFlix>
        </section>
        <section>
          <JustEez></JustEez>
        </section>
      </div>
    </main>
  );
}

export default App;
