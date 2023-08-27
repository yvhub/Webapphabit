import React, { useState, useEffect } from 'react';
import Komponente1 from './Checkliste'; // Importiere die erste Komponente
import Komponente2 from './Button'; // Importiere die zweite Komponente
import Komponente3 from './Dayplan'; // Importiere die dritte Komponente
import Komponente4 from './Dankbarkeit'; // Importiere die vierte Komponente
import Komponente5 from './IdeenListe'; // Importiere die fünfte Komponente

const App = () => {
  const [komponentenListe, setKomponentenListe] = useState([
    { name: 'Tages Rückblick', component: Komponente1, active: false },
    { name: 'Gewohnheits-Tracker', component: Komponente2, active: false },
    { name: 'Komponente Day-Plan', component: Komponente3, active: false },
    { name: 'Dankbar', component: Komponente4, active: false },
    { name: 'Ideen-Liste', component: Komponente5, active: false },
  ]);
  const [aktiveIndex, setAktiveIndex] = useState(0);
  const [texteAngezeigt, setTexteAngezeigt] = useState(true);
  const [buttonAngezeigt, setButtonAngezeigt] = useState(true);

  const toggleAktivierung = (index) => {
    setKomponentenListe((prevList) => {
      const newList = [...prevList];
      newList[index].active = !newList[index].active;
      return newList;
    });
  };

  const switchAktiveKomponente = (direction) => {
    setAktiveIndex((prevIndex) => {
      const activeIndexes = komponentenListe
        .map((komponente, index) => (komponente.active ? index : null))
        .filter((index) => index !== null);

      if (activeIndexes.length === 0) {
        return 0;
      }

      const currentIndex = activeIndexes.indexOf(prevIndex);
      let nextIndex;
      if (direction === 'next') {
        nextIndex = currentIndex === activeIndexes.length - 1 ? 0 : currentIndex + 1;
      } else if (direction === 'previous') {
        nextIndex = currentIndex === 0 ? activeIndexes.length - 1 : currentIndex - 1;
      } else {
        nextIndex = prevIndex;
      }
      return activeIndexes[nextIndex];
    });
  };

  useEffect(() => {
    const activeIndexes = komponentenListe
      .map((komponente, index) => (komponente.active ? index : null))
      .filter((index) => index !== null);

    if (!activeIndexes.includes(aktiveIndex)) {
      const nextActiveIndex = activeIndexes.length > 0 ? activeIndexes[0] : 0;
      setAktiveIndex(nextActiveIndex);
    }
  }, [komponentenListe, aktiveIndex]);


  
  const ActiveComponent = komponentenListe[aktiveIndex].component;

  const toggleTexteAnzeigen = () => {
    setTexteAngezeigt(true);
  };

  const toggleTexteVerstecken = () => {
    setTexteAngezeigt(false);
  };

  const toggleButtonAnzeigen = () => {
    setButtonAngezeigt(true);
  };

  const toggleButtonVerstecken = () => {
    setButtonAngezeigt(false);
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'flex-start', marginLeft: '20px', marginTop: '20px' }}>
      {buttonAngezeigt ? (
        <button onClick={toggleButtonVerstecken}>≡ Add-On  </button>
      ) : (
        <button onClick={toggleButtonAnzeigen}>≡ Add-On </button>
      )}
    </div>
      {buttonAngezeigt && (
        <div>
          <h1>Komponenten:</h1>
          <ul>
            {komponentenListe.map((komponente, index) => (
              <li key={index}>
                {komponente.name}
                {buttonAngezeigt && (
                  <button onClick={() => toggleAktivierung(index)}>
                    {komponente.active ? '✕' : '✓'}
                  </button>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <button
            onClick={() => switchAktiveKomponente('previous')}
            style={{
              background: 'white',
              border: 'none',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              fontSize: '20px',
              fontWeight: 'bold',
              margin: '0 10px',
            }}
          >
            ◀
          </button>
          {komponentenListe.map((komponente, index) => (
            komponente.active && aktiveIndex === index && (
              <div
                key={index}
                style={{
                  border: '2px Grey',
                  padding: '90px',
                  width: '300px',
                  height: '400px',
                }}
              >
                <h2>{komponente.name}</h2>
                {React.createElement(komponente.component)}
              </div>
            )
          ))}
          <button
            onClick={() => switchAktiveKomponente('next')}
            style={{
              background: 'white',
              border: 'none',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              fontSize: '20px',
              fontWeight: 'bold',
              margin: '0 10px',
            }}
          >
            ▶
          </button>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        
        
      </div>
     
    </div>
  );
};

export default App;
