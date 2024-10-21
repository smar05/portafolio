import axios, { AxiosResponse } from "axios";

const backUrl: string = import.meta.env.VITE_BACK_URL;

export enum EnumDbEndPoints {
  ABOUT_ME = "about-me",
  CONTACT_ME = "contact-me",
  EDUCATION_AND_EXPERIENCE = "education-and-experience",
  PRESENTATION = "presentation",
  MY_SKILLS = "my-skills",
}

const getDbData = (
  endpoint: EnumDbEndPoints
): Promise<AxiosResponse<any, any>> => {
  return axios.get(`${backUrl}${endpoint}`);
};

/**
 * Login
 *
 * @param {string} email
 * @param {string} password
 * @return {*}  {Promise<AxiosResponse<any, any>>}
 */
const login = (
  email: string,
  password: string
): Promise<AxiosResponse<any, any>> => {
  return axios.post(
    `${backUrl}login`,
    { email, password },
    {
      withCredentials: true,
    }
  );
};

/**
 * Borrar credenciales
 *
 * @return {*}  {Promise<AxiosResponse<any, any>>}
 */
const logout = (): Promise<AxiosResponse<any, any>> => {
  return axios.post(`${backUrl}logout`, null, {
    withCredentials: true,
  });
};

/**
 * REST put
 *
 * @param {string} endpoint
 * @param {*} data
 * @return {*}  {Promise<AxiosResponse<any, any>>}
 */
const putData = (
  endpoint: string,
  data: any
): Promise<AxiosResponse<any, any>> => {
  return axios.put(`${backUrl}${endpoint}`, data, {
    headers: { Authorization: localStorage.getItem("token") || null },
    withCredentials: true,
  });
};

/**
 * Validar el token
 *
 * @return {*}  {Promise<boolean>}
 */
const validateToken = async (): Promise<boolean> => {
  let valido: boolean = false;
  try {
    valido = (
      await axios.post(`${backUrl}validate-token`, null, {
        withCredentials: true,
      })
    ).data.tokenValido;
  } catch (error) {
    return false;
  }

  return valido;
};

/**
 * Obtener la imagen de perfil
 *
 * @return {*}  {string}
 */
const getImageUrlProfile = (): string => {
  return `${backUrl}image/presentation`;
};

/**
 * Enviar una imagen al back
 *
 * @param {string} endpoint
 * @param {FormData} formData
 * @return {*}  {Promise<AxiosResponse<any, any>>}
 */
const sendImage = (
  endpoint: string,
  formData: FormData
): Promise<AxiosResponse<any, any>> => {
  return axios.put(`${backUrl}upload-image/${endpoint}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const BackService = {
  getDbData,
  login,
  logout,
  putData,
  validateToken,
  getImageUrlProfile,
  sendImage,
};
