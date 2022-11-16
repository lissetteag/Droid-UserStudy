//import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import "../styles/header.css";

const Header = () => {
  const { state, dispatch } = useAppContext();
  const navigate = useNavigate();
  let home = state.homeActive;
  let example = state.instructionActive;
  let survey = state.surveyActive;

  const pathname = window.location.pathname;

  const handleNavigation = (e) => {
    e.preventDefault();
    const name = e.target.innerText;
    switch (name) {
      case "Example":
        dispatch({ type: "example", value: state.id })
        navigate("/example/" + state.id)
        break
      case "Survey":
        dispatch({ type: "survey", value: state.id })
        navigate("/survey/" + state.id)
        break
      default:
       // dispatch({ type: "home", value: state.id })
       // navigate("/")
        break
    }
  }

  return (
    
    <div className="header">
      <div className="img"> {/*  onClick={() => navigate("/1")}> */}
        <img src="gen/default-monochrome-black.svg" height={80} width={200} alt="droidLogo" />
      </div>
      {pathname !== "/Finish" && <nav className="nav">
        <div className="flex-link">
          <Link
            className={home ? "navActive" : "navHome"}
            to={"/"}
            onClick={handleNavigation}
          >
            Home
          </Link>
          <div>|</div>

          <Link
            className={example ? "navActive" : "navInstruction"}
            to={"/example/"+ state.id}
            onClick={handleNavigation}
          >
            Example
          </Link>
          <div>|</div>
          <Link
            className={survey ? "navActive" : "navSurvey"}
            to={"/survey/"+ state.id}
            onClick={handleNavigation}
          >
            Survey
          </Link>
        </div>
      </nav>}
    </div>
  );
};

export default Header;
