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
      // state.id = action.value;
      // state.homeActive = !state.homeActive;
      // state.surveyActive = !state.surveyActive;

      return {
        ...state,
        id: action.value,
        homeActive: !state.homeActive,
        instructionActive: !state.instructionActive,
        surveyActive: !state.surveyActive,
      };

      
    }
    default: return initialState;
  } 
};
