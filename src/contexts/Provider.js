import React, { createContext, useReducer } from 'react';

import todoReducer from './flux/reducer';
import INITIAL_STATE from './flux/initialState';

export const GlobalContext = createContext({})

const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(todoReducer, INITIAL_STATE)

    return (
        <GlobalContext.Provider value={{state, dispatch}}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalProvider