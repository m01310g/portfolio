import { Skills } from "../../../../constants/Skills";
import { SkillBox } from "./SkillList.styled";

const SkillList = () => {
  return (
    <>
      <SkillBox>
        <h2>많이 해봤어요</h2>
        <ul>
          {Skills.familiar.map((skill) => (
            <li key={skill.name}>
              <div>
                <i className={skill.icon}></i>
                <span>{skill.name}</span>
              </div>
            </li>
          ))}
        </ul>
      </SkillBox>
      <SkillBox>
        <h2>해본 적 있어요</h2>
        <ul>
          {Skills.experienced.map((skill) => (
            <li key={skill.name}>
              <div>
                <i className={skill.icon}></i>
                <span>{skill.name}</span>
              </div>
            </li>
          ))}
        </ul>
      </SkillBox>
    </>
  );
};

export default SkillList;
