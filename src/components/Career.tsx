import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Education</h4>
                <h5>Rayat Bahra Institute of Engineering & Nano-Technology</h5>
              </div>
              <h3>2021</h3>
            </div>
            <p>
              Studied core computer science subjects including Data Structures, 
              Software Engineering, and Mobile Application Development while working on real-world mobile app projects.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>React Native Developer</h4>
                <h5>DeftSoft Informatics</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
             Building scalable cross-platform mobile applications using React Native.
Implementing real-time features including chat systems,
 audio/video calling, push notifications, and media sharing. 
 Delivering production-ready mobile apps with optimized performance, clean UI, and seamless API integrations.
            </p>
          </div>
          {/* <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer</h4>
                <h5>Logic Loop</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Building Solid, a proprietary low-code platform using Angular,
              Next.js & NestJS. Delivering production-ready CMS-based projects
              including e-commerce, CRM, and import-export automation systems.
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Career;
