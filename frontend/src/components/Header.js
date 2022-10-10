import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import "../styles/header.css";

const Header = () => {
  const { state, dispatch } = useAppContext();
  const navigate = useNavigate();
  let home = state.homeActive;
  let instruction = state.instructionActive;
  let survey = state.surveyActive;

  // console.log(home, instruction, survey);
  // const [home, setHome] = useState(false)
  // const [instruction, setInstruction] = useState(false)
  // const [survey, setSurvey] = useState(false)

  // const alternate = () => {
  //   dispatch({ type: "navigate" });
  // };

  const pathname = window.location.pathname;



  const handleNavigation = (e) => {
    e.preventDefault();
    const name = e.target.innerText;
    console.log(name);
    switch (name) {

      case "Instruction":

        console.log(name);
        dispatch({ type: "instruction" })
        navigate("/instruction")
        break

      case "Survey":
        console.log(name);
        dispatch({ type: "survey" })
        navigate("/survey")
        break

      default:
        console.log(name);
        dispatch({ type: "home" })
        navigate("/")
        break
    }
  }

  // console.log(state);


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
            className={instruction ? "navActive" : "navInstruction"}
            to={"/instruction"}
            onClick={handleNavigation}
          >
            Instruction
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
