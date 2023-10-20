import styled from 'styled-components';

export const Wrapper = styled.div`
  /* min-height: 311px; */
  overflow-x: scroll;

  &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.scrollBg};
    border-radius: 12px;
  }
`;

export const WrapperTasks = styled.div`
  margin: 14px 0;

  display: flex;
  flex: 1 1 0%;

  width: 1087px;
  max-height: 435px;
  gap: 30px;
  @media screen and (min-width: 768px) {
    gap: 16px;
  }
  @media screen and (min-width: 1440px) {
    gap: 27px;
  }
`;
