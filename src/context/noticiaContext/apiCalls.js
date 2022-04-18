import axios from "axios";
import {
  getNoticiasFailure,
  getNoticiasStart,
  getNoticiasSuccess,
  deleteNoticiaStart,
  deleteNoticiaFailure,
  deleteNoticiaSuccess,
  crearNoticiaFailure,
  crearNoticiaStart,
  crearNoticiaSuccess,
  updateNoticiaFailure,
  updateNoticiaStart,
  updateNoticiaSuccess,
} from "./NoticiaActions";
import Swal from "sweetalert2";


//GET
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
//POST crear nueva noticia
export const crearNoticia = async (noticia, dispatch) => {

  crearNoticiaStart();

  try {
    const res = await axios.post("/crudnoticias/", noticia, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    crearNoticiaSuccess(res.data);
    let timerInterval;
    Swal.fire({
      title: "Noticia creada correctamente!",
      html: "Redireccionando...",
      timer: 1000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
        const b = Swal.getHtmlContainer().querySelector("b");
        timerInterval = setInterval(() => {
          b.textContent = Swal.getTimerLeft();
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      },
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log("I was closed by the timer");
      }
    });
  } catch (err) {
    crearNoticiaFailure();
  }
};
//UPDATE
export const updateNoticia = async (id, noticia, dispatch) => {
  updateNoticiaStart();

  Swal.fire({
    title: "Guardar los cambios?",
    text: "Esta accion no va a poder ser revertida.",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Si",
  }).then(async (result) => {
    if (result.isConfirmed) {
      try {
        const res = await axios.put("/crudnoticias/" + id, noticia, {
          headers: {
            token:
              "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
          },
        });

        updateNoticiaSuccess(res.data);
        Swal.fire("Noticia editada, redireccionando!", "", "success");
      } catch (err) {
        updateNoticiaFailure();
      }
    }
  });
};
//DELETE
export const deleteNoticia = async (id, dispatch) => {
  deleteNoticiaStart();

  Swal.fire({
    title: "Esta seguro de borrar la noticia?",
    text: "Esta accion no va a poder ser revertida.",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Si",
  }).then(async (result) => {
    if (result.isConfirmed) {
      try {
        await axios.delete("/crudnoticias/" + id, {
          headers: {
            token:
              "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
          },
        });
        deleteNoticiaSuccess(id);
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
        window.location.reload();
      } catch (err) {
        deleteNoticiaFailure();
      }
    }
  });
};
