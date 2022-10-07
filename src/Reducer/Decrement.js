const Decrement=(state=0,action)=>{
    switch(action.type){
        case 'Decrement':
            return state-action.payload;
            default:
                return state
    }
}

export default Decrement;