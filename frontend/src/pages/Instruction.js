import { useNavigate } from "react-router-dom";
import "../styles/instruction.css";

import { useAppContext } from "../context/AppContext";

function Instruction() {
  const { state, dispatch } = useAppContext();
  console.log(state);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "survey" });
    //For url parameter
    navigate("/survey");
  };

  return (
    <div className="container">
      <div className="leftBlock">
        <div className="image">
            <img src="\img\cd.png" alt="sample class diagram"></img>
        </div>
      </div>
      <div className="rightBlock">
        <h1>Instruction</h1>
        <div className="instruction">
          <p>
            The figure on the left shows a class diagram under development. The class in <markTarget>blue</markTarget>  is the class to receive recommendations.
            The figure on the right shows an example of the survey.
            <br></br>
            If the recommendation is suitable the evaluator has to select the <mark>Correct</mark> check.
            If the recommendation you could have easily proposed yourself <mark>Obvious</mark> needs to be checked.
            Similarly, select <mark>Redundant</mark> if exists or is similar to an existing one,
            <mark>Contextualized</mark> if belongs to the diagram domain
            or <mark>Generalizable</mark> if it is also applicable to other classes of the diagram.
            <br></br>
            For instance, for the class <markTarget>Costumer</markTarget> the  <markItem> item id</markItem> is Correct but Obvious.
            It is also Redundant as it is already present in the SuperClass Person and is not Contextualized as it is not particular from the domain. Aditioanllly is also Generalizable as it can be applied to the class Order.
          </p>
        </div>
        <div className="image2">
          <img src="\img\caseSample.png" alt="sample class diagram"></img>
        </div>
        <form onSubmit={handleSubmit}>
          { }
          <button type="submit" className="buttonID2">
            Next
          </button>
        </form>
        {/* <Table /> */}
      </div>
    </div>
  );
}

export default Instruction;
