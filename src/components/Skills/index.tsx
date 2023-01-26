import { skills as api_skills } from "api/skills";
import classNames from "classnames";
import { Skill as SkillType } from "types/entities";
import {
  Android,
  CSS,
  HTML,
  IOS,
  JS,
  Python,
  React,
  SCSS,
  TS,
  UE,
} from "utils/SVG";
import styles from "./index.module.scss";

type PropsType = {
  skills: number[];
  className?: string;
};

const Skill: React.FC<SkillType> = ({ name }) => {
  const svgByName = {
    Android: Android,
    CSS: CSS,
    HTML: HTML,
    IOS: IOS,
    JS: JS,
    Python: Python,
    React: React,
    SCSS: SCSS,
    TS: TS,
    UE: UE,
  };
  const Result = svgByName[name];
  return <Result className={styles.skill} />;
};
const Skills: React.FC<PropsType> = ({ skills, className }) => {
  const currentSkills = api_skills.filter(({ id }) => skills.includes(id));

  return (
    <div className={classNames([styles.container, className])}>
      {currentSkills.map((s) => (
        <Skill key={s.id} id={s.id} name={s.name} />
      ))}
    </div>
  );
};
export default Skills;
