import React from 'react';
import moment from 'moment-timezone'
import './App.css';

function App() {
    const londonTime = moment().tz('Europe/London').format('HH:mm');
    const newYorkTime = moment().tz('America/New_York').format('HH:mm');
    const tokyoTime = moment().tz('Asia/Tokyo').format('HH:mm');
    const sydneyTime = moment().tz('Australia/Sydney').format('HH:mm');
    const shanghaiTime = moment().tz('Asia/Shanghai').format('HH:mm');
  
  return (
    <>
      <h1>Some Global Time Zones</h1>
      <h2>The time in London is: {londonTime}</h2>
      <h2>The time in New York is: {newYorkTime}</h2>
      <h2>The time in Tokyo is: {tokyoTime}</h2>
      <h2>The time in Sydney is: {sydneyTime}</h2>
      <h2>The time in Shanghai is: {shanghaiTime}</h2>
    </>
  );
}

export default App;
