import React, { useState } from 'react';
import Navbar from '../../components/Navbar';

const ExpenseTracker = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState();
  const [totalamount, setTotalAmount] = useState(0);
  const [list, setList] = useState([]); 

  const AddTransaction = () => {
    const transaction = {
      id: list.length === 0 ? 1 : list[list.length - 1].id + 1,
      name: text,
      amt: amount,
      completed: false,
    };
    setTotalAmount(totalamount + parseFloat(transaction.amt));
    setList([...list, transaction]);
    setText("");
    setAmount("")
  };

  function Done(id) {
    setList(list.map((transaction) => {
      if (transaction.id === id) {
        setTotalAmount(totalamount - parseFloat(transaction.amt));
      }
    }));
    setList(list.filter((transaction) => (transaction.id !== id)));
  }

  return (
    <div className="text-center">
      <div className="bg-slate-600">
        <Navbar></Navbar>
      </div>
      <div className="m-8">
        <h1 className="text-4xl m-4"> Total amount: {totalamount}</h1>
        <h1 className="text-3xl">Add new transaction</h1>
        <div>
          <div className="m-3 text-2xl">
            <label className="m-5">Text</label>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
          </div>
          <div className="m-3 text-2xl">
            <label className="m-5">Amount</label>
            <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)}  placeholder="Enter amount..." />
          </div>
          <button className="btn mr-6 bg-blue-700 p-2 rounded-md text-white hover:bg-blue-600 transition-all" onClick={AddTransaction}>Add transaction</button>
        </div>

        <h1 className="text-4xl mt-11">Expense History</h1>
        <div className="m-2">
          {list.map(function (transaction) {
            return (
              <div className="ml-2 text-lg" key={transaction.id}>
                {transaction.name} -- {transaction.amt} 
                <button className=" ml-3 mb-2 btn mr-6 bg-red-700 pl-2 pr-2 rounded-md text-white hover:bg-red-900 transition-all "onClick={() => Done(transaction.id)}>X</button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ExpenseTracker;
