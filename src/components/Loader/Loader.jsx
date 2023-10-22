import ClockLoader from 'react-spinners/ClockLoader';

import { Container, Picture, Img,} from './Loader.styled';
import images from './image';

const { phone, tablet, desktop } = images;

export const Loader = () => {

  return (
    <Container>
      <Picture>
        <source
          type="image/webp"
          media="(max-width: 767px)"
          srcSet={`${phone.notFoundPhonewebp} 1x, ${phone.notFoundPhonewebp2x} 2x`}
        />
        <source
          type="image/webp"
          media="(max-width: 1439px)"
          srcSet={`${tablet.notFoundTabletwebp} 1x, ${tablet.notFoundTabletwebp2x} 2x`}
        />
        <source
          type="image/webp"
          media="(min-width: 1440px)"
          srcSet={`${desktop.notFoundDesktopwebp} 1x, ${desktop.notFoundDesktopwebp2x} 2x`}
        />
        <source
          type="image/png"
          media="(max-width: 767px)"
          srcSet={`${phone.notFoundPhonepng} 1x, ${phone.notFoundPhonepng2x} 2x`}
        />
        <source
          type="image/png"
          media="(max-width: 1439pxpx)"
          srcSet={`${tablet.notFoundTabletpng} 1x, ${tablet.notFoundTabletpng2x} 2x`}
        />
        <source
          type="image/png"
          media="(min-width: 1440px)"
          srcSet={`${desktop.notFoundDesktoppng} 1x, ${desktop.notFoundDesktoppng2x} 2x`}
        />
        <Img src={`${phone.notFoundPhonepng}`} alt="ErrorImage" />
      </Picture>
      <ClockLoader
        color="rgba(62, 133, 243, 1)"
        speedMultiplier={2}
        size={70}
        loading
      />
    </Container>
  );
};
