import { useEffect, useState } from 'react';
import { dark, light } from './theme';
import { Button } from './StylesButton.js';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from './themeSlice';

// стаття про зміну теми в style-components
// https://blog.logrocket.com/build-react-theme-switcher-app-styled-components/
// export default function ChangeThemeButton({ HandleThemeChange }) {
//   const [themeValue, SetthemeValue] = useState(light);
//   //   console.log('themeValue: ', themeValue);

//   const [buttonStatus, SetButtonStatus] = useState(false);

//   useEffect(() => {
//     SetthemeValue(() => {
//       return buttonStatus ? SetthemeValue(dark) : SetthemeValue(light);
//     });
//     HandleThemeChange(themeValue);
//   }, [buttonStatus, HandleThemeChange, themeValue]);
//   return (
//     <>
//       <Button onClick={() => SetButtonStatus(!buttonStatus)}>
//         {' '}
//         change theme
//       </Button>
//     </>
//   );
// }
export default function ChangeThemeButton() {
  // const currentTheme = useSelector((state) => state.theme.lightTheme);
  const dispatch = useDispatch();
  const handelThemeChange = () => {
    dispatch(toggleTheme());
  };

  return (
    <>
      <Button onClick={handelThemeChange}> change theme</Button>
    </>
  );
}
