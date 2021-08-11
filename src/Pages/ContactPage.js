import React, { useState } from "react";
import styled from "styled-components";
import { MainLayout, InnerLayout } from "../styles/Layouts";
import Title from "../Components/Title";
import PrimaryButton from "../Components/PrimaryButton";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import { LinkedIn } from "@material-ui/icons";
import ContactItem from "../Components/ContactItem";

function ContactPage() {
  const phone = <PhoneIcon />;
  const email = <EmailIcon />;
  const linkedin = <LinkedIn />;
  const [data, setData] = useState({
    name: "",
    emailId: "",
    subject: "",
    message: "",
  });

  const { name, emailId, subject, message } = data;

  const postData = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://v1.nocodeapi.com/himani/google_sheets/OTiuPkytKtPrSuTy?tabId=sheet1",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify([[name, emailId, subject, message]]),
        }
      );
      const res = await response.json();
      console.log(name, emailId, subject, message);
      if (res.error) {
        return alert("Unable to send! try again");
      }

      alert("Successfully sent");
      setData({ name: "", emailId: "", subject: "", message: "" });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <MainLayout>
      <Title title={"Contact"} span={"Contact"} />
      <ContactPageStyled>
        <InnerLayout className={"contact-section"}>
          <div className="left-content">
            <div className="contact-title">
              <h4>Get In Touch</h4>
            </div>
            <form className="form">
              <div className="form-field">
                <label htmlFor="name">Enter your name*</label>
                <input
                  type="text"
                  id="name"
                  value={data.name}
                  onChange={(e) => setData({ ...data, name: e.target.value })}
                />
              </div>
              <div className="form-field">
                <label htmlFor="email">Enter your email*</label>
                <input
                  type="email"
                  id="email"
                  value={data.emailId}
                  onChange={(e) =>
                    setData({ ...data, emailId: e.target.value })
                  }
                />
              </div>
              <div className="form-field">
                <label htmlFor="subject">Enter your subject</label>
                <input
                  value={data.subject}
                  type="text"
                  id="subject"
                  onChange={(e) =>
                    setData({ ...data, subject: e.target.value })
                  }
                />
              </div>
              <div className="form-field">
                <label htmlFor="text-area">Enter your Message*</label>
                <textarea
                  value={data.message}
                  onChange={(e) =>
                    setData({ ...data, message: e.target.value })
                  }
                  name="textarea"
                  id="textarea"
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
              <div className="form-field f-button">
                <PrimaryButton title={"Send"} onClick={(e) => postData(e)} />
              </div>
            </form>
          </div>
          <div className="right-content">
            <ContactItem
              title={"Phone"}
              icon={phone}
              cont1={"8826239897"}
              linkto={"tel:8826239897"}
            />
            <ContactItem
              title={"Email"}
              icon={email}
              linkto={"mailto:himanigulati2001@gmail.com"}
              cont1={"himanigulati2001@gmail.com"}
            />
            <ContactItem
              title={"LinkedIn"}
              icon={linkedin}
              linkto={"https://www.linkedin.com/in/himani-gulati01/"}
              cont1={"https://www.linkedin.com/in/himani-gulati01/"}
            />
          </div>
        </InnerLayout>
      </ContactPageStyled>
    </MainLayout>
  );
}

const ContactPageStyled = styled.section`
  .contact-section {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 2rem;
    @media screen and (max-width: 978px) {
      grid-template-columns: repeat(1, 1fr);
      .f-button {
        margin-bottom: 3rem;
      }
    }
    .right-content {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      @media screen and (max-width: 502px) {
        width: 70%;
      }
    }
    .contact-title {
      h4 {
        color: var(--white-color);
        padding: 1rem 0;
        font-size: 1.8rem;
      }
    }
    .form {
      width: 100%;
      @media screen and (max-width: 502px) {
        width: 100%;
      }
      .form-field {
        margin-top: 2rem;
        position: relative;
        width: 100%;
        label {
          position: absolute;
          left: 20px;
          top: -19px;
          display: inline-block;
          background-color: var(--background-dark-color);
          padding: 0 0.5rem;
          color: inherit;
        }
        input {
          border: 1px solid var(--border-color);
          outline: none;
          background: transparent;
          height: 50px;
          padding: 0 15px;
          width: 100%;
          color: inherit;

          :focus {
            background-color: var(--background-dark-grey);
          }
        }
        textarea {
          background-color: transparent;
          border: 1px solid var(--border-color);
          outline: none;
          color: inherit;
          width: 100%;
          padding: 0.8rem 1rem;

          :focus {
            background-color: var(--background-dark-grey);
          }
        }
      }
    }
  }
`;

export default ContactPage;
