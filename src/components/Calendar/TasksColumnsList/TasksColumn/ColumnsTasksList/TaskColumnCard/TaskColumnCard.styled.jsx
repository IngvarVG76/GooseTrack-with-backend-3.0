import { styled } from 'styled-components';

export const AreaEdit = styled.ul`
  display: flex;
  gap: 8px;
`;

export const ContainerColumnCard = styled.div`
  position: relative;
  width: 100%;
  padding: 14px 14px 18px;
  border-radius: 8px;
  margin-top: 24px;
  margin-bottom: 14px;
  background-color: ${({ theme }) => theme.colors.primaryBackground};
  border: ${({ theme }) => theme.colors.borderColorSideBar};
  // bordercalendarcolor: 'rgba(220,	227,	229, 0.80)';
`;

export const TextCard = styled.div`
  margin-bottom: 28px;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.25;
  color: ${({ theme }) => theme.colors.text};
`;

export const ContainerAvatar = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  overflow: hidden;
  border: 2px solid rgb(62, 133, 243);
  border-radius: 50%;
`;

export const ContainerData = styled.div`
  display: flex;
  align-items: end;
  gap: 8px;
  justify-content: space-between;
`;

export const WrapperData = styled.div`
  display: flex;
  align-items: end;
  gap: 8px;
  justify-content: space-between;
`;

const priorityColor = { LOW: '#3E85F3', MEDIUM: '#F3B249', HIGH: '#EA3D65' };

export const Priority = styled.p`
  padding: 2px 12px;
  font-size: 12px;
  font-weight: 600;
  line-height: 1.25;
  color: rgb(255, 255, 255);
  background-color: ${({ $priority }) => priorityColor[$priority]};
  border-radius: 4px;
`;

export const ControlBtn = styled.button`
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 16px;
  height: 16px;
  border: none;
  fill: none;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.backgroundColorTaskModal};

  & svg {
    background-color: ${({ theme }) => theme.colors.primaryBackground};
  }

  stroke: ${({ theme }) => theme.colors.arrowIconColor};
  &:hover,
  &:focus {
    stroke: #3e85f3;
  }
`;
