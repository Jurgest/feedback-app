import React from 'react'
import FeedbackItem from './FeedbackItem';

const FeedbackList = ({feedback, handleDelete}) => {
    
    if(!feedback || feedback=== 0 ) {
        return <p>No Feedback Yet</p>
    } else {
    return (

        <div className='feedback-list'>
            {feedback.map((item)=> (
                <FeedbackItem key={item.id} item={item} handleDelete={handleDelete}/>
            ))}
        </div>
    )}
}

export default FeedbackList;
