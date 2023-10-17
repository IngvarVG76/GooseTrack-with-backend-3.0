
import { AuthSection } from "../../components/App/AuthSection/AuthSection";
import { Description } from "../../components/App/Description/Description";
import { ReviewsSlider } from "../../components/App/ReviewsSlider/ReviewsSlider";


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
