import React from 'react'

const FeedbackStats = ({feedback}) => {
    //calc average
    let average = feedback.reduce((acc, cur)=> {
        return acc + cur.rating
    }, 0) / feedback.length;

    average = average.toFixed(1).replace(/[.,]0$/,'');
    return (
        <div className='feedback-stats'>
            <h4>{feedback.length} Reviews</h4>
            <h4>Average Rating: {isNaN(average) ? '' : average}</h4>
        </div>
    )
}

export default FeedbackStats;
