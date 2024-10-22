import React, { useState } from 'react';
import './App.css'
const App = () => {
  const [principal, setPrincipal] = useState('');
  const [age, setAge] = useState('');
  const [investmentPeriod, setInvestmentPeriod] = useState('');
  const [interestEaarned, setInterestEarned] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:5000/calculate-interest', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        principal: parseFloat(principal),
        age: parseInt(age),
        investmentPeriod: parseInt(investmentPeriod),
      }),
    });

    const data = await response.json();
    setInterestEarned(data.interestEaarned);
    

   
  };

  return (
    <div className='main'>
      <h1>Savings Interest Calculator</h1>


      <form className='forminp' onSubmit={handleSubmit}>
        <input className='inp'
          type="number"
          placeholder="Principal Amount"
          value={principal}
          onChange={(e) => setPrincipal(e.target.value)}
          required
        />
        <input className='inp'
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />
        <input className='inp'
          type="number"
          placeholder="Investment Period (years)"
          value={investmentPeriod}
          onChange={(e) => setInvestmentPeriod(e.target.value)}
          required
        />
        <button className='inp button '  type="submit">Calculate Interest</button>
      </form>
   
      
    {interestEaarned > 0 && <h2>Interest you will get :₹{interestEaarned.toFixed(2)} when you will turn {parseInt(age)+parseInt(investmentPeriod)}</h2>}
    </div>
  );
};

export default App;
