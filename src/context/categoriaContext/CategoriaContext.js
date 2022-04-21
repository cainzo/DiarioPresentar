import CategoriaReducer from "./CategoriaReducer";
import { createContext, useReducer } from "react";

const INITIAL_STATE = {
  categorias:[],
  isFetching: false,
  error: false,
};

export const CategoriaContext = createContext(INITIAL_STATE);
export const CategoriaContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CategoriaReducer, INITIAL_STATE);

  return (
    <CategoriaContext.Provider
      value={{
        categorias: state.categorias,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </CategoriaContext.Provider>
  );
};
