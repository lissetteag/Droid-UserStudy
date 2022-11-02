import { useNavigate } from "react-router-dom";
import "../styles/example.css";

import { useAppContext } from "../context/AppContext";

function Instruction() {
  const { state, dispatch } = useAppContext();
  // console.log(state);
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
        <div className="imageBlock">
          <div className="image">
            <img src="\img\cd.png" alt="sample class diagram"></img>
          </div>
        </div>
      </div>
      <div className="rightBlock">
        <h1>Example</h1>
        <div className="example">
          <p>
            The figure on the left shows a class diagram under development. The class in <markTarget>blue</markTarget>  is the class under construction.
            The table below shows possible attributes/methods for the class.
            <br /><br />
            The goal is to fill the table according to the following criteria:
            <li>Correct: The attribute/method is suitable for the class in blue.</li>
            <li>Obvious: The attribute/method you could have easily proposed yourself</li>
            <li>Redundant: The attribute/method exists or is similar to an existing one in the diagram</li>
            <li>Contextualized: The attribute/method belongs to the diagram domain</li>
            <li>Generalizable: The attribute/method is also applicable to other classes of the diagram</li>
            <br />
            For instance, for the class <markTarget>Customer</markTarget>, the attribute <markItem>id</markItem> is Correct since is suitable and is Obvious because you could easily propose yourself. <markItem>Id</markItem> can be Redundant as it exists in the SuperClass Person, is not Contextualized as it is not particular to the domain and is Generalizable as it can be applied to the class Order. On the other hand, the attribute <markItem>balance</markItem> is Correct since is adequate for the class and is Contextualized because it belongs to the diagram domain.
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
