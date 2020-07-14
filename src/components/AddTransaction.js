import React, { useContext } from 'react';
import {ContextTransaction} from '../context/GlobalContext';

const AddTransaction=()=>{
    const {addTransaction}=useContext(ContextTransaction)
    const submit=(e)=>{
        e.preventDefault();
        
        
        var text=document.getElementById('input').value
        var amount=document.getElementById('amount').value
        
        const transaction={
        text,
        amount:+amount,
        id:0
        }
        
       
        
        
        addTransaction(transaction)
        
            
    }
    
    
    
    return(
        <div>
            <h3>Add New Transaction</h3>
        <form onSubmit={submit}>
            <label>Text</label>
            <input type='text' required placeholder='Enter text'
            id='input'
            //value={text}
            >
            </input>
            <label>Amount<br/>Negative-Expense, Positive-Income</label>
            <input type='text' required placeholder='Enter amount...'
            id='amount'
            //value={amount}
            >
            </input><br/>
            <button>Add Transaction</button>
                
        </form>
        </div>
    )

}

export default AddTransaction