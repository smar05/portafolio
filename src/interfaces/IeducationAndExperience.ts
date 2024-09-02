export interface IeducationAndExperience {
  backTitle: string;
  title: string;
  educationSection: {
    title: string;
    education: {
      name: string;
      school: string;
      begin: string;
      end: string;
      description: string;
    }[];
  };
  experienceSection: {
    title: string;
    experience: {
      name: string;
      company: string;
      begin: string;
      end: string;
      time: string;
      description: string;
    }[];
  };
}
