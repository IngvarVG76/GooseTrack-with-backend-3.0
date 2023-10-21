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
  Rat, WrapperBtn, PrevBtn, NextBtn
} from './ReviewsSlider.styled';
import arrowRight from"../../images/svg/arrowRight.svg"
import arrowLeft from"../../images/svg/arrowLeft.svg"
//  import { useGetUserReviewQuery } from '../../redux/reviews/reviewsApi';
import { useRef } from 'react';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const slideSettings = {
  infinite: false,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
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

const DATA = [
  {
    id: 'wjehvwehje',
    owner: {
      avatarURL: '../../images/Description/Mob/Mob_FirstDescription-min.png',
      userName: 'Kate mango',
    },
    raiting: 3,
    text: 'GooseTrack is impressive, the calendar view and filter options make it easy to stay organized and focused. Highly recommended.',
  },
  {
    id: 'wjeh32vwehje',
    owner: {
      avatarURL: '../../images/Description/Mob/Mob_FirstDescription-min.png',
      userName: 'Mango mongo',
    },
    raiting: 2,
    text: 'GooseTrack is impressive, the calendar view and filter options make it easy to stay organized and focused. Highly recommended.',
  },
  {
    id: 'wjehv545wehje',
    owner: {
      avatarURL: '../../images/Description/Mob/Mob_FirstDescription-min.png',
      userName: 'Lemon lite',
    },
    raiting: 4,
    text: 'GooseTrack is impressive, the calendar view and filter options make it easy to stay organized and focused. Highly recommended.',
  },
  {
    id: 'wjehvwehjeh65',
    owner: {
      avatarURL: '../../images/Description/Mob/Mob_FirstDescription-min.png',
      userName: 'Goose alt',
    },
    raiting: 5,
    text: 'GooseTrack is impressive, the calendar view and filter options make it easy to stay organized and focused. Highly recommended.',
  },
  {
    id: 'wjehvwehjede3',
    owner: {
      avatarURL: '../../images/Description/Mob/Mob_FirstDescription-min.png',
      userName: 'Moja jongo',
    },
    raiting: 1,
    text: 'GooseTrack is impressive, the calendar view and filter options make it easy to stay organized and focused. Highly recommended.',
  },
];




export const ReviewsSlider = () => {

    // const { data, error, isLoading } = useGetUserReviewQuery();
    // useEffect(() => {
    //     if (data) {
    //       console.log('Отримані дані:', data);
    //     } else if (error) {
    //       console.error('Помилка запиту:', error);
    //     }
    //   }, [data, error]);

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
        <SliderSwiper
        ref={sliderRef}
          {...slideSettings}
        >
          {DATA.map((item) => {
            return (
              <RevievBox key={item.id}>
                <Container>
                  <UserAvatar
                    src={item.owner.avatarURL}
                    alt="user avatar"
                  ></UserAvatar>
                  <FirstBox>
                    <UserName>{item.owner.userName}</UserName>
                    <StarsBox>
                      <Rat name="hover-feedback" value={item.raiting} readOnly />
                    </StarsBox>
                  </FirstBox>
                </Container>
                <TextOpinion>{item.text}</TextOpinion>
              </RevievBox>
            );
          })}
        </SliderSwiper>

      </ReviewContainer>
      <WrapperBtn>
    <PrevBtn onClick={previous}><img src={arrowLeft} alt="arrowLeft" /></PrevBtn><NextBtn onClick={next}><img src={arrowRight} alt="arrowRight" /></NextBtn>
</WrapperBtn>
    </>
  );
};
