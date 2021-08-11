import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import Title from "../Components/Title";
import SmallTitle from "../Components/SmallTitle";
import ResumeItem from "../Components/ResumeItem";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import SchoolIcon from "@material-ui/icons/School";

function Resume() {
  const briefcase = <BusinessCenterIcon />;
  const school = <SchoolIcon />;
  return (
    <ResumeStyled>
      <Title title={"Resume"} span={"resume"} />
      <InnerLayout>
        <div className="small-title">
          <SmallTitle icon={briefcase} title={"Working Experience"} />
        </div>
        <div className="resume-content">
          <ResumeItem
            year={"Jun 2021 - Aug 2021"}
            title={"Front-end Developer Intern"}
            subTitle={"SpeEdlabs"}
            text={
              "Responsible for driving the e-kart project user-panel, (brief on project- Institute/admins publishes their courses through admin portal and students make purchases of the courses only created by their institute admin.) "
            }
            text2={"Merge the Studylms template with the current project."}
            text1={
              "Created the User side panel from scratch where user can login, view, purchase, access-content etc from the specified marketplace."
            }
            text3={
              "Tools & Technologies: ReactJs, Html, CSS, MaterialUI, Redux, Recoil, Trello, Postman"
            }
          />
        </div>
        <div className="small-title u-small-title-margin">
          <SmallTitle icon={school} title={"Educational Qualifications"} />
        </div>
        <div className="resume-content ">
          <ResumeItem
            year={"July 2018 - May 2022"}
            title={"Gautam Buddha University"}
            subTitle={"Bachelor of Technology - IT"}
            text={"GPA: 9.62 "}
          />
          <ResumeItem
            year={"April 2016 - May 2018"}
            title={"Spring Meadows Public School,delhi"}
            subTitle={"CBSE (XI-XII)"}
            text={"Percentage: 89.75%"}
          />
          <ResumeItem
            year={"2015"}
            title={"Spring Meadows Public School,delhi"}
            subTitle={"CBSE (X)"}
            text={"CGPA: 9.2 "}
          />
        </div>
      </InnerLayout>
    </ResumeStyled>
  );
}

const ResumeStyled = styled.section`
  .small-title {
    padding-bottom: 3rem;
  }
  .u-small-title-margin {
    margin-top: 4rem;
  }
  .resume-content {
    border-left: 2px solid var(--border-color);
  }
`;
export default Resume;
