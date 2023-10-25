import styled from 'styled-components';

const DescriptionContainer = styled.div`
padding-top: 64px;
padding-bottom: 64px;
margin-left: auto;
margin-right: auto;
@media screen and (max-width: 767px) {
padding-left: 20px;
padding-right: 20px;
  max-width: 375px;
      }
      @media screen and (min-width: 768px) and (max-width: 1439px) {
        width: 768px;
        padding-left: 32px;
padding-right: 32px;
        
      }
      @media screen and (min-width: 1440px) {
        padding-bottom: 100px;
        width: 1440px;
      }

`
const FirstContainer = styled.div`
margin-bottom: 64px;
@media screen and (min-width: 1440px) {
display: flex;
gap: 228px;
align-items: center;
padding-left: 205px;
padding-right: 128px;
  }
`
const SecondContainer = styled.div`
margin-bottom: 64px;
@media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: row-reverse;
    column-gap: 228px;
    align-items: center;
    padding-left: 128px;
  }
`
const ThirdContainer = styled.div`

@media screen and (min-width: 1440px) {
    display: flex;
column-gap: 228px;
align-items: center;
padding-left: 205px;
padding-right: 128px;
  }
`


const Number = styled.h2`
font-family: 'Inter';
font-weight: 700;
font-size: 104px;
line-height: 104px;
margin-bottom: 20px;
color: #3E85F3;
@media screen and (max-width: 767px) {
    font-weight: 700;
font-size: 80px;
line-height: 80px;
    margin-bottom: 14px;
}

`
const MainTittle = styled.h3`
font-family: 'Inter';
font-weight: 700;
font-size: 40px;
line-height: 44px;
margin-bottom: 14px;
color: #3E85F3;
padding:  6px 18px;
border-radius: 44px;
text-transform: uppercase;

display: inline-block;
background-color: #DCEBF7;
@media screen and (max-width: 767px) {
    padding:  8px 18px;
    font-weight: 700;
font-size: 32px;
line-height: 40px;
    margin-bottom: 16px;
}
`

const Tittle = styled.h3`
font-family: 'Inter';
font-weight: 700;
font-size: 40px;
line-height: 44px;
margin-bottom: 24px;
color: #171820

@media screen and (max-width: 767px) {
    font-weight: 700;
font-size: 32px;
line-height: 40px;
    margin-bottom: 14px;
}
`
const DescriptionP = styled.p`
font-weight: 500;
font-size: 14px;
line-height: 18px;
color: #111111E5;

@media screen and (max-width: 767px) {
    margin-bottom: 40px;
} 
@media screen and (min-width: 768px) and (max-width: 1439px) {
    margin-bottom: 48px;
    width: 275px;
}
`


const ImageDescription = styled.img`
  width: 335px;
  height: 457px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

        @media screen and (min-width: 768px) and (max-width: 1439px) {
            width: 704px;
            height: 700px;
          }
          @media screen and (min-width: 1440px) {
            width: 604px;
            height: 700px;
          }
`;

const TextBox = styled.div`
width: 275px;

@media screen and (min-width: 768px) and (max-width: 1439px) {
  margin-left: auto;
}


`

const Box = styled.div`
width: 275px;
@media screen and (max-width: 767px) {
  width: 335px;
} 
`


export {DescriptionContainer, FirstContainer, SecondContainer, ThirdContainer, Number, MainTittle, Tittle, DescriptionP, ImageDescription, TextBox, Box}
