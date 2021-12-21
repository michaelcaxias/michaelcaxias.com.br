import styled from 'styled-components';

const ProjectsStyle = styled.section`
  display: flex;
  flex-direction: column;
  transition: 0.3s;
  height: 100vh;
  background-color: ${(props) => props.theme.color.secondaryAlternative};
  h1 {
    font-size: 2.5rem;
    color: ${(props) => props.theme.color.text};
  }
  .card {
    background-color: white;
    width: 25rem;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    background-color: ${(props) => props.theme.color.background};
    color: ${(props) => props.theme.color.text};
    box-shadow: 5px 5px ${(props) => props.theme.color.primary};
    .card-heading {
      border-radius: 8px 8px 0 0;
      height: 200px;
      background-size: cover;
      display: flex;
      align-items: flex-end;
      h2 {
        padding: 0.5rem 0.7rem;
        color: black;
        text-shadow: 1px 1px 1px ${(props) => props.theme.color.primary};
      }
    }
    .card-description {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      height: 10rem;
      gap: 1rem;
      padding: 1.5rem;
      .buttons-group {
        display: flex;
        gap: 1rem;
      }
    }
  }
`;

export default ProjectsStyle;
