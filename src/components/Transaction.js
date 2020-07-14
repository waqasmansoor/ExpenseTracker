import React,{useContext} from 'react'
import {ContextTransaction} from '../context/GlobalContext';

const Transaction=({transaction})=>{
    const {deleteTrans}=useContext(ContextTransaction)


    return(
        <li>
            <span>{transaction.text}</span>
            <span>{transaction.amount}</span>
            <button className="delete-btn"
            onClick={()=>
                deleteTrans(transaction.id)
                
            }
            >x</button>
        </li>
    )
}


export default Transaction