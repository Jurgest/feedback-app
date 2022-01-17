import {createContext, useState } from 'react';
import {v4 as uuidv4} from 'uuid';


const FeedbackContext = createContext();

export const FeedbackProvider = ({children}) => {
    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: 'item from context',
            rating: 10
        },
        {
            id: 2,
            text: 'item from context 2',
            rating: 10
        }
    ]);  

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })
//add feedback with form
    const addFeedback =(newFeedback) =>{
        newFeedback.id =uuidv4();
        setFeedback([newFeedback, ...feedback ])
    };
// delete feedback
    const deleteFeedback = (id) => {
        if(window.confirm('Are you sure you want to delete it?')) {
            setFeedback(feedback.filter((item)=> item.id !== id))
        }}
// edit feedback
    const editFeedback =(item) => {
            setFeedbackEdit({
                item,
                edit: true
            })
        }
//update item
        const updateFeedback = (id, updItem) => {
            setFeedback(feedback.map((item)=>item.id=== id ? {...item,...updItem}: item))
        }

    return <FeedbackContext.Provider
                value={{
                    feedback,
                    deleteFeedback,
                    addFeedback,
                    editFeedback,
                    feedbackEdit,
                    updateFeedback
                }}
            >
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext;