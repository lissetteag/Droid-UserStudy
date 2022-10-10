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
    <div className="instruction">
      <h1>Instruction</h1>
      <p>
        These are the instructions and example blablabla.This are the instruction and example blablabla.This are the instruction and example blablabla.This are the instruction and example blablabla.This are the instruction and example blablabla.This are the instruction and example blablabla.This are the instruction and example blablabla.This are the instruction and example blablabla.This are the instruction and example blablabla.
      </p>
      <form onSubmit={handleSubmit}>
        { }
        <button type="submit" className="buttonID">
          Next
        </button>
      </form>
      {/* <Table /> */}
    </div>
  );
}

export default Instruction;
