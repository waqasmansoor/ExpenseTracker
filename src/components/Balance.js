import React,{useContext} from 'react'
import {ContextTransaction} from '../context/GlobalContext';


const Balance=()=>{
    const {transactions}=useContext(ContextTransaction)
    const balance=transactions.map(transaction=>transaction.amount)
                            .reduce((acc,item)=>(acc+=item),0).toFixed(2)

    return(
        <div>  
            <h4>Your Balance</h4>
    <h4>{balance}</h4>
        </div>
    )
}


export default Balance