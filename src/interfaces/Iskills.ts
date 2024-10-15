export interface Iskills {
  _id: string;
  backTitle: string;
  title: string;
  frontend: SkillSection;
  backend: SkillSection;
}

export interface SkillData {
  name: string;
  percentage: number;
  color: string;
}

export interface SkillSection {
  title: string;
  data: SkillData[];
}
