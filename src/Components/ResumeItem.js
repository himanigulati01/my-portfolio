import React from "react";
import styled from "styled-components";
import { ImPointRight } from "react-icons/im";

function ResumeItem({ year, title, subTitle, text, text1, text2, text3 }) {
  return (
    <ResumeItemStyled>
      <div className="left-content">
        <p>{year}</p>
      </div>
      <div className="right-content">
        <h5>{title}</h5>
        <h6>{subTitle}</h6>
        <span>
          <ImPointRight />
          {"\xa0\xa0"}
        </span>
        <p>{text}</p>
        {text1 && (
          <>
            <span>
              <ImPointRight />
              {"\xa0\xa0"}
            </span>{" "}
            <p>{text1}</p>
            <span>
              <ImPointRight />
              {"\xa0\xa0"}
            </span>{" "}
            <p>{text2}</p>
            <span>
              <ImPointRight />
              {"\xa0\xa0"}
            </span>{" "}
            <p>{text3}</p>
          </>
        )}
      </div>
    </ResumeItemStyled>
  );
}

const ResumeItemStyled = styled.div`
  display: flex;
  @media screen and (max-width: 421px) {
    p,
    h5,
    h6 {
      font-size: 80%;
    }
  }
  &:not(:last-child) {
    padding-bottom: 3rem;
  }
  .left-content {
    width: 20%;
    padding-left: 20px;
    position: relative;
    &::before {
      content: "";
      position: absolute;
      left: -10px;
      top: 5px;
      height: 15px;
      width: 15px;
      border-radius: 50%;
      border: 2px solid var(--border-color);
      background-color: var(--background-dark-color);
    }
    p {
      display: inline-block;
    }
  }
  .right-content {
    padding-left: 5rem;
    position: relative;
    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 15px;
      height: 2px;
      width: 3rem;
      background-color: var(--border-color);
    }
    h5 {
      color: var(--primary-color);
      font-size: 2rem;
      padding-bottom: 0.4rem;
    }
    h6 {
      padding-bottom: 0.6rem;
      font-size: 1.5rem;
    }
    p {
      margin-bottom: 10px;
    }
    span {
      float: left;
    }
  }
`;
export default ResumeItem;
