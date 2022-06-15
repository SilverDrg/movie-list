import React, { useReducer, useMemo } from 'react';

function movieReducer(state, action) {
  switch (action.type) {
    case 'search':
      return action.payload;
    default:
      throw new Error(`Invalid action: ${action.type}`)
  }
}

const initialState = "";

export const MovieContext = React.createContext();

const MovieContextProvider = ({ children }) => {
  const [movies, dispatch] = useReducer(movieReducer, initialState)

  const contextValue = useMemo(() => ({ movies, dispatch }), [movies, dispatch])

  return <MovieContext.Provider value={contextValue}>{children}</MovieContext.Provider>
}

export default MovieContextProvider;