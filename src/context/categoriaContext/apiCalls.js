import axios from "axios";
import {
 getCategoriasFailure,
 getCategoriasStart,
 getCategoriasSuccess,
  deleteCategoriaStart,
  deleteCategoriaFailure,
  deleteCategoriaSuccess,
  crearCategoriaFailure,
  crearCategoriaStart,
  crearCategoriaSuccess,

} from "./CategoriaActions";
import Swal from "sweetalert2";


//GET
export const getCategorias = async (dispatch) => {
  
    getCategoriasStart();
  
    try {
      const res = await axios.get("https://proyecto-final-gonzalocainzo.herokuapp.com/api/categorias/");
      getCategoriasSuccess(res.data);
      console.log(res.data)
    } catch (err) {
      getCategoriasFailure();
    }
  };

  //POST crear nueva categoria
export const crearCategoria = async (categoria, dispatch) => {

    crearCategoriaStart();
  
    try {
      const res = await axios.post("https://proyecto-final-gonzalocainzo.herokuapp.com/api/categorias/", categoria, {
        headers: {
          token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
        },
      });
      crearCategoriaSuccess(res.data);
      let timerInterval;
      Swal.fire({
        title: "categoria creada correctamente!",
        html: "Recargando...",
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
     
      window.location.reload();
    } catch (err) {
      Swal.fire({
        icon: 'error',
        text: err.response.data.messages,
      })
     // window.alert(err.response.data.messages)
      crearCategoriaFailure();
    }
  };

  export const deleteCategoria = async (id, dispatch) => {
    deleteCategoriaStart();
  
    Swal.fire({
      title: "Esta seguro de borrar la categoria?",
      text: "Esta accion no va a poder ser revertida.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.delete("https://proyecto-final-gonzalocainzo.herokuapp.com/api/categorias/" + id, {
            headers: {
              token:
                "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
            },
          });
          deleteCategoriaSuccess(id);
          Swal.fire("Deleted!", "Your file has been deleted.", "success");

          window.location.reload();
        } catch (err) {
          Swal.fire({
            icon: 'error',
            text: err.response.data,
          })
          deleteCategoriaFailure();
        }
      }
    });
  };