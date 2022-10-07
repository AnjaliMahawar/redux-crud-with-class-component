import { ADDEMPLOYEES1 } from "../Constant/Constant"

const initialData = {
    add_Data :[]
}
export const addReducer = (state=initialData,action) => {
    switch(action.type){
        case ADDEMPLOYEES1 :
            return{
                ...state,
                add_Data :action.payload
            }
    }
    return state
}