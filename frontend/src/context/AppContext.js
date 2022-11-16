import {
  createContext,
  useContext,
  useMemo,
  useReducer
} from "react";
import { appReducer, initialState } from "./AppReducer";

// Using both the Contextapi and the reducer
// =========================================
const AppContext = createContext();

export function AppProvider({ children }) {
  // We replace the useState with useReducer
  const [state, dispatch] = useReducer(appReducer, initialState);

  const contextValue = useMemo(() => {
    return { state, dispatch };
  }, [state, dispatch]);

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
