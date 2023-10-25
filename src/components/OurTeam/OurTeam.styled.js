import styled from 'styled-components';

const TeamContainer = styled.div`
width: auto;
height: auto;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin: 40px 20px;
    font-size: 24px;
    font-weight: bold;
`;

const DevHeader = styled.h2`
font-size: 40px;

`

const DeveloperWraper = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;

`;

const DeveloperItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const DeveloperLink = styled.a`
  text-decoration: none;
`;

const DeveloperCard = styled.div`
  margin-right: 10px;
`;

const DeveloperImage = styled.img`
  width: 100px; 
  height: 100px; 

`;

const DeveloperInfo = styled.div`
display: flex;
flex-direction: column;
  h3 {
    font-size: 18px;
    font-weight: bold;
  }

  p {
    font-size: 14px;
    color: #777; 
  }
`;

const GithubIcon = styled.img`
  /* font-size: 24px; */
  width: 40px;
  height: 40px;
  /* fill: black; */
`;


export {
    TeamContainer,
    DevHeader,
    DeveloperWraper,
    DeveloperItem,
    DeveloperLink,
    GithubIcon,
    DeveloperCard,
    DeveloperImage,
    DeveloperInfo
}