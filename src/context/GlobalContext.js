import React, { createContext, useReducer } from 'react'
import AppReducer from '../context/AppReducer'

const initState={
    transactions:[]
}

export const ContextTransaction=createContext(initState)
var count=0

const GlobalProvider=({children})=>{
    const [state,action]=useReducer(AppReducer,initState)
    


    function addTransaction(transaction){
        count+=1
       transaction.id=count
     action({
            type:'ADD',
            payload:transaction
        })
      
    }
    function deleteTrans(id){
        action(
            {
                type:'DEL',
                id:id
            }
        )
    }
    

    return(<ContextTransaction.Provider value={{
        transactions:state.transactions,
        addTransaction,
        deleteTrans
    }}>
        {children}
        </ContextTransaction.Provider>)

    
}


export default GlobalProvider
