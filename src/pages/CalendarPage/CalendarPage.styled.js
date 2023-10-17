import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => {
    // console.log('theme : ', theme);

    return theme.colors.primaryBackground;
  }};

  @media screen and (min-width: 375px) {
    width: 335px;
  }

  @media screen and (min-width: 768px) {
    width: 704px;
  }

  @media screen and (min-width: 1440px) {
    width: 1087px;
  }
`;
