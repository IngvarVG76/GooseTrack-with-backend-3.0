import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 100%;

  background: ${({ theme }) => theme.colors.primaryBackground};
  text-align: center;
  min-height: 100vh;
`;

export const Picture = styled.picture`
margin: 0 auto;


  @media screen and (min-width: 768px) {
  }
`;

export const Img = styled.img`
  max-width: 50%;
  height: auto;
`;