import { AuthSection } from '../../components/AuthSection/AuthSection';
import { Description } from '../../components/Description/Description';
import { ReviewsSlider } from '../../components/ReviewsSlider/ReviewsSlider';

export const MainPage = () => {
  return (
    <div
    // style={{
    //   display: 'flex',
    //   flexDirection: 'column',
    //   alignItems: 'center',
    //   justifyContent: 'center',
    //   minHeight: '100vh',
    //   backgroundColor: 'inherit',
    // }}
    >
      <AuthSection />
      <Description />
      <ReviewsSlider />
    </div>
  );
};

export default MainPage;
