import React from 'react';

const Code2 = ({ komponente }) => {
  return (
    <div>
      <h2>Zweiter Code</h2>
      
      {komponente && (
        <div>
          <h3>Aktivierte Komponente</h3>
          {komponente}
        </div>
      )}
    </div>
  );
};

export default Code2;
