import styled from 'styled-components';

const TeamContainer = styled.div`
    padding: 40px 20px;
    max-width: 1000px;
    height: auto;
    display: flex;
    flex-direction: column;
    font-size: 24px;
    align-items: center;
    overflow: hidden;
    overflow-y: auto;
    font-weight: bold;
    background-color: var(--auth-background-color);

`;

const DevHeader = styled.h2`
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 20px;
`;

const DeveloperWraper = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px;
    flex-wrap: wrap;
    gap: 15px;
`;

const DeveloperItem = styled.div`
    background: var(--main-background-color);
    padding: 5px;
    border-radius: 5px;

`;

const DeveloperLink = styled.a`
  text-decoration: none;
`;

const DeveloperCard = styled.div`
    position: relative;
    width: 130px;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
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
    height: 80px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

`;

const DeveloperName = styled.h3`
    font-size: 18px;
    font-weight: bold;
    text-align: center;
    color: var(--title-text-main-color);

`;

const DeveloperRole = styled.p`
    font-size: 14px;
    color: var(--secondary-text-color); 
    text-align: center;

`;



const GithubIcon = styled.img`
    position: absolute;
    width: 35px;
    height: auto;
    top: -5px;
    right: -5px;
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
    DeveloperInfo,
    DeveloperName,
    DeveloperRole
}