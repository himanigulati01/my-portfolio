import React from "react";
import styled from "styled-components";
import resume from "../images/resume.jpg";
import PrimaryButton from "./PrimaryButton";
import CV from "../assets/CV.pdf";

function ImageSection() {
  const calculate_age = (dob) => {
    var diff_ms = Date.now() - dob.getTime();
    var age_dt = new Date(diff_ms);

    return Math.abs(age_dt.getUTCFullYear() - 1970);
  };
  return (
    <ImageSectionStyled>
      <div className="left-content">
        <img src={resume} alt="" />
      </div>
      <div className="right-content">
        <h4>
          I am <span>Himani Gulati</span>
        </h4>
        <p className="paragraph">
          I am an allround web developer. I am a programmer with good knowledge
          of <strong>front-end techniques</strong>. I love structure and order
          and I also stand for quality. I love spending time on fixing little
          details and optimizing web apps. Also I like working in a team, you'll
          learn faster and much more. As the saying goes: 'two heads are better
          than one'.
        </p>
        <div className="about-info">
          <div className="info-title">
            <p>Full Name</p>
            <p>Age</p>
            <p>Nationality </p>
            <p>Languages </p>
            <p>Location</p>
          </div>
          <div className="info">
            <p>: Himani Gulati</p>
            <p>: {calculate_age(new Date(2001, 1, 12))}</p>
            <p>: Indian </p>
            <p>: Hindi, English </p>
            <p>: New Delhi, India</p>
          </div>
        </div>
        <PrimaryButton
          download={"Himani-Resume"}
          href={CV}
          title={"Download Resume"}
        />
      </div>
    </ImageSectionStyled>
  );
}

const ImageSectionStyled = styled.div`
  margin-top: 5rem;
  display: flex;
  @media screen and (max-width: 1000px) {
    flex-direction: column;
    .left-content {
      margin-bottom: 2rem;
    }
  }
  .left-content {
    width: 100%;
    img {
      width: 90%;
      object-fit: cover;
      border-radius: 10%;
    }
  }
  .right-content {
    width: 100%;
    h4 {
      font-size: 2rem;
      color: var(--white-color);
      span {
        font-size: 2rem;
      }
    }
    .paragraph {
      padding: 1rem 0;
    }
    .about-info {
      display: flex;
      padding-bottom: 1.4rem;
      .info-title {
        padding-right: 3rem;
        p {
          font-weight: 600;
        }
      }
      .info-title,
      .info {
        p {
          padding: 0.3rem 0;
        }
      }
    }
  }
`;
export default ImageSection;
