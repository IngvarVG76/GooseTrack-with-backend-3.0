import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => {
    console.log('theme : ', theme);

    return theme.colors.primaryBackground;
  }};
`;
