import React, { useState } from 'react';

const MenuBar = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <div>
      <button onClick={toggleMenu}>Menüleiste</button>
      {menuVisible && (
        <div>
          <TextComponent text="Text 1" />
          <TextComponent text="Text 2" />
          <TextComponent text="Text 3" />
        </div>
      )}
    </div>
  );
};

const TextComponent = ({ text }) => {
  const [componentVisible, setComponentVisible] = useState(false);

  const toggleComponent = () => {
    setComponentVisible(!componentVisible);
  };

  return (
    <div>
      <button onClick={toggleComponent}>{text}</button>
      {componentVisible && <div>Komponente für {text}</div>}
    </div>
  );
};

export default MenuBar2;
