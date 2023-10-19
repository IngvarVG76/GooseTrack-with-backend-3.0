import { useDispatch } from 'react-redux';
import { TbUserCheck, TbCalendarCheck } from 'react-icons/tb';
import { BsBarChart } from 'react-icons/bs';
import { LuLogOut } from 'react-icons/lu';
import { AiOutlineClose } from 'react-icons/ai';
import {
  Backdrop,
  ButtonClose,
  ImageGosse,
  Item,
  Link,
  List,
  LogOut,
  Panel,
  Title,
  WrapperGosse,
  WrapperSideBar,
} from './SideBar.styled';
import goose from '../../images/mainLayout/goose.png';
import { logOut } from '../../redux/auth/operations';

export const SideBar = ({ onClickMenu, nav }) => {
  const dispatch = useDispatch();
  const onClickBackdrop = (event) => {
    if (event.target === event.currentTarget) {
      onClickMenu();
    }
  };

  const items = [
    { name: 'My account', icon: <TbUserCheck />, to: '/account' },
    { name: 'Calendar', icon: <TbCalendarCheck />, to: '/calendar' },
    { name: 'Statistics', icon: <BsBarChart />, to: '/statistics' },
  ];

  const logout = () => {
    dispatch(logOut());
  };

  return (
    <>
      {nav && <Backdrop onClick={onClickBackdrop} />}
      <WrapperSideBar data-isopenmenu={nav.toString()}>
        <div>
          <WrapperGosse>
            <ImageGosse src={goose} alt="gosse" width="36" />
            <Title>GooseTrack</Title>
            <ButtonClose type="button" onClick={onClickMenu}>
              <AiOutlineClose />
            </ButtonClose>
          </WrapperGosse>
          <Panel>User Panel</Panel>
          <nav>
            <List>
              {items.map(({ name, icon, to }) => {
                return (
                  <Item key={name}>
                    <Link activeclassname="active" to={to}>
                      {icon}
                      {name}
                    </Link>
                  </Item>
                );
              })}
            </List>
          </nav>
        </div>
        <LogOut className="log_out" type="button" onClick={logout}>
          Log out <LuLogOut />
        </LogOut>
      </WrapperSideBar>
    </>
  );
};
