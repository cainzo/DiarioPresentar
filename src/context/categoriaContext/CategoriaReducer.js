const CategoriaReducer = (state, action) => {
    switch (action.type) {
        //crear noticia
        case "CREAR_CATEGORIA_START":
          return {
           ...state,
            isFetching: true,
            error: false,
          };
        case "CREAR_CATEGORIA_SUCCESS":
          return {
            categorias: [...state.categorias, action.payload],
            isFetching: false,
            error: false,
          };
        case "CREAR_CATEGORIA_FAILURE":
          return {
           ...state,
            isFetching: false,
            error: true,
          };

        //delete
      case "DELETE_CATEGORIA_START":
        return {
         ...state,
          isFetching: true,
          error: false,
        };
      case "DELETE_CATEGORIA_SUCCESS":
        return {
          categorias: state.categorias.filter((categoria) => categoria._id !== action.payload),
          isFetching: false,
          error: false,
        };
      case "DELETE_CATEGORIA_FAILURE":
        return {
         ...state,
          isFetching: false,
          error: true,
        };
      default:
        return { ...state };
    }
  };
  
  export default CategoriaReducer;
  