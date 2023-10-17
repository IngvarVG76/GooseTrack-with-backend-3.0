import styled from 'styled-components';



const TittleReviews = styled.h3`
font-family: inherit sans-serif;
text-align: center;
font-weight: 700;
font-size: 40px;
line-height: 44px;
margin-bottom: 50px;
color: var(--color-task-low-priority);

@media screen and (max-width: 767px) {
    font-size: 28px;
line-height: 32px;
margin-bottom: 40px;
} 
`

const RevievContainer = styled.div`
border-radius: 8px;
border: 1px;
border-color: black;
padding: 32px 32px 32px 50px;
width: 580px;
margin-left: auto;
margin-right: auto;

@media screen and (max-width: 767px) {
padding: 24px;
width: 335px;
} 


`
const RewievBox = styled.div`

`

const UserName = styled.h3`
font-family: inherit sans-serif;
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
font-weight: 500;
font-size: 14px;
line-height: 18px;
color: #111111B2;
`


export {TittleReviews, RevievContainer, RewievBox, UserName, UserAvatar, StarsBox, TextOpinion}