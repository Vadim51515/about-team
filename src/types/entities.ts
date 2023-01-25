export type Developer = {
  id: number;
  name: string;
  role: string;
  short_description: string;
  description: string;
  img?: string;
  projects: number[];
  skills: number[];
};
export type Skill = {
  id: number;
  name:
    | "Android"
    | "CSS"
    | "HTML"
    | "IOS"
    | "JS"
    | "Python"
    | "React"
    | "SCSS"
    | "TS"
    | "UE";
};
