import { Button } from './StylesButton.js';
import { useDispatch } from 'react-redux';
import { changeTheme } from './themeSlice.jsx';

export default function ChangeThemeButton() {
  const dispatch = useDispatch();
  const handelThemeChange = () => {
    dispatch(changeTheme());
  };

  return (
    <>
      <Button onClick={handelThemeChange}> change theme</Button>
    </>
  );
}
