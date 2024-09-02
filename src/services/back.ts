import axios, { AxiosResponse } from "axios";

const backUrl: string = "https://portafolioback-latest.onrender.com/db/";

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

export const BackService = { getDbData };
