import React, { useReducer, useMemo } from 'react';
import Constants from '../../constants.json';

function movieReducer(state, action) {
  switch (action.type) {
    case 'search':
      return action.payload;
    default:
      throw new Error(`Invalid action: ${action.type}`)
  }
}

const initialState = "https://api.themoviedb.org/3/discover/movie?api_key=" + Constants.key + "&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate";

export const MovieContext = React.createContext();

const MovieContextProvider = ({ children }) => {
  const [movies, dispatch] = useReducer(movieReducer, initialState)

  const contextValue = useMemo(() => ({ movies, dispatch }), [movies, dispatch])

  return <MovieContext.Provider value={contextValue}>{children}</MovieContext.Provider>
}

export default MovieContextProvider;