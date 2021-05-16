import Button from "../button";
import styled from "styled-components";

const Card = styled.div`
  margin: 1.25em 0.625em;
  width: 100%;
  max-width: 18.75em;
  overflow: hidden;
  background: #fff;
  border-radius: 0.3125em;
  display: flex;
  flex-direction: column;
  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    object-position: center;
    border-top-left-radius: 0.3125em;
    border-top-right-radius: 0.3125em;
  }
  .project-info {
    padding: 20px 10px;
    flex-grow: 1;
    p {
      font-weight: lighter;
      font-size: 0.85em;
    }
  }
`;

const ProjectCard = ({ imgURL, title, description, stack, buttons }) => {
  return (
    <Card>
      <img src={imgURL} alt={title} draggable={false} />
      <div className="project-info">
        <h3>{title}</h3>
        <p>{description}</p>
        <span>Tech Stack:</span>
        <ul>
          {stack.map((tech) => (
            <li>{tech}</li>
          ))}
        </ul>
      </div>
      {buttons.map((button) => (
        <Button
          buttonBGColor={button.buttonBGColor}
          style={button.style}
          to={button.to}
          target={button.target}
          className="button"
        >
          {button.text}
        </Button>
      ))}
    </Card>
  );
};

export default ProjectCard;
