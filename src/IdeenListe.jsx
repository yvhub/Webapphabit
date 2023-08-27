import React, { useState, useEffect } from 'react';
import backgroundImage from './Images/Karoblatt1.png'; // Pfade zum Bild anpassen

const IdeaList = () => {
  const [ideas, setIdeas] = useState([]);
  const [inputText, setInputText] = useState('');

  useEffect(() => {
    const storedIdeas = localStorage.getItem('ideas');
    if (storedIdeas) {
      setIdeas(JSON.parse(storedIdeas));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('ideas', JSON.stringify(ideas));
  }, [ideas]);

  const addIdea = () => {
    if (inputText !== '') {
      const newIdea = {
        id: Date.now(),
        text: inputText
      };
      setIdeas(prevIdeas => [...prevIdeas, newIdea]);
      setInputText('');
    }
  };

  const removeIdea = (id) => {
    setIdeas(prevIdeas => prevIdeas.filter(idea => idea.id !== id));
  };

  const handleChange = (event) => {
    setInputText(event.target.value);
  };

  return (
    <div
     
    >
      <input type="text" value={inputText} onChange={handleChange} />
      <button onClick={addIdea}>Neue Idee</button>
      <ul>
        {ideas.map(idea => (
          <li key={idea.id}>
            {idea.text}
            <button onClick={() => removeIdea(idea.id)}>-</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IdeaList;
