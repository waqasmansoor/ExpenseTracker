import React, { useContext } from 'react'
import {ContextTransaction} from '../context/GlobalContext';


const IncomeExpense=()=>{
    const {transactions}=useContext(ContextTransaction)
    const amount=transactions.map(transaction=>transaction.amount)
    const income=amount.filter(item=>item>0)
                       .reduce((acc,item)=>(acc+=item),0)
                        .toFixed(2)
    const expense=amount.filter(item=>item<0)
                        .reduce((acc,item)=>(acc+=item),0)
                        .toFixed(2)

    

    return(
        <div className='inc-exp-container'>
        <div>
            <span>Income</span><br/>
    <span>{income}</span>
        </div>
        <div>
            <span>Expense</span><br/>
    <span>{expense}</span>
        </div>
        </div>
    )
}


export default IncomeExpense