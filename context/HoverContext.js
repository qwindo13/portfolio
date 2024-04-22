import React, { createContext, useContext, useState } from 'react';

const HoverContext = createContext();

export function useHover() {
  return useContext(HoverContext);
}

export const HoverProvider = ({ children }) => {
  const [hoverState, setHoverState] = useState({ x: 0, y: 0, size: 40, isActive: false });

  const activateHover = (x, y) => setHoverState({ x, y, size: 400, isActive: true });
  const deactivateHover = () => setHoverState(prev => ({ ...prev, size: 40, isActive: false }));

  return (
    <HoverContext.Provider value={{ hoverState, activateHover, deactivateHover }}>
      {children}
    </HoverContext.Provider>
  );
};
