import React from 'react';
import logo from './logo.svg';
import './App.css';
import GlobalProvider from './context/GlobalContext';
import Balance from './components/Balance';
import IncomeExpense from './components/IncomeExpense';
import Transaction from './components/Transaction';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';

function App() {
  return (
    <GlobalProvider>
      <div className="container">
      <Balance/>
      <IncomeExpense/>
      <TransactionList/>
      <AddTransaction/>
      </div>
    </GlobalProvider>
    
  );
}

export default App;
