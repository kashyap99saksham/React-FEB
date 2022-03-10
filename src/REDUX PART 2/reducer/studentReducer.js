const initialState = [ ]

const studentReducer = (state = initialState, action) => {

    switch (action.type) {
        case "ADD_STUDENT":
            return [ ...state ,action.payload  ]
    
        default:
            return state;
            
    }
}

export default studentReducer