import Swal from 'sweetalert2'

export default {
  toast: () => Swal.mixin({
    toast: true,
    position: 'top-right',
    showConfirmButton: false,
    timer: 4000,
    timerProgressBar: true,
    onOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    },
  }),
}
