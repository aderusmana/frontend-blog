

const initialStateGlobal = {
    
    name: "Ade"
}

const globalReducer = (state = initialStateGlobal, action) => {
     if(action.type ==="UPDATE_NAME"){
        return {
            ...state,
            name: "Rusmana"
        }
    }
    
    return state;
}

export default globalReducer