import React, { useState, useEffect } from 'react';

const TextButton = () => {
  const [texts, setTexts] = useState([]);
  const [inputText, setInputText] = useState('');

  useEffect(() => {
    const storedTexts = localStorage.getItem('texts');
    const storedDate = localStorage.getItem('date');
    const currentDate = new Date().toLocaleDateString();

    if (storedTexts && storedDate === currentDate) {
      setTexts(JSON.parse(storedTexts));
    } else {
      setTexts([]);
      localStorage.setItem('texts', JSON.stringify([]));
      localStorage.setItem('date', currentDate);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('texts', JSON.stringify(texts));
  }, [texts]);

  const addText = () => {
    if (texts.length < 3 && inputText !== '') {
      setTexts(prevTexts => [...prevTexts, inputText]);
      setInputText('');
    }
  };

  const removeText = (index) => {
    setTexts(prevTexts => prevTexts.filter((_, i) => i !== index));
  };

  const handleChange = (event) => {
    setInputText(event.target.value);
  };

  return (
    <div>
      <input type="text" value={inputText} onChange={handleChange} />
      <button onClick={addText} disabled={texts.length === 3 || inputText === ''}>
        Text hinzufügen
      </button>
      {texts.length === 3 && <p>Dankbarkeit</p>}
      <ul>
        {texts.map((text, index) => (
          <li key={index}>
            {text}
            <button onClick={() => removeText(index)}>-</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TextButton;
