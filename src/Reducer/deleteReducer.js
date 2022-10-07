import { DELETEEMPLOYEES } from "../Constant/Constant"

let initialData = {
    delete_data:[]
}

export const deleteReducer = (state=initialData,action) => {
    // console.log(state)
    // debugger
    switch(action.type){
        case DELETEEMPLOYEES:
            return{
                ...state,
                delete_data:action.payload
            }
    }
    return state
}