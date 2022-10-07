const Increment=(state=20,action)=>{
    switch(action.type){
        case 'Increment':
            return state+action.payload;
            default:
                return state
    }
}

export default Increment;