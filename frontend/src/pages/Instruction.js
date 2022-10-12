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
          <div className="image">
            <img src="\img\cd.png" alt="sample class diagram"></img>
          </div>
        </div>
      </div>
      <div className="rightBlock">
      <h1>Instruction</h1>
      <div className="instruction">
      <p>
          The figure in the left shows a class diagram being created. The class in blue is the class to recive recommendations. 
          The figure in the right shows a example of survey.
          In the example the items recommended are being selected accordingly. 
          If the recommendation is acceptable then the checkbox correct is being selected. 
          The same way if addionally the item is too Obvious, 
          Redundant as is already present in another class, 
          Contextualized as if the item is in the domain 
          or Generalizable is it can be also applied in toher classes of the diagram.

          For example, for the class Costumer the item id is Correct but Obvious.
          It is Redundant as it is already present in the SuperClass Person.
          Addionally it is not Contextualized as it is not particular form the domain and
          is also Generalizable as it can be applied to class Order for example.
        </p>
      </div>
      <div className="image2">
          <img src="\img\caseSample.png" alt="sample class diagram"></img>
        </div>
      <form onSubmit={handleSubmit}>
        { }
        <button type="submit" className="buttonID">
          Next
        </button>
      </form>
      {/* <Table /> */}
      </div>
    </div>
  );
}

export default Instruction;
