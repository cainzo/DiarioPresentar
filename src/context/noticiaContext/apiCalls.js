import axios from "axios";
import {
  getNoticiasFailure,
  getNoticiasStart,
  getNoticiasSuccess,
  deleteNoticiaStart,
  deleteNoticiaFailure,
  deleteNoticiaSuccess
} from "./NoticiaActions";

export const getNoticias = async (dispatch) => {
  getNoticiasStart();

  try {
    const res = await axios.get("crudnoticias", {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(getNoticiasSuccess(res.data));
  } catch (err) {
    dispatch(getNoticiasFailure());
  }
};
export const deleteNoticia = async (id, dispatch) => {
  deleteNoticiaStart()

  try {
    await axios.delete("/crudnoticias/" + id, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    deleteNoticiaSuccess(id);
  } catch (err) {
    deleteNoticiaFailure();
  }
};