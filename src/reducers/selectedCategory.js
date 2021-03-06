const initialState = "topclothes"; 

const selectedCateReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SELECT_CATEGORY":
            // logic xu ly action 
            state = action.payload
            break;
        default:
            break;
    }
    
    return state; 
}

export default selectedCateReducer;


