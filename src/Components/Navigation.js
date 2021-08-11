import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import avatar from "../images/avatar.jpg";

function Navigation() {
  return (
    <NavigationStyled>
      <div className="avatar">
        <img src={avatar} alt="" />
      </div>
      <ul className="nav-items">
        <li className="nav-item">
          <NavLink to="/" activeClassName="active-link" exact>
            Home
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink to="/about" activeClassName="active-link" exact>
            About
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/resume" activeClassName="active-link" exact>
            Resume
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/projects" activeClassName="active-link" exact>
            Projects
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink to="/contact" activeClassName="active-link" exact>
            Contact
          </NavLink>
        </li>
      </ul>
      <footer className="footer">
        <p>@2021 My Portfolio</p>
      </footer>
    </NavigationStyled>
  );
}

const NavigationStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  border-right: 1px solid var(--border-color);
  .avatar {
    width: 100%;
    border-bottom: 1px solid var(--border-color);
    text-align: center;
    padding: 2rem 0;
    img {
      width: 80%;
      border-radius: 50%;
      border: 8px solid var(--border-color);
    }
  }
  .nav-items {
    width: 100%;
    text-align: center;
    .active-link {
      background-color: var(--primary-color-light);
      color: white;
    }
    li {
      display: block;
      a {
        display: block;
        padding: 0.75rem 0;
        position: relative;
        text-transform: uppercase;
        transition: all 0.4s ease-in-out;
        font-weight: 600;
        letter-spacing: 1px;
        &:hover {
          cursor: pointer;
          color: var(--white-color);
        }
        &::before {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 50%;
          background-color: var(--primary-color);
          transition: All 0.4s cubic-bezier(1, -0.2, 0.25, 0.95);
          opacity: 0.21;
        }
      }
      a:hover::before {
        width: 100%;
        height: 100%;
      }
    }
  }
  footer {
    border-top: 1px solid var(--border-color);
    width: 100%;
    p {
      padding: 1.3rem 0;
      font-size: 1.1rem;
      display: block;
      text-align: center;
    }
  }
`;
export default Navigation;
