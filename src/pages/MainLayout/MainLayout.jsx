import { Suspense, useCallback, useState } from 'react';
import { Outlet } from 'react-router';
import { BiMenu } from 'react-icons/bi';
import { Header } from '../../components/Header/Header';
import { SideBar } from '../../components/SideBar/SideBar';
import { Main, Content, OpenMenu, HeaderContainer } from './MainLayout.styled';

const MainLayout = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const onClickModal = useCallback(() => {
    setModalOpen(!modalOpen);

    !modalOpen
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'auto');
  }, [modalOpen]);

  const onClickMenu = useCallback(() => {
    setNavOpen(!navOpen);

    !navOpen
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'auto');
  }, [navOpen]);

  return (
    <Content>
      <HeaderContainer>
        <OpenMenu type="button" onClick={onClickMenu}>
          <BiMenu />
        </OpenMenu>
        <SideBar onClickMenu={onClickMenu} nav={navOpen} />
      </HeaderContainer>
      <Main>
        <Header onClickModal={onClickModal} modal={modalOpen} />
        <Suspense>
          <Outlet />
        </Suspense>
      </Main>
    </Content>
  );
};

export default MainLayout;
