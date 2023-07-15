import React, { useState } from "react";
import PageHeader from "./PageHeader";
import MapIcon from "@mui/icons-material/Map";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import SendIcon from "@mui/icons-material/Send";

const Contact = (props) => {
  const date = new Date().getFullYear();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");

  const handleInputName = (e) => {
    setName(e.target.value);
  };
  const handleInputEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleInputSubject = (e) => {
    setSubject(e.target.value);
  };
  const handleInputBody = (e) => {
    setBody(e.target.value);
  };

  const handleSubmit = () => {
    const data = {
      name: name,
      email: email,
      subject: subject,
      body: body,
    };

    console.log(data);
    fetch(process.env.REACT_APP_API_URI, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
    setName("");
    setEmail("");
    setSubject("");
    setBody("");
  };
  return (
    <section id="contact-page">
      <div id="contact" className="contact page">
        <PageHeader
          frontTitle="GET IN"
          frontTitleSecondaryColor="TOUCH"
          rearTitle="CONTACT"
        />
        <div className="contact-container">
          <h3>
            Feel free to get in touch with me. I am always open to discussing
            new projects, creative ideas or opportunities to be part of your
            visions.
          </h3>
          <div className="left">
            <div className="contacts">
              <div className="contact">
                <EmailIcon className="contact-icon" />
                <a
                  href="mailto:amanswarnakar2002@gmail.com"
                  className="contact-details"
                >
                  <h4>Mail me</h4>
                  <p>amanswarnakar2002@gmail.com</p>
                </a>
              </div>
              <div className="contact">
                <PhoneIcon className="contact-icon" />
                <a href="tel:9564829082" className="contact-details">
                  <h4>Call me</h4>
                  <p>+91 9564829082</p>
                </a>
              </div>
              <div className="contact">
                <MapIcon className="contact-icon" />
                <div className="contact-details">
                  <h4>Address</h4>
                  <p>
                    Army Institute of Technology, Pune <br />
                    Alandi Road, Dighi Hills <br /> Pune - 411015 <br />{" "}
                    Maharashtra, India
                  </p>
                </div>
              </div>
            </div>
            <div className="footers">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/amanswarnakar/"
                className="icon"
              >
                <LinkedInIcon />
              </a>
              <a
                target="_blank"
                href="https://www.github.com/amanswarnakar"
                className="icon"
              >
                <GitHubIcon />
              </a>
            </div>
          </div>
          <div className="right">
            <form className="form" id="form">
              <input
                className="contact-input w50"
                onChange={handleInputName}
                type="text"
                name="name"
                id="name"
                value={name}
                placeholder="Your name"
                required
                autoComplete="off"
              />
              <input
                className="contact-input w50"
                onChange={handleInputEmail}
                type="email"
                name="email"
                id="email"
                value={email}
                placeholder="Your email"
                required
                autoComplete="off"
              />
              <input
                className="contact-input w100"
                onChange={handleInputSubject}
                type="text"
                name="subject"
                id="subject"
                value={subject}
                placeholder="Your subject"
                required
                autoComplete="off"
              />
              <textarea
                className="contact-input w100 large-input"
                onChange={handleInputBody}
                type="text"
                name="body"
                id="body"
                value={body}
                placeholder="Your message"
                required
                autoComplete="off"
              />
            </form>
            <div onClick={handleSubmit} className="submit-btn">
              Send
              <SendIcon />
            </div>
          </div>
        </div>
        <div className="footer" style={{ letterSpacing: 1 }}>
          Aman Swarnakar&nbsp;&copy;&nbsp;{date}
        </div>
      </div>
    </section>
  );
};

export default Contact;
