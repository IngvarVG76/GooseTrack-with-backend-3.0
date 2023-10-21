import { TittleReviews, RevievContainer, RewievBox, UserName, UserAvatar, StarsBox, TextOpinion} from "./ReviewsSlider.styled"




export const ReviewsSlider =()=>{


    return <>
<TittleReviews>Reviews</TittleReviews>
<RevievContainer>
<UserAvatar></UserAvatar>
<RewievBox>
<UserName>User Name</UserName>
<StarsBox></StarsBox>
<TextOpinion>GooseTrack is impressive, the calendar view and filter options make it easy to stay organized and focused. Highly recommended.</TextOpinion>
</RewievBox>
    
</RevievContainer>

    </>
}