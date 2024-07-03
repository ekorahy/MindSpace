import Swal from "sweetalert2";
import remote from "../../data/remote/remote";

function asyncRegisterUser({ name, email, password }, navigate) {
  return async () => {
    try {
      const message = await remote.register({ name, email, password });
      Swal.fire({
        icon: 'success',
        title: message,
        showConfirmButton: false,
        timer: 1500
      });
      navigate('/')
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Opps...',
        text: error.message
      })
    }
  };
}

export default asyncRegisterUser;
