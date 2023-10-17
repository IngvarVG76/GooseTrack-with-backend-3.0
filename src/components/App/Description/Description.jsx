import {DescriptionContainer, FirstContainer, SecondContainer, ThirdContainer, Number, MainTittle, Tittle, DescriptionP, ImageDescription, TextBox} from "./Description.styled"
import { useState, useEffect } from "react"
import firstDescriptionDesk from "../../../images/Description/Desk/Desk_FirstDescription-min.png"
import firstDescriptionDeskTwoX from "../../../images/Description/Desk/Desk@2x_FirstDescription-min.png"
import firstDescriptionDeskThreeX from "../../../images/Description/Desk/Desk@3x_FirstDescription-min.png"
import firstDescriptionTab from "../../../images/Description/Tab/Tab_FirstDescription-min.png"
import firstDescriptionTabTwoX from "../../../images/Description/Tab/Tab@2x_FirstDescription-min.png"
import firstDescriptionTabThreeX from "../../../images/Description/Tab/Tab@3x_FirstDescription-min.png"
import firstDescriptionMob from "../../../images/Description/Mob/Mob_FirstDescription-min.png"
import firstDescriptionMobTwoX from "../../../images/Description/Mob/Mob@3x_FirstDescription-min.png"
import firstDescriptionMobThreeX from "../../../images/Description/Mob/Mob@3x_FirstDescription-min.png"

import secondDescriptionDesk from "../../../images/Description/Desk/Desk_SecondDescription-min.png"
import secondDescriptionDeskTwoX from "../../../images/Description/Desk/Desk@2x_SecondDescription-min.png"
import secondDescriptionDeskThreeX from "../../../images/Description/Desk/Desk@3x_SecondDescription-min.png"
import secondDescriptionTab from "../../../images/Description/Tab/Tab_SecondDescription-min.png"
import secondDescriptionTabTwoX from "../../../images/Description/Tab/Tab@2x_SecondDescription-min.png"
import secondDescriptionTabThreeX from "../../../images/Description/Tab/Tab@3x_SecondDescription-min.png"
import secondDescriptionMob from "../../../images/Description/Mob/Mob_SecondDescription-min.png"
import secondDescriptionMobTwoX from "../../../images/Description/Mob/Mob@2x_SecondDescription-min.png"
import secondDescriptionMobThreeX from "../../../images/Description/Mob/Mob@3x_SecondDescription-min.png"

import thirdDescriptionDesk from "../../../images/Description/Desk/Desk_ThirdDescription-min.png"
import thirdDescriptionDeskTwoX from "../../../images/Description/Desk/Desk@2x_ThirdDescription-min.png"
import thirdDescriptionDeskThreeX from "../../../images/Description/Desk/Desk@3x_ThirdDescription-min.png"
import thirdDescriptionTab from "../../../images/Description/Tab/Tab_SecondDescription-min.png"
import thirdDescriptionTabTwoX from "../../../images/Description/Tab/Tab@2x_ThirdDescription-min.png"
import thirdDescriptionTabThreeX from "../../../images/Description/Tab/Tab@3x_ThirdDescription-min.png"
import thirdDescriptionMob from "../../../images/Description/Mob/Mob_ThirdDescription-min.png"
import thirdDescriptionMobTwoX from "../../../images/Description/Mob/Mob@2x_ThirdDescription-min.png"
import thirdDescriptionMobThreeX from "../../../images/Description/Mob/Mob@3x_ThirdDescription-min.png"


export const Description =()=>{
    const [screenWidthPx, setScreenWidthPx] = useState(window.innerWidth);
    const [screenRatio, setScreenRatio] = useState(window.devicePixelRatio);
    const [suitableFirstImage, setFirstSuitableImage] = useState(firstDescriptionDesk);
    const [suitableSecondImage, setSecondSuitableImage] = useState(secondDescriptionDesk);
    const [suitableThirdImage, setThirdSuitableImage] = useState(thirdDescriptionDesk);

    useEffect(() => {
        if (screenWidthPx <= 767) {
          if (screenRatio == 1) {
            setFirstSuitableImage(firstDescriptionMob)
            setSecondSuitableImage(secondDescriptionMob)
            setThirdSuitableImage(thirdDescriptionMob)
          } else if (screenRatio == 2) {
            setFirstSuitableImage(firstDescriptionMobTwoX)
            setSecondSuitableImage(secondDescriptionMobTwoX)
            setThirdSuitableImage(thirdDescriptionMobTwoX)
          } else {
            setFirstSuitableImage(firstDescriptionMobThreeX)
            setSecondSuitableImage(secondDescriptionMobThreeX)
            setThirdSuitableImage(thirdDescriptionMobThreeX)
          }
        } else if (screenWidthPx >= 768 && screenWidthPx <= 1399) {
          if (screenRatio == 1) {
            setFirstSuitableImage(firstDescriptionTab)
            setSecondSuitableImage(secondDescriptionTab)
            setThirdSuitableImage(thirdDescriptionTab)
          } else if (screenRatio == 2) {
            setFirstSuitableImage(firstDescriptionTabTwoX)
            setSecondSuitableImage(secondDescriptionTabTwoX)
            setThirdSuitableImage(thirdDescriptionTabTwoX)
          } else {
            setFirstSuitableImage(firstDescriptionTabThreeX)
            setSecondSuitableImage(secondDescriptionTabThreeX)
            setThirdSuitableImage(thirdDescriptionTabThreeX)
          }
        } else {
          if (screenRatio == 1) {
            setFirstSuitableImage(firstDescriptionDesk)
            setSecondSuitableImage(secondDescriptionDesk)
            setThirdSuitableImage(thirdDescriptionDesk)
          } else if (screenRatio == 2) {
            setFirstSuitableImage(firstDescriptionDeskTwoX)
            setSecondSuitableImage(secondDescriptionDeskTwoX)
            setThirdSuitableImage(thirdDescriptionDeskTwoX)
          } else {
            setFirstSuitableImage(firstDescriptionDeskThreeX)
            setSecondSuitableImage(secondDescriptionDeskThreeX)
            setThirdSuitableImage(thirdDescriptionDeskThreeX)
          }
        }
    
        const changeScreen = () => {
          setScreenWidthPx(window.innerWidth);
          setScreenRatio(window.devicePixelRatio);
        };
        window.addEventListener('resize', changeScreen);
    
        return () => {
          window.removeEventListener('resize', changeScreen);
        };
      }, [screenWidthPx, screenRatio]);








return <DescriptionContainer>
    <FirstContainer>
    <div>
        <Number>1.</Number>
    <MainTittle>Calendar</MainTittle>
        <Tittle>VIEW</Tittle>
        <DescriptionP>GooseTrack&apos;s Calendar view provides a comprehensive overview of your schedule, displaying all your tasks, events, and appointments in a visually appealing and intuitive layout.</DescriptionP>
        </div>
        <ImageDescription src={suitableFirstImage} alt="image Description Calendar"></ImageDescription>
    </FirstContainer>


<SecondContainer>
<TextBox>
<Number>2.</Number>
        <Tittle>SIDEBAR</Tittle>
        <DescriptionP>GooseTrack offers easy access to your account settings, calendar, and filters. The &ldquo;My Account&ldquo; section allows you to manage your profile information and preferences, while the calendar provides a quick and convenient way to view your upcoming events and tasks.</DescriptionP>
        </TextBox>
        <ImageDescription src={suitableSecondImage} alt="image Description Sidebar"></ImageDescription>
</SecondContainer>


<ThirdContainer>
<div>
<Number>3.</Number>
        <MainTittle>all in</MainTittle>
        <Tittle>ONE</Tittle>
        <DescriptionP>GooseTrack is an all-in-one productivity tool that helps you stay on top of your tasks, events, and deadlines. Say goodbye to scattered to-do lists and hello to streamlined productivity with GooseTrack.</DescriptionP>
        </div>
        <ImageDescription src={suitableThirdImage} alt="image Description One"></ImageDescription>
</ThirdContainer>
</DescriptionContainer>


}