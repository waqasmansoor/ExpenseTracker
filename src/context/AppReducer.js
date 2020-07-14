export default (state,action)=>{
    switch(action.type){
        case 'ADD':
            
            return {
                
            transactions:[action.payload,...state.transactions]  
    }
        case 'DEL':
            return{
            transactions:state.transactions.filter(
                transaction=>transaction.id!==action.id
                )
        }
        default:
            return state;
    }
}