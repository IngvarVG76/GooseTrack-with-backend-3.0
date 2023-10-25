import { ModalComponent } from '../Modal/Modal';
import { OurTeam } from '../OurTeam/OurTeam';
import { Container, Text, TeamBtn } from './Footer.styled';

export const Footer = ({ onClickModal, modal }) => {
  return (
    <Container>
      <Text>
        The project was created by
        <TeamBtn type="button" onClick={onClickModal}>
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
