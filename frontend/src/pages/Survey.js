import { useMemo, } from "react";
import Table from "../components/Table";
import { getHeaders } from '../components/columns'
import { useAppContext } from "../context/AppContext";
import { getUserData, makeData } from "../data/makeData";

import "../styles/survey.css";
// import { useState } from "react";


const Survey = () => {
  const { state } = useAppContext()
  console.log(state);
  const ATTRCOL = getHeaders(true)
  const DATA = useMemo(() => makeData(getUserData(state.id)), [ ])




  return (
    <div className="app">
      <div className="header">
        {/* <h1 className="title">Case {page}</h1> */}
        <div className="mini-header">
        <ul class="list">
          <li>Correct: Is acceptable for the class in blue</li>
          <li>Obvious: You could have easily come up with yourself</li>
          <li>Redundant: exists or is similar to an existing one</li>
          <li>Contextualized: It belongs to the diagram domain</li>
          <li>Generalizable: Is also applicable to other classes of the diagram</li>
        </ul>
          {/* <h3>Page {pageIdx + 1} of </h3> */}
          {/* <div className="radios">
            <input type="radio" />
            <input type="radio" />
            <input type="radio" />
          </div> */}
        </div>
      </div>
      <Table COLUMNS={ATTRCOL} useCaseData={DATA} param={state} />
    </div>
  );
}

export default Survey;