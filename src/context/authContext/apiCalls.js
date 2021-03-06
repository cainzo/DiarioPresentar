import axios from "axios"
import {loginFailure, loginStart, loginSucces} from "./AuthActions"
import Swal from "sweetalert2";


export const login = async (user,dispatch)=>{
    dispatch(loginStart());

    try {
        const res = await axios.post("https://proyecto-final-gonzalocainzo.herokuapp.com/api/auth/login", user);
        res.data && dispatch(loginSucces(res.data));
        let timerInterval;
        Swal.fire({
          title: "Logeado correctamente!",
          html: "Redireccionando...",
          icon: "success",
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
          }
        });
    } catch (err) {
     // window.alert(err.response.data)
      Swal.fire({
        icon: 'error',
        text: err.response.data,
      })
      dispatch(loginFailure())

    }
};

