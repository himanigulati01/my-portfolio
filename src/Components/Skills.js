import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import Title from "../Components/Title";
import ProgressBar from "./ProgressBar";
import { AiFillHtml5 } from "react-icons/ai";
import { SiCss3 } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { GrReactjs } from "react-icons/gr";
import { VscJson } from "react-icons/vsc";
import { BiGitMerge } from "react-icons/bi";
import { DiNodejs } from "react-icons/di";
import { DiMongodb } from "react-icons/di";
import { FaJava } from "react-icons/fa";

function Skills() {
  return (
    <SkillsStyled>
      <Title title={"My Skills"} span={"my skills"} />
      <InnerLayout>
        <div className="skills">
          <ProgressBar
            title={"HTML5"}
            width={"90%"}
            icon={<AiFillHtml5 />}
            text={"90%"}
          />
          <ProgressBar
            title={"CSS3"}
            width={"75%"}
            text={"75%"}
            icon={<SiCss3 />}
          />
          <ProgressBar
            title={"JAVASCRIPT"}
            width={"80%"}
            text={"80%"}
            icon={
              <IoLogoJavascript
                style={{ background: "grey", color: "black" }}
              />
            }
          />
          <ProgressBar
            title={"React JS"}
            width={"80%"}
            text={"80%"}
            icon={<GrReactjs />}
          />
          <ProgressBar
            title={"JSON"}
            width={"95%"}
            text={"95%"}
            icon={<VscJson />}
          />
          <ProgressBar
            title={"Git"}
            width={"95%"}
            text={"95%"}
            icon={<BiGitMerge />}
          />
          <ProgressBar
            title={"Node JS"}
            width={"60%"}
            text={"60%"}
            icon={<DiNodejs />}
          />
          <ProgressBar
            title={"Mongodb"}
            width={"40%"}
            text={"40%"}
            icon={<DiMongodb />}
          />
          <ProgressBar
            title={"JAVA"}
            width={"60%"}
            text={"60%"}
            icon={<FaJava />}
          />
        </div>
      </InnerLayout>
    </SkillsStyled>
  );
}

const SkillsStyled = styled.section`
  .skills {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 2rem;
    grid-column-gap: 3rem;
    @media screen and (max-width: 700px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

export default Skills;
