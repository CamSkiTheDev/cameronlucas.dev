import styled from "styled-components";
import Button from "../../components/button";
import Layout from "../../components/layout";
import SkillCard from "../../components/skillCard";
import TypeWriter from "../../components/typewriter";

const Main = styled.main`
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;

  .landing-section {
    margin: 0 auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .img-container {
      margin: 10vh auto;
      width: 16.625em;
      height: 16.625em;
      display: flex;
      justify-content: center;
      align-items: center;
      background: linear-gradient(
        90deg,
        rgba(0, 255, 255, 1) 0%,
        rgba(0, 255, 0, 1) 100%
      );
      border-radius: 100%;
      align-self: center;
      animation: spin 8s linear infinite;
      img {
        width: 98%;
        height: 98%;
        object-fit: cover;
        object-position: center;
        border-radius: 100%;
        animation: spin 8s linear infinite reverse;
      }
    }

    .button-container {
      margin: 1.25em auto;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }

    .learn-more {
      margin: 0.625em auto;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: #fff;
      i {
        margin: 0.625em auto;
      }
    }
  }

  .skills-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h2 {
      margin: 2.5em auto 0.625em;
      color: #fff;
      text-align: center;
      font-size: 2.125em;
      font-family: "NTB";
    }
    .skills-container {
      margin: 0 auto;
      padding: 0.625em 0;
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
    }
  }

  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
`;

const LandingPage = () => {
  return (
    <Layout>
      <Main className="wrapper">
        <section className="landing-section">
          <div className="img-container">
            <img src="/assets/images/headshot.jpg" alt="" />
          </div>
          <TypeWriter />
          <div className="button-container">
            <Button
              to={{
                pathname:
                  "https://www.linkedin.com/in/cameron-lucas-68a27217a/",
              }}
              buttonBGColor="#2867B2"
              target="_blank"
            >
              <i className="fab fa-linkedin" />
              <span>Linkedin</span>
            </Button>
            <Button
              to={{ pathname: "https://twitter.com/SiteitSolutions" }}
              buttonBGColor="#1DA1F2"
              target="_blank"
            >
              <i className="fab fa-twitter" />
              <span>Twitter</span>
            </Button>
            <Button
              to={{ pathname: "https://youtube.com/c/thelifeofadev" }}
              buttonBGColor="#FF0000"
              target="_blank"
            >
              <i className="fab fa-youtube" />
              <span>Youtube</span>
            </Button>
            <Button
              to={{ pathname: "https://github.com/CamSkiTheDev" }}
              buttonBGColor="#333"
              target="_blank"
            >
              <i className="fab fa-github" />
              <span>Github</span>
            </Button>
          </div>
          <div className="learn-more">
            <span>Learn More About Me</span>
            <i className="fas fa-chevron-down" />
          </div>
        </section>
        <section className="skills-section">
          <h2>Skills</h2>
          <div className="skills-container">
            <SkillCard
              iconClass="fab fa-react"
              iconColor="#61dbfb"
              skillTitle="ReactJS"
              skillLevel="Jedi Master"
              skillDescription="React is an open-source, front end, JavaScript library for building user interfaces or UI components."
            />
            <SkillCard
              iconClass="fab fa-node-js"
              iconColor="#68A063"
              skillTitle="NodeJS"
              skillLevel="Jedi Knight"
              skillDescription="Node.js is an open-source, cross-platform, back-end JavaScript runtime environment."
            />
            {/* <SkillCard
              iconClass="fab fa-python"
              iconColor="#306998"
              skillTitle="Python"
              skillLevel="Padawan"
              skillDescription="Python is an interpreted, high-level and general-purpose programming language."
            />
            <SkillCard
              iconClass="icon-ruby"
              iconColor="#A91401"
              skillTitle="Ruby"
              skillLevel="Padawan"
              skillDescription="Ruby is an interpreted, high-level, general-purpose programming language."
            /> */}
            <SkillCard
              iconClass="icon-mongodb"
              iconColor="#4DB33D"
              skillTitle="MongoDB (noSQL)"
              skillLevel="Jedi Knight"
              skillDescription="MongoDB is a document-oriented noSQL database used for high volume data storage."
            />
            <SkillCard
              iconClass="fab fa-git-alt"
              iconColor="#bd2c00"
              skillTitle="Git"
              skillLevel="Jedi Master"
              skillDescription="Git is software for tracking changes in any set of files, usually used for collaboratively developing source code."
            />
            <SkillCard
              iconClass="icon-docker"
              iconColor="#0db7ed"
              skillTitle="Docker"
              skillLevel="Padawan"
              skillDescription="Docker is a platform that use OS-level virtualization to deliver software in packages called containers."
            />
            <SkillCard
              iconClass="icon-nginx-alt"
              iconColor="#009639"
              skillTitle="Nginx"
              skillLevel="Jedi Knight"
              skillDescription="Nginx is a web server that can also be used as a reverse proxy, load balancer, mail proxy and HTTP cache."
            />
            <SkillCard
              iconClass="fab fa-aws"
              iconColor="#ff9900"
              skillTitle="Amazon Web Services"
              skillLevel="Padawan"
              skillDescription="AWS is a secure cloud services platform, offering compute power, database storage, and more."
            />
          </div>
        </section>
      </Main>
    </Layout>
  );
};

export default LandingPage;
