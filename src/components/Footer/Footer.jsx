import { ModalComponent } from '../Modal/Modal';
import { OurTeam } from '../OurTeam/OurTeam';
import { Container, Text, TeamBtn } from './Footer.styled';

export const Footer = ({ onClickModal, modal }) => {
  return (
    <Container>
      <Text>
        © 2023 | All Rights Reserved | The project was created by&nbsp;
        <TeamBtn onClick={onClickModal}>
        Adamant Team
        </TeamBtn>
      </Text>

      {modal && (
        <ModalComponent onClose={onClickModal}>
          <OurTeam modal={modal} onClickModal={onClickModal} />
        </ModalComponent>
      )}
    </Container>
  );
};
