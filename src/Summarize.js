import React, { createContext, useContext, useState } from 'react';

const SumContext = createContext();

export const SumProvider = ({ children }) => {
    const [sum, setSum] = useState(0);

    return (
        <SumContext.Provider value={{ sum, setSum }}>
            {children}
        </SumContext.Provider>
    );
};

export const useSum = () => useContext(SumContext);
