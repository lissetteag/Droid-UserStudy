export const initialState = {
  id: 3,
  homeActive: true,
  instructionActive: false,
  surveyActive: false,
};

export const appReducer = (state, action) => {
  switch (action.type) {
    case "init_stored": {
      return action.value;
    }

    case "navigate": {
      return {
        ...state,
        id: action.value,
      };
    }

    case "example": {
      // console.log("hekkio", action);
      return {
        ...state,
        id: action.value,
        homeActive: false,
        instructionActive: true,
        surveyActive: false
      };
    }

    case "survey": {
      // console.log("dsdsd");
      return {
        ...state,
        homeActive: false,
        instructionActive: false,
        surveyActive: true,
      };
    }
    case "home":
    default:
      console.log("22222", action);
      return initialState;
  }
};
