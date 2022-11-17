import { useNavigate, useParams } from "react-router-dom";
import "../styles/example.css";

import { useAppContext } from "../context/AppContext";

function Example() {
  const { dispatch } = useAppContext();
  //const { state, dispatch } = useAppContext();
  const navigate = useNavigate();
  const { userId } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "survey", value: userId });
    //For url parameter
    navigate("/survey/" + userId);
    // window.open("/survey", "_blank");
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
            The figure on the left shows a class diagram under development. The class in <span className="markTarget">blue</span>  is the class under construction. The table below shows possible attributes/methods for the class.
            <br /><br />
            The goal is to fill the table according to the following criteria:
            <li>Correct: The attribute/method is suitable for the class in blue</li>
            <li>Obvious: The attribute/method could have easily been proposed by yourself</li>
            <li>Redundant: The attribute/method exists or is similar to an existing one in the diagram</li>
            <li>Contextualized: The attribute/method belongs to the diagram domain</li>
            <li>Generalizable: The attribute/method is also applicable to other classes of the diagram</li>
            <br />
            For instance, for the class <span className="markTarget">Customer</span>, the attribute <span className="markItem">id</span> is Correct since is suitable and is Obvious because you could easily propose yourself. <span className="markItem">Id</span> is Redundant as it exists in the SuperClass Person, is not Contextualized as it is not particular to the domain and is Generalizable as it can be applied to the class Order. On the other hand, the method <span className="markItem">getBillingAddress</span> is Correct since is adequate for the class and is Contextualized because it belongs to the diagram domain.
            <br /><br />
            Afterwords, if you missed an attribute or method relevant to the class <span className="markTarget">Customer</span> you can optionally write it in the text box. For instance, for this case <span className="markItem">creditCardNumber</span>. Finally, indicate the level of confidence you felt in selecting the attributes and methods for the class in blue.
          </p>
        </div>
        <div className="image2">
          <img src="\img\caseSample.png" alt="sample class diagram"></img>
        </div>
        <form onSubmit={handleSubmit}>
          <button type="submit" className="buttonID2">
            Next
          </button>
        </form>
      </div>
    </div>
  );
}

export default Example;
