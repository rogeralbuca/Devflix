import styled from 'styled-components';

export const StepCardGroupContainer = styled.section`
  color: white;
  min-height: 197px;
  margin-left: 5%;
`;

export const ContainerSteps = styled.section`
  margin-bottom: 16px;
  text-decoration: none;
  overflow: hidden;
  color: white;
  flex: 0 0 298px;
  position: relative;
  display: flex;
  align-items: flex-end;
`;

export const SubtitleLink = styled.a`
  margin-left: 16px;
  text-decoration: none;
  transition: opacity .3s;
  &:hover,
  &:focus {
    opacity: .5;
  }
  @media (max-width: 800px) {
    display: block;
    margin-bottom: 16px;
    margin-left: 0;
  }
`;

export const TitleSteps = styled.h3`
  font-style: normal;
  font-weight: normal;
  font-size: 35px;
  line-height: 1;
  margin-bottom: 16px;
  display: inline-block;
  padding: 20px;
  background: ${props => props.color || "red"};
  line-height: 1;
  border-radius: 4px;

  @media (max-width: 800px) {
    font-size: 18px;
    padding: 10px;
  }
`;

export const Step = styled.h1`
  color: var(--white);
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 1;
  margin: 5px;
  display: inline-block;
  padding: 10px;
  line-height: 1;
  border: 2px solid;
  border-radius: 4px;
  text-decoration: none;
  border-color: ${props => props.color || "red"};
  cursor: pointer;
`;
