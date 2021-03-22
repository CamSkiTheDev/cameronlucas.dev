import styled from "styled-components";

const Card = styled.div`
  margin: 0.625em 0;
  padding: 0.625em;
  width: 100%;
  max-width: 20.5em;
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 1em;
  box-shadow: 0.25em 0.25em 0.25em rgba(0, 255, 255, 0.1);
  &:hover {
    transform: scale3d(1.05, 1.05, 1.05);
    cursor: default;
  }
  .skill-header {
    margin: 0;
    padding: 0;
    width: 100%;
    display: flex;
    align-items: center;
    i {
      margin: auto 0;
      padding-right: 0.3125em;
      font-size: 2.5em;
      color: ${({ iconColor }) => iconColor};
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      &.fa-python {
        background: linear-gradient(
          135deg,
          rgba(48, 105, 152, 1) 0%,
          rgba(48, 105, 152, 1) 38%,
          rgba(255, 212, 59, 1) 42%
        );
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
    .skill-info {
      display: flex;
      flex-direction: column;
      .skill-title {
        font-weight: 700;
        font-size: 1.25em;
      }
      .skill-level {
        font-weight: 300;
        strong {
          font-weight: 600;
        }
      }
    }
  }
  p {
    margin: 0;
    padding: 0;
    font-weight: 300;
    font-size: 0.75em;
  }
`;

const SkillCard = ({
  skillTitle,
  skillLevel,
  skillDescription,
  iconClass,
  iconColor,
}) => {
  return (
    <Card iconColor={iconColor}>
      <div className="skill-header">
        <i className={iconClass} />
        <div className="skill-info">
          <span className="skill-title">{skillTitle}</span>
          <span className="skill-level">
            <strong>Skill Level:</strong> {skillLevel}
          </span>
        </div>
      </div>
      <p>{skillDescription}</p>
    </Card>
  );
};

export default SkillCard;
