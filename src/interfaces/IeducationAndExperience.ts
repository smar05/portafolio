export interface IeducationAndExperience {
  _id: string;
  backTitle: string;
  title: string;
  educationSection: {
    title: string;
    education: IEducation[];
  };
  experienceSection: {
    title: string;
    experience: IExperience[];
  };
}

export interface IEducation {
  name: string;
  school: string;
  begin: string;
  end: string;
  description: string;
}

export interface IExperience {
  name: string;
  company: string;
  begin: string;
  end: string;
  time: string;
  description: string;
}
