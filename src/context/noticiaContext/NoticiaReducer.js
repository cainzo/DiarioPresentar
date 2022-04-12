const NoticiaReducer = (state, action) => {
  switch (action.type) {
    case "GET_NOTICIAS_START":
      return {
        noticias: [],
        isFetching: true,
        error: false,
      };
    case "GET_NOTICIAS_SUCCES":
      return {
        noticias: action.payload,
        isFetching: false,
        error: false,
      };
    case "GET_NOTICIAS_FAILURE":
      return {
        noticias: [],
        isFetching: false,
        error: true,
      };
      //delete
    case "DELETE_NOTICIA_START":
      return {
       ...state,
        isFetching: true,
        error: false,
      };
    case "DELETE_NOTICIA_SUCCES":
      return {
        noticias: state.noticias.filter((movie) => movie._id !== action.payload),
        isFetching: false,
        error: false,
      };
    case "DELETE_NOTICIA_FAILURE":
      return {
       ...state,
        isFetching: false,
        error: true,
      };
    default:
      return { ...state };
  }
};

export default NoticiaReducer;
