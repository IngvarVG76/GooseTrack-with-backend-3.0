import { Button } from './StylesButton.js';
import { useDispatch } from 'react-redux';
import { changeTheme } from './themeSlice.jsx';

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
