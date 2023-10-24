import {
  SliderSwiper,
  TittleReviews,
  RevievBox,
  FirstBox,
  UserName,
  UserAvatar,
  StarsBox,
  TextOpinion,
  Container,
  ReviewContainer,
  Rat,
  WrapperBtn,
  PrevBtn,
  NextBtn,
  DefaultText,
} from './ReviewsSlider.styled';
import arrowRight from '../../images/svg/arrowRight.svg';
import arrowLeft from '../../images/svg/arrowLeft.svg';
import { useRef, useEffect, useState } from 'react';
import { getRewievs } from './apiGetRewievs';
import defaultUser from '../../images/defaultAvatar.png';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const slideSettings = {
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      },
    },
  ],
};

export const ReviewsSlider = () => {
  const [reviewsData, setReviews] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await getRewievs();
      setReviews(response);
    })();
  }, []);

  const sliderRef = useRef(null);

  const next = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const previous = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  return (
    <>
      <TittleReviews>Reviews</TittleReviews>
      <ReviewContainer>
        <SliderSwiper ref={sliderRef} {...slideSettings}>
          {!reviewsData ? (
            <h3>Loading...</h3>
          ) : reviewsData.length > 0 && reviewsData !== 'error' ? (
            reviewsData.map((item) => {
              return (
                <RevievBox key={item._id}>
                  <Container>
                    <UserAvatar
                      src={
                        item.owner.avatarURL.length === 0
                          ? defaultUser
                          : item.owner.avatarURL
                      }
                      alt="user avatar"
                    ></UserAvatar>
                    <FirstBox>
                      <UserName>{item.owner.userName}</UserName>
                      <StarsBox>
                        <Rat
                          name="hover-feedback"
                          value={item.rating}
                          readOnly
                        />
                      </StarsBox>
                    </FirstBox>
                  </Container>
                  <TextOpinion>{item.text}</TextOpinion>
                </RevievBox>
              );
            })
          ) : reviewsData === 'error' ? (
            <DefaultText>Something was wrong, reload this page</DefaultText>
          ) : (
            <DefaultText>We don&apos;t have any reviews yet.</DefaultText>
          )}
        </SliderSwiper>
      </ReviewContainer>
      {reviewsData.length > 0 && reviewsData !== 'error' && (
        <WrapperBtn>
          <PrevBtn onClick={previous}>
            <img src={arrowLeft} alt="arrowLeft" />
          </PrevBtn>
          <NextBtn onClick={next}>
            <img src={arrowRight} alt="arrowRight" />
          </NextBtn>
        </WrapperBtn>
      )}
    </>
  );
};
