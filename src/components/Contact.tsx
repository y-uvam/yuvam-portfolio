import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:yuvamdhanda975@gmail.com" data-cursor="disable">
                yuvamdhanda975@gmail.com
              </a>
            </p>
            <h4>Education</h4>
            <p>Btech in Computer Science and Engineering</p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/y-uvam"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/yuvam-d-797933224"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
            {/* <a
              href="https://www.instagram.com/therajeshchityal"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Instagram <MdArrowOutward />
            </a> */}
          </div>
          {/* <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Yuvam Dhanda</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Contact;
