import React, { createContext, useState } from 'react';

export const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
    const [expandedProjectId, setExpandedProjectId] = useState(null);

    return (
        <ModalContext.Provider value={{ expandedProjectId, setExpandedProjectId }}>
            {children}
        </ModalContext.Provider>
    );
};
