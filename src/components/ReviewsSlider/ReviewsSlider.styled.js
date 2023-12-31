import styled from 'styled-components';
import { Rating } from '@mui/material';
import Slider from 'react-slick';

const Rat = styled(Rating)`
`

const SliderSwiper = styled(Slider)`
margin-left: auto;
margin-right: auto;
@media screen and (max-width: 767px) {
    max-width: 335px;
      }
      @media screen and (min-width: 768px) and (max-width: 1399px) {
        max-width: 580px;
      }
      @media screen and (min-width: 1440px) {
        max-width: 1208px;
        display: flex;
        column-gap: 24px;
      }
`

const RevievBox = styled.div`
border-radius: 8px;
border: 1px solid #1111111A;
padding: 32px 32px 32px 50px;
max-height: 252px;
@media screen and (max-width: 767px) {
    padding: 24px;
    max-width: 335px;
      }
      @media screen and (min-width: 768px) and (max-width: 1399px) {
        max-width: 580px;
        height: 187px;
      }
      @media screen and (min-width: 1440px) {
        max-width: 580px;
        height: 187px;
      }

`

const TittleReviews = styled.h3`
font-family: 'Inter';
text-transform: uppercase;
text-align: center;
font-weight: 700;
font-size: 40px;
line-height: 44px;
margin-bottom: 50px;
color: #3E85F3;

@media screen and (max-width: 767px) {
    font-size: 28px;
line-height: 32px;
margin-bottom: 40px;
margin: 12px;
} 
`

const ReviewContainer = styled.div`

`
const FirstBox = styled.div`

`
const Container = styled.div`
display: flex;
column-gap: 18px;
`

const UserName = styled.h3`
font-family: 'Inter';
font-weight: 700;
font-size: 18px;
line-height: 18px;
margin-bottom: 13px;
color: #343434;
`
const UserAvatar = styled.img`
width: 50px;
height: 50px;
border-radius: 50px;
`
const StarsBox = styled.div`
margin-bottom: 24px;
`
const TextOpinion = styled.p`
font-family: 'Inter';
font-weight: 500;
font-size: 14px;
line-height: 18px;
color: #111111B2;
text-align: start;
overflow: auto;
height: 54px;
@media screen and (max-width: 767px) {
  height: 72px;
} 
`

const WrapperBtn = styled.div`
display: flex;
justify-content: center;
margin-top: 8px;


      @media screen and (min-width: 768px) and (max-width: 1399px) {
        margin-top: 18px;
      }
      @media screen and (min-width: 1440px) {
        margin-left: -22px;
        margin-top: 32px;
      }
`
const PrevBtn = styled.button`
all: initial;
cursor: pointer;
width: 61px;
height: 61px;
display: flex;
justify-content: center;
align-items: center;
transition: transform 0.2s ease-in-out;
@media screen and (max-width: 767px) {
    width: 50px;
    height: 50px;
      }
      &:active {
        transform: translateX(-5px);
      }
`
const NextBtn = styled.button`
all: initial;
cursor: pointer;
width: 61px;
height: 61px;
display: flex;
justify-content: center;
align-items: center;
transition: transform 0.2s ease-in-out;
@media screen and (max-width: 767px) {
    width: 50px;
    height: 50px;
      }
      &:active {
        transform: translateX(5px);
      }
`

const DefaultText = styled.h3`
font-family: 'Inter';
text-align: center;
font-weight: 700;
font-size: 32px;
line-height: 20px;
margin-bottom: 50px;
color: #111111B2;

@media screen and (max-width: 767px) {
    font-size: 18px;
line-height: 16px;
margin-bottom: 40px;
margin: 12px;
} 
`


export {TittleReviews, RevievBox, FirstBox, UserName, UserAvatar, StarsBox, TextOpinion, Container, ReviewContainer, Rat, SliderSwiper, WrapperBtn, PrevBtn, NextBtn, DefaultText}
