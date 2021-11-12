import React, { useEffect, useContext } from 'react';
import StarRating from './StarRating.jsx';
import ProgressBar from './ProgressBar.jsx';
import ScaleBar from './ScaleBar.jsx';
import axios from 'axios';
import { ReviewContext } from '../ReviewProvider.jsx';

function ReviewLeft({ productId }) {

  // In-line Styling
  const RatingSummary = {
    whiteSpace: 'nowrap',
  }

  const Score = {
    display: 'inline-block',
    // fontSize: '50px',
    fontWeight: 'bold'
  }

  const Stars = {
    display: 'inline-block',
    verticalAlign:'top',
    padding: '20px'

  }
  // Create constance to access context
  const reviewContext = useContext(ReviewContext);

  // API
  const getReviewMeta = () => {
    axios.get(`/reviews/${productId}/meta`)
    .then(res => {
       // Calculate total review and storge result in res.data.reveiwTotal
       res.data.reveiwTotal = Number(res.data.recommended.true || '0') + Number(res.data.recommended.false || '0') ;
       // Calculate rating average and storge result in res.data.avgRating
       res.data.avgRating = parseFloat(((Number(res.data.ratings['1'] || '0') * 1 + Number(res.data.ratings['2'] || '0') * 2 + Number(res.data.ratings['3'] || '0') * 3 + Number(res.data.ratings['4'] || '0') * 4 + Number(res.data.ratings['5'] || '0') * 5) / res.data.reveiwTotal)).toFixed(1);
       console.log('total:', res.data.avgRating)

       // Calculate recommended percentage and storge result in res.data.recommended
       res.data.recommended = Math.round(Number(res.data.recommended.true)/res.data.reveiwTotal * 100)

       // Calculate starBreakdown
       res.data.ratingBreakdown = [Math.round(Number(res.data.ratings['5']|| '0') / res.data.reveiwTotal * 100), Math.round(Number(res.data.ratings['4']|| '0') / res.data.reveiwTotal * 100), Math.round(Number(res.data.ratings['3'|| '0']) / res.data.reveiwTotal * 100), Math.round(Number(res.data.ratings['2']|| '0') / res.data.reveiwTotal * 100), Math.round(Number(res.data.ratings['1']|| '0') / res.data.reveiwTotal * 100)]

      //  for(var key in res.data.characteristics) {
      //   res.data.char[key] = Number(res.data.characteristics.key.value).toFixed(2)
      //  }

      reviewContext.setReviewMeta({...reviewContext.reviewMeta, ...res.data});
    });
  }

  // Hooks to initiate the reviewLeft
  useEffect(() => {
    getReviewMeta();
  }, []);

  return (
    <div style={{marginLeft: '10px'}}>
      <h2 className='list-title'>RATINGS & REVIEWS</h2>
      <div style={RatingSummary}>
        <h1 style={Score}> {reviewContext.reviewMeta.avgRating} </h1>

        <div style={Stars}><StarRating rating={reviewContext.reviewMeta.avgRating} /></div>
      </div>
      <div>{reviewContext.reviewMeta.recommended}% of reviewer recommand this product</div>
      <br></br>
      <div >

        {/* <ProgressBar ratingStar = '1' ratingBreakdown ={reviewContext.reviewMeta.ratingBreakdown[0]}/>
        {console.log('ratingBreakdown', reviewContext.reviewMeta.ratingBreakdown)} */}
        <div style={{lineHeight: '2.3', padding: '0px'}}>
          <div>{reviewContext.reviewMeta.ratingBreakdown ? reviewContext.reviewMeta.ratingBreakdown.map((ratingBreakdown, i) =>
            <ProgressBar ratingBreakdown={ratingBreakdown} key={i} ratingStar= {5 - i} />
          ) : null}</div>
        </div>
      </div>
      <br></br>
      <div>
        { reviewContext.reviewMeta.characteristics ?
          Object.keys(reviewContext.reviewMeta.characteristics).map((charName, i) => (
            <ScaleBar
              character={charName}
              scale={reviewContext.reviewMeta.characteristics[charName]['value']}
              range={reviewContext.reviewMeta.characteristicsRange[charName]}
              key={i} />
          )) : null }
      </div>

    </div>
  );
}


export default ReviewLeft;