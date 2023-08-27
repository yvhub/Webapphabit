import React, { useState } from 'react';
import CustomComponent from './Calendar';

const App = () => {
  const [isComponentVisible, setComponentVisible] = useState(false);

  const toggleComponent = () => {
    setComponentVisible(!isComponentVisible);
  };

  return (
    <div>
      <button
        onClick={toggleComponent}
        style={{
          borderRadius: '10%',
          border: '1px solid black',
          padding: '5px',
          backgroundColor: 'lightgrey',
          color: 'black',
          marginLeft: '50px',
        }}
      >
        {isComponentVisible ? 'Kalender ausblenden' : 'Kalender einblenden'}
      </button>
      {isComponentVisible && <CustomComponent />}
    </div>
  );
};

export default App;
