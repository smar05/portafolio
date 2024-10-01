import axios, { AxiosResponse } from "axios";

const backUrl: string = "http://localhost:5000/db/"; //"https://portafolioback-latest.onrender.com/db/";

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
  return axios.post(`${backUrl}login`, { email, password });
};

export const BackService = { getDbData, login };
