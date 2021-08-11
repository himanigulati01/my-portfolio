import React from "react";
import styled from "styled-components";
import Particle from "../Components/Particles";
import { Email, GitHub, LinkedIn } from "@material-ui/icons";

const HomePage = () => {
  return (
    <HomePageStyled>
      <div className="p-particles">
        <Particle />
      </div>
      <div className="typography">
        <h1>
          Hii, I am <span>Himani Gulati.</span>
        </h1>
        <p>
          I am a MERN Stack developer located in New Delhi,India. I occasionally
          take on freelance opportunities.
        </p>
        <div className="icons">
          <a href="https://github.com/himanigulati01" className="icon i-github">
            <GitHub />
          </a>
          <a href="mailto:himanigulati2001@gmail.com" className="icon i-email">
            <Email />
          </a>
          <a
            href="https://www.linkedin.com/in/himani-gulati01/"
            className="icon i-linkedin"
          >
            <LinkedIn />
          </a>
        </div>
      </div>
    </HomePageStyled>
  );
};

const HomePageStyled = styled.header`
  width: 100%;
  height: 100vh;
  position: relative;

  .p-particles {
    position: absolute;
    top: 0;
    left: 0;
  }
  .typography {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 80%;

    .icons {
      display: flex;
      justify-content: center;
      margin-top: 1rem;
      .icon {
        border: 2px solid var(--border-color);
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        transition: all 0.4s ease-in-out;
        cursor: pointer;
        &:hover {
          border: 2px solid var(--primary-color);
          color: var(--primary-color);
        }
        &:not(:last-child) {
          margin-right: 1rem;
        }
        svg {
          margin: 0.5rem;
        }
      }
      .i-email {
        &:hover {
          border: 2px solid red;
          color: red;
        }
      }
      .i-github {
        &:hover {
          border: 2px solid #5f4687;
          color: #5f4687;
        }
      }
    }
  }
`;

export default HomePage;
