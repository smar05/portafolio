import Swal, { SweetAlertIcon } from "sweetalert2";

/**
 * Alerta general
 *
 * @param {string} title
 * @param {string} text
 * @param {SweetAlertIcon} icon
 * @param {string} [confirmButtonText="Ok"]
 * @return {*}
 */
const basicAlert = (
  title: string,
  text: string,
  icon: SweetAlertIcon,
  confirmButtonText: string = "Ok"
) => {
  return Swal.fire({
    title,
    text,
    icon,
    confirmButtonText,
  });
};

export const Alert = { basicAlert };
