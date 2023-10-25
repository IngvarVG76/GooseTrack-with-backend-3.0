import {
  TeamContainer,
  DeveloperItem,
  DeveloperLink,
  GithubIcon,
  DeveloperCard,
  DeveloperImage,
  DeveloperInfo,
  DevHeader,
  DeveloperWraper,
} from './OurTeam.styled';

import Artymuk from '../../images/team/Artymuk.png';
import Grybanov from '../../images/team/Grybanov.png';
import Ilkevych from '../../images/team/Ilkevych.png';
import Pliuto from '../../images/team/Pliuto.png';
import Stepanenko from '../../images/team/Stepanenko.png';
import Tarasenko from '../../images/team/Tarasenko.png';
import Yehorova from '../../images/team/Yehorova.png';
import Zamriy from '../../images/team/Zamriy.jpg';
import Podlesny from '../../images/team/Podlesny.png';
import nophoto from '../../images/team/nophoto.png';
import github from '../../images/github.png';

const teamMembers = [
  {
    name: 'Maksym Stepanenko',
    role: 'Team Lead Backend',
    githubLink: 'https://github.com/MaksymStepanenko',
    photoLink: Stepanenko,
  },
  {
    name: 'Igor Grybanov',
    role: 'Team Lead Frontend',
    githubLink: 'https://github.com/IngvarVG76',
    photoLink: Grybanov,
  },
  {
    name: 'Yuliia Yehorova',
    role: 'Scrum Master Backend developer',
    githubLink: 'https://github.com/YYuliia1102',
    photoLink: Yehorova,
  },
  {
    name: 'Yaroslav Zamrii',
    role: 'Backend developer',
    githubLink: 'https://github.com/YaroslavZamrii',
    photoLink: Zamriy,
  },
  {
    name: 'Julia Tarasenko',
    role: 'Frontend developer',
    githubLink: 'https://github.com/JuliaTarasenko00',
    photoLink: Tarasenko,
  },
  {
    name: 'Iryna Artymuk',
    role: 'Frontend developer',
    githubLink: 'https://github.com/Iryna-Artymuk',
    photoLink: Artymuk,
  },
  {
    name: 'Volodymyr Pliuto',
    role: 'Frontend developer',
    githubLink: 'https://github.com/VovaPliuto',
    photoLink: Pliuto,
  },
  {
    name: 'Oleg Podlesny',
    role: 'Frontend developer',
    githubLink: 'https://github.com/SpaceProdigy',
    photoLink: Podlesny,
  },
  {
    name: 'Sergey Kravchenko',
    role: 'Frontend developer',
    githubLink: 'https://github.com/Serzh1006',
    photoLink: nophoto,
  },
  {
    name: 'Yurii Ilkevych',
    role: 'Frontend developer',
    githubLink: 'https://github.com/Yurii-Ilkevych',
    photoLink: Ilkevych,
  },
  {
    name: 'Oleksandr Martyniuk',
    role: 'Frontend developer',
    githubLink: 'https://github.com/Derovse',
    photoLink: nophoto,
  },
  {
    name: 'Egor Krechuniak',
    role: 'Frontend developer',
    githubLink: 'https://github.com/Egor4ik2',
    photoLink: nophoto,
  },
];

export const OurTeam = () => {
  return (
    <TeamContainer>
      <DevHeader>Developers</DevHeader>
      <DeveloperWraper>
        {teamMembers.map((member, index) => (
          <DeveloperItem key={index}>
            <DeveloperCard>
              <DeveloperImage src={member.photoLink} alt={member.name} />
              <DeveloperInfo>
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </DeveloperInfo>
              <DeveloperLink
                href={member.githubLink}
                target="_blank"
                rel="noreferrer noopener"
              >
                <GithubIcon src={github}></GithubIcon>
              </DeveloperLink>
            </DeveloperCard>
          </DeveloperItem>
        ))}
      </DeveloperWraper>
    </TeamContainer>
  );
};
