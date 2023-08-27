import React, { useState, useEffect } from 'react';
import ComponentToImport from './MenuBar';

const ButtonWithText = () => {
  const [textList, setTextList] = useState(() => {
    const savedTextList = localStorage.getItem('textList');
    return savedTextList ? JSON.parse(savedTextList) : [];
  });

  const [completedList, setCompletedList] = useState(() => {
    const savedCompletedList = localStorage.getItem('completedList');
    return savedCompletedList ? JSON.parse(savedCompletedList) : [];
  });

  useEffect(() => {
    localStorage.setItem('textList', JSON.stringify(textList));
    localStorage.setItem('completedList', JSON.stringify(completedList));
  }, [textList, completedList]);

  const handleButtonClick = () => {
    const newTextInput = prompt('Geben Sie den Text ein:');
    if (newTextInput) {
      setTextList([...textList, newTextInput]);
      setCompletedList([...completedList, false]);
    }
  };

  const handleTextChange = (event, index) => {
    const updatedTextList = [...textList];
    updatedTextList[index] = event.target.value;
    setTextList(updatedTextList);
  };

  const handleButtonToggle = (index) => {
    const updatedCompletedList = [...completedList];
    updatedCompletedList[index] = !updatedCompletedList[index];
    setCompletedList(updatedCompletedList);
  };

  const handleTextDelete = (index) => {
    const updatedTextList = textList.filter((_, i) => i !== index);
    setTextList(updatedTextList);

    const updatedCompletedList = completedList.filter((_, i) => i !== index);
    setCompletedList(updatedCompletedList);
  };

  return (
    <div style={{ paddingLeft: '20px' }}>
      <br />
      <button
        onClick={handleButtonClick}
        style={{
          backgroundColor: 'Azure',
          borderRadius: '5px',
          padding: '5px',
          marginBottom: '5px',
          marginLeft: '25px',
        }}
      >
        Gewohnheit hinzufügen
      </button>
      <br />
      <br />
      {textList.map((text, index) => (
        <div key={index} style={{ width: '235px' }}>
          <input
            type="text"
            value={text}
            onChange={(event) => handleTextChange(event, index)}
            style={{
              backgroundColor: 'White',
              borderRadius: '5px',
              padding: '5px',
              marginBottom: '3px',
             
              height: '20px',
              
            }}
          />
          <button
            style={{
              width: '30px',
              height: '30px',
              backgroundColor: completedList[index] ? 'Lightgreen' : 'white',
              margin: '2px',
              fontSize: '20px',
             
              
              
            }}
            onClick={() => handleButtonToggle(index)}
          >
            {completedList[index] ? '✓' : ''}
          </button>
          <div style={{ float: 'right' }}>
            <button
              onClick={() => handleTextDelete(index)}
              style={{
                borderRadius: '10px',
                width: '20px',
                height: '20px',
                backgroundColor: 'white',
                padding: '2px',
                fontSize: '10px',
              
              
              }}
            >
              ✖
            </button>
          </div>
          <br />
          <br />
        </div>
      ))}
    </div>
  );
};

export default ButtonWithText;
