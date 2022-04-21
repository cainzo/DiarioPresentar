import NoticiaReducer from "./NoticiaReducer";
import { createContext, useReducer } from "react";

const INITIAL_STATE = {
  noticias:[],
  isFetching: false,
  error: false,
};

export const NoticiaContext = createContext(INITIAL_STATE);
export const NoticiaContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(NoticiaReducer, INITIAL_STATE);

  return (
    <NoticiaContext.Provider
      value={{
        noticias: state.noticias,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </NoticiaContext.Provider>
  );
};
