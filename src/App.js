import React from 'react';
import './App.css';
import GlobalProvider from './context/GlobalContext';
import Balance from './components/Balance';
import IncomeExpense from './components/IncomeExpense';
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
