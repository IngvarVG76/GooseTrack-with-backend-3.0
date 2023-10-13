import { useEffect, useState } from 'react';
import { dark, light } from './theme';
import { Button } from './stylesButton,jsx';

// стаття про зміну теми в style-components
// https://blog.logrocket.com/build-react-theme-switcher-app-styled-components/
export default function ChangeThemeButton({ HandleThemeChange }) {
  const [themeValue, SetthemeValue] = useState(light);
  console.log('themeValue: ', themeValue);

  const [buttonStatus, SetButtonStatus] = useState(false);

  const handleThemechange = () => {
    // огорнули все в setTimeout томущо onChange функція синхронна а   SetButtonStatus
    // SetthemeValue
    // асинхронні тому щоб зробити все асинхронно обгорнул в setTimeout з мінімаьною затримкою
    setTimeout(() => {
      SetButtonStatus(!buttonStatus);
    }, 100);
  };
  useEffect(() => {
    SetthemeValue(() => {
      return buttonStatus ? SetthemeValue(dark) : SetthemeValue(light);
    });
    HandleThemeChange(themeValue);
  }, [buttonStatus, HandleThemeChange, themeValue]);
  return (
    <>
      <Button onClick={handleThemechange}> change theme</Button>
    </>
  );
}
