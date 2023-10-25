import styled from 'styled-components';

const TeamContainer = styled.div`
padding: 40px 20px;
max-width: 1000px;
height: auto;
display: flex;
flex-direction: column;
align-items: center;
    font-size: 24px;
    font-weight: bold;
    overflow-y: auto;
`;

const DevHeader = styled.h2`
font-size: 30px;
font-weight: bold;
margin-bottom: 20px;

`

const DeveloperWraper = styled.div`
display: flex;
justify-content: center;
padding: 5px;
flex-wrap: wrap;
gap: 15px;

`;

const DeveloperItem = styled.div`

`;

const DeveloperLink = styled.a`
  text-decoration: none;
`;

const DeveloperCard = styled.div`
position: relative;
width: 130px;
display: flex;
flex-direction: column;
align-items: center;

`;

const DeveloperImage = styled.img`
  width: 100px; 
  height: 100px; 
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 10px;
`;

const DeveloperInfo = styled.div`
display: flex;
flex-direction: column;
  h3 {
    font-size: 18px;
    font-weight: bold;
    text-align: center;
    /* margin-bottom: 10px; */

  }

  p {
    font-size: 14px;
    color: #777; 
    text-align: center;
    height: 35px;

  }
`;

const GithubIcon = styled.img`
position: absolute;
  width: 35px;
  height: auto;
    top: -10px;
  right: -10px;
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