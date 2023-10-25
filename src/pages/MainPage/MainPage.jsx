import { AuthSection } from "../../components/AuthSection/AuthSection";
import { Description } from "../../components/Description/Description"; 
import { ReviewsSlider } from "../../components/ReviewsSlider/ReviewsSlider"; 
import { Footer } from "../../components/Footer/Footer";
import { useState } from "react";
import { useCallback } from "react";

export const MainPage = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const onClickModal = useCallback(() => {
    setModalOpen(!modalOpen);

    !modalOpen
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'auto');
  }, [modalOpen]);

  return (
    <div>
      <AuthSection />
      <Description />
      <ReviewsSlider />
      <Footer onClickModal={onClickModal} modal={modalOpen} />
    </div>
  );
};

export default MainPage;
