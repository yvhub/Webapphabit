import React, { useState, useEffect } from 'react';

const Table = () => {
  const [goodToday, setGoodToday] = useState('');
  const [notSoGoodToday, setNotSoGoodToday] = useState('');
  const [goodExplanation, setGoodExplanation] = useState('');
  const [notSoGoodExplanation, setNotSoGoodExplanation] = useState('');
  const [currentDate, setCurrentDate] = useState(new Date().toLocaleDateString());

  useEffect(() => {
    const storedDate = localStorage.getItem('currentDate');
    const storedGoodToday = localStorage.getItem('goodToday');
    const storedNotSoGoodToday = localStorage.getItem('notSoGoodToday');
    const storedGoodExplanation = localStorage.getItem('goodExplanation');
    const storedNotSoGoodExplanation = localStorage.getItem('notSoGoodExplanation');

    if (storedDate === currentDate) {
      if (storedGoodToday) {
        setGoodToday(storedGoodToday);
      }
      if (storedNotSoGoodToday) {
        setNotSoGoodToday(storedNotSoGoodToday);
      }
      if (storedGoodExplanation) {
        setGoodExplanation(storedGoodExplanation);
      }
      if (storedNotSoGoodExplanation) {
        setNotSoGoodExplanation(storedNotSoGoodExplanation);
      }
    } else {
      setGoodToday('');
      setNotSoGoodToday('');
      setGoodExplanation('');
      setNotSoGoodExplanation('');
      localStorage.setItem('currentDate', currentDate);
      localStorage.removeItem('goodToday');
      localStorage.removeItem('notSoGoodToday');
      localStorage.removeItem('goodExplanation');
      localStorage.removeItem('notSoGoodExplanation');
    }
  }, [currentDate]);

  useEffect(() => {
    localStorage.setItem('goodToday', goodToday);
  }, [goodToday]);

  useEffect(() => {
    localStorage.setItem('notSoGoodToday', notSoGoodToday);
  }, [notSoGoodToday]);

  useEffect(() => {
    localStorage.setItem('goodExplanation', goodExplanation);
  }, [goodExplanation]);

  useEffect(() => {
    localStorage.setItem('notSoGoodExplanation', notSoGoodExplanation);
  }, [notSoGoodExplanation]);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th colSpan={2}>Was lief heute gut?</th>
            <th colSpan={2}>Was lief heute nicht so gut?</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan={2}>
              <textarea
                value={goodToday}
                onChange={(e) => setGoodToday(e.target.value)}
              />
            </td>
            <td colSpan={2}>
              <textarea
                value={notSoGoodToday}
                onChange={(e) => setNotSoGoodToday(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <div>Wie sind diese Situationen entstanden?</div>
              <textarea
                value={goodExplanation}
                onChange={(e) => setGoodExplanation(e.target.value)}
              />
            </td>
            <td colSpan={2}>
              <div>Wie sind diese Situationen entstanden?</div>
              <textarea
                value={notSoGoodExplanation}
                onChange={(e) => setNotSoGoodExplanation(e.target.value)}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
