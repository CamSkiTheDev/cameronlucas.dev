import styled from "styled-components";
import Layout from "../../components/layout";
import Button from "../../components/button";
import ProjectCard from "../../components/projectCard";

const Main = styled.main`
  margin: 3.125em auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  .section-title {
    color: #fff;
    font-weight: 900;
    font-family: "NTB";
    em {
      font-style: normal;
      font-family: "NTB";
      font-weight: lighter;
      color: rgba(var(--JS-Yellow));
    }
  }
  .projects-section {
    margin-bottom: 3.125em;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }
`;

const ProjectPage = () => {
  return (
    <Layout>
      <Main className="wrapper">
        <h1 className="section-title">
          Client <em>Projects</em>
        </h1>
        <section className="projects-section">
          <ProjectCard
            imgURL="/assets/images/enrouteinc.png"
            title="Enroute Logistics"
            description="Enroute Logistics is an Amazon Delivery Service Partner, helping
            Amazon deliver smiles everyday."
            stack={[
              "React (Front-end)",
              "NodeJS API (Strapi.io)",
              "MongoDB(noSQL) Database",
              "CMS (Strapi.io",
            ]}
            buttons={[
              {
                buttonBGColor: "rgba(var(--JS-Yellow))",
                style: { margin: "0", padding: "20px 0", color: "#333" },
                to: { pathname: "https://enrouteinc.com/" },
                target: "_blank",
                text: "Visit Enroute Logistics",
              },
            ]}
          />
          <ProjectCard
            imgURL="/assets/images/myartexperience.png"
            title="My Art Experience"
            description="My Art Experience is an art studio in Parker, CO where adults can relax, enjoy a glass of wine, and create."
            stack={["Shopify", "Custom Theme (Debut-base)", "Google Analytics"]}
            buttons={[
              {
                buttonBGColor: "rgba(var(--JS-Yellow))",
                style: { margin: "0", padding: "20px 0", color: "#333" },
                to: { pathname: "https://myartexperienceco.com/" },
                target: "_blank",
                text: "Visit My Art Experience",
              },
            ]}
          />
          <ProjectCard
            imgURL="/assets/images/suds&scrubs.png"
            title="Suds & Scrubs"
            description="Suds & Scrubs is an auto detailer in Denver, CO. They approched me in need of a mobile first website design."
            stack={["Figma (Design Only)"]}
            buttons={[
              {
                buttonBGColor: "rgba(var(--JS-Yellow))",
                style: { margin: "0", padding: "20px 0", color: "#333" },
                to: {
                  pathname:
                    "https://www.figma.com/file/PvaUZZRRzhyWkNIbeckqV8/SUDS-and-SCRUBS?node-id=0%3A1",
                },
                target: "_blank",
                text: "Visit Suds & Scrubs Design",
              },
            ]}
          />
        </section>
        <h1 className="section-title">
          Personal <em>Projects</em>
        </h1>
        <section className="projects-section">
          <ProjectCard
            imgURL="https://camo.githubusercontent.com/03fa273e37825b2d4b7a509787ab08200efab4628ac0a05be20be22eba20b6d5/68747470733a2f2f692e696d6775722e636f6d2f353349684b4c412e706e67"
            title="Rick & Morty - IGST"
            description="The Intergalactic Government Search Tool is a front-end tool to search and track any known character in the TV Series Rick and Morty. This tool was sponsored by the Galactic Federation and the Council of Ricks. 😎"
            stack={[
              "HTML",
              "CSS",
              "Javascript",
              "JQuery",
              "Rick and Morty API",
            ]}
            buttons={[
              {
                buttonBGColor: "#333",
                style: { margin: "0", padding: "20px 0", color: "#fff" },
                to: {
                  pathname:
                    "https://github.com/CamSkiTheDev/Rick-and-Morty-IGST",
                },
                target: "_blank",
                text: "Visit Project GitHub",
              },
              {
                buttonBGColor: "rgb(var(--JS-Yellow))",
                style: { margin: "0", padding: "20px 0", color: "#333" },
                to: {
                  pathname: "https://rick-and-morty-igst.vercel.app/",
                },
                target: "_blank",
                text: "Visit Live Project",
              },
            ]}
          />
          <ProjectCard
            imgURL="https://camo.githubusercontent.com/f0240d081476d9775505e834d1cc0e029ed60410fe48a7ab5717a9e074d4563d/68747470733a2f2f692e696d6775722e636f6d2f617059385874542e706e67"
            title="Stocky - Inventory Management"
            description="Stocky is a simple inventory management tool, tracking price, cost, quantity, etc."
            stack={["EJS", "Express", "NodeJS", "MongoDB", "Bulma CSS"]}
            buttons={[
              {
                buttonBGColor: "#333",
                style: { margin: "0", padding: "20px 0", color: "#fff" },
                to: {
                  pathname: "https://github.com/CamSkiTheDev/Stocky",
                },
                target: "_blank",
                text: "Visit Project GitHub",
              },
              {
                buttonBGColor: "rgb(var(--JS-Yellow))",
                style: { margin: "0", padding: "20px 0", color: "#333" },
                to: {
                  pathname: "https://stocky-imt.herokuapp.com/auth/login",
                },
                target: "_blank",
                text: "Visit Live Project",
              },
            ]}
          />
        </section>
      </Main>
    </Layout>
  );
};

export default ProjectPage;
