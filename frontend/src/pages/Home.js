import React, { useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../styles/home.css";

import { useAppContext } from "../context/AppContext";

function Home() {
  const { dispatch } = useAppContext();
  const navigate = useNavigate();
  const inputRef = useRef();
  const { userId } = useParams();


  const handleSubmit = (e) => {
    e.preventDefault();
    //For url parameter
    if (Number(userId)) {
      dispatch({ type: "navigate", value: userId });
      // console.log(state);
      navigate("/instruction/");
    } else {
      alert("Please enter the integer...")
    }
  };

  return (
    <div className="home">
      <h1>User study</h1>
      <p>
        This study aims to evaluate recommendations for class diagrams.
        The recommendations are generated with Droid, a model-driven solution to automate the synthesis of recommender systems for modelling languages.
        Participation in this study is voluntary. During the study, the participants will have to evaluate several items that have been recommended for 3 different class diagrams,
        according to several quality criteria. This study is scientific and has no economic or commercial purposes.
      </p>
      <form onSubmit={handleSubmit}>
        {}
        <button type="submit" className="buttonID">
          Next
        </button>
      </form>
      {/* <Table /> */}
    </div>
  );
}

export default Home;
