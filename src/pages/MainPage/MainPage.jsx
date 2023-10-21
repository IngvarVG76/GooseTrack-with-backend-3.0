
import { AuthSection } from "../../components/AuthSection/AuthSection";
import { Description } from "../../components/Description/Description"; 
import { ReviewsSlider } from "../../components/ReviewsSlider/ReviewsSlider"; 


export const MainPage = () => {
  return (
    <div
    >
      <AuthSection />
      <Description />
      <ReviewsSlider />

    </div>
  );
};

export default MainPage;
