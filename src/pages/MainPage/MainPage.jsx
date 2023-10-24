import { AuthSection } from "../../components/AuthSection/AuthSection";
import { Description } from "../../components/Description/Description"; 
import { ReviewsSlider } from "../../components/ReviewsSlider/ReviewsSlider"; 
import { Footer } from "../../components/Footer/Footer";

export const MainPage = () => {
  return (
    <div
    >
      <AuthSection />
      <Description />
      <ReviewsSlider />
      <Footer/>
    </div>
  );
};

export default MainPage;
