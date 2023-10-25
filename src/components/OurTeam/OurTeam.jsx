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

const teamMembers = [
  {
    name: 'Maksym Stepanenko',
    role: 'Team Lead Backend',
    githubLink: 'https://github.com/MaksymStepanenko',
    photoLink: './src/images/team/Stepanenko.png',
  },
  {
    name: 'Igor Grybanov',
    role: 'Team Lead Frontend',
    githubLink: 'https://github.com/IngvarVG76',
    photoLink: './src/images/team/Grybanov.png',
  },
  {
    name: 'Yuliia Yehorova',
    role: 'Scrum Master',
    githubLink: 'https://github.com/YYuliia1102',
    photoLink: './src/images/team/Yehorova.png',
  },
  {
    name: 'Yuliia Yehorova',
    role: 'Backend developer',
    githubLink: 'https://github.com/YYuliia1102',
    photoLink: './src/images/team/Yehorova.png',
  },
  {
    name: 'Yaroslav Zamrii',
    role: 'Backend developer',
    githubLink: 'https://github.com/YaroslavZamrii',
    photoLink: './src/images/team/nophoto.png',
  },
  {
    name: 'Julia Tarasenko',
    role: 'Frontend developer',
    githubLink: 'https://github.com/JuliaTarasenko00',
    photoLink: './src/images/team/Tarasenko.png',
  },
  {
    name: 'Iryna Artymuk',
    role: 'Frontend developer',
    githubLink: 'https://github.com/Iryna-Artymuk',
    photoLink: './src/images/team/Artymuk.png',
  },
  {
    name: 'Volodymyr Pliuto',
    role: 'Frontend developer',
    githubLink: 'https://github.com/VovaPliuto',
    photoLink: './src/images/team/Pliuto.png',
  },
  {
    name: 'Oleg Podlesny',
    role: 'Frontend developer',
    githubLink: 'https://github.com/SpaceProdigy',
    photoLink: './src/images/team/Podlesny.png',
  },
  {
    name: 'Sergey Kravchenko',
    role: 'Frontend developer',
    githubLink: 'https://github.com/Serzh1006',
    photoLink: './src/images/team/nophoto.png',
  },
  {
    name: 'Yurii Ilkevych',
    role: 'Frontend developer',
    githubLink: 'https://github.com/Yurii-Ilkevych',
    photoLink: './src/images/team/Ilkevych.png',
  },
  {
    name: 'Oleksandr Martyniuk',
    role: 'Frontend developer',
    githubLink: 'https://github.com/Derovse',
    photoLink: './src/images/team/nophoto.png',
  },
  {
    name: 'Egor Krechuniak',
    role: 'Frontend developer',
    githubLink: 'https://github.com/Egor4ik2',
    photoLink: './src/images/team/nophoto.png',
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
              <DeveloperImage
                loading="lazy"
                src={member.photoLink}
                alt={member.name}
              />
            </DeveloperCard>
            <DeveloperInfo>
              <h3 className="developers__member">{member.name}</h3>
              <p className="developers__position">{member.role}</p>
            </DeveloperInfo>
            <DeveloperLink
              href={member.githubLink}
              target="_blank"
              rel="noreferrer noopener"
            >
              <GithubIcon src={'./src/images/github.png'}></GithubIcon>
            </DeveloperLink>
          </DeveloperItem>
        ))}
      </DeveloperWraper>
    </TeamContainer>
  );
};
