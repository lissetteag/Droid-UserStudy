//import { useState } from "react";
import { Link, useNavigate ,useParams} from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import "../styles/header.css";

const Header = () => {
  const { state, dispatch } = useAppContext();
  const navigate = useNavigate();
  let home = state.homeActive;
  let example = state.instructionActive;
  let survey = state.surveyActive;

  const pathname = window.location.pathname;
  const { userId } = useParams();

  const handleNavigation = (e) => {
    e.preventDefault();
    const name = e.target.innerText;
    switch (name) {
      case "Example":
        dispatch({ type: "example" , value: userId})
        navigate("/example")
        break
      case "Survey":
        dispatch({ type: "survey", value: userId })
        navigate("/survey")
        break
      default:
        dispatch({ type: "home", value: userId })
        navigate("/")
        break
    }
  }

  return (
    <div className="header">
      <div className="img"> {/*  onClick={() => navigate("/1")}> */}
        <img src="gen/default-monochrome-black.svg" height={80} width={200} alt="ygfytfytt" />

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
            to={"/example"}
            onClick={handleNavigation}
          >
            Example
          </Link>
          <div>|</div>
          <Link
            className={survey ? "navActive" : "navSurvey"}
            to={"/survey"}
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
