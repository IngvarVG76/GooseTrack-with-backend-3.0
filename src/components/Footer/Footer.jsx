import { ModalComponent } from '../Modal/Modal';
import { OurTeam } from '../OurTeam/OurTeam';
import { Container, Text, Team } from './Footer.styled';

export const Footer = ({ onClickModal, modal }) => {
  return (
    <Container>
      <Text>
        The project was created by
        <button type="button" onClick={onClickModal}>
          Adamant Team
        </button>
      </Text>

      {modal && (
        <ModalComponent onClose={onClickModal}>
          <OurTeam modal={modal} onClickModal={onClickModal} />
        </ModalComponent>
      )}
    </Container>
  );
};
