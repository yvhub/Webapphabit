import React, { useState } from 'react';

const Table = () => {
  const [good, setGood] = useState('');
  const [goodExplanation1, setGoodExplanation1] = useState('');
  const [goodExplanation2, setGoodExplanation2] = useState('');
  const [notGood, setNotGood] = useState('');
  const [notGoodExplanation1, setNotGoodExplanation1] = useState('');
  const [notGoodExplanation2, setNotGoodExplanation2] = useState('');

  const handleGoodChange = (e) => {
    setGood(e.target.value);
  };

  const handleGoodExplanation1Change = (e) => {
    setGoodExplanation1(e.target.value);
  };

  const handleGoodExplanation2Change = (e) => {
    setGoodExplanation2(e.target.value);
  };

  const handleNotGoodChange = (e) => {
    setNotGood(e.target.value);
  };

  const handleNotGoodExplanation1Change = (e) => {
    setNotGoodExplanation1(e.target.value);
  };

  const handleNotGoodExplanation2Change = (e) => {
    setNotGoodExplanation2(e.target.value);
  };

  return (
    <div>
      <h2>Tagesrückblick</h2>
      <table>
        <tbody>
          <tr>
            <td>Was lief heute gut?</td>
            <td>
              <textarea value={good} onChange={handleGoodChange} />
            </td>
            <td>
              <div>Wie kam es dazu?</div>
              <textarea value={goodExplanation1} onChange={handleGoodExplanation1Change} />
              <textarea value={goodExplanation2} onChange={handleGoodExplanation2Change} />
            </td>
          </tr>
          <tr>
            <td>Was lief heute nicht gut?</td>
            <td>
              <textarea value={notGood} onChange={handleNotGoodChange} />
            </td>
            <td>
              <div>Wie kam es dazu?</div>
              <textarea value={notGoodExplanation1} onChange={handleNotGoodExplanation1Change} />
              <textarea value={notGoodExplanation2} onChange={handleNotGoodExplanation2Change} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
