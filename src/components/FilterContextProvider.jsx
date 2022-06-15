import React, { useReducer, useMemo } from 'react';

function filterReducer(state, action) {
  switch (action.type) {
    case 'add-filter':
      return {...state, category: [...state.category, action.payload]}
    case 'remove-filter':
      return {...state, category: state.category.filter(x => x != action.payload)}
    default:
      throw new Error(`Invalid action: ${action.type}`)
  }
}

const initialState = {category: []};

export const FilterContext = React.createContext();

const FilterContextProvider = ({ children }) => {
  const [filters, dispatch] = useReducer(filterReducer, initialState)

  const contextValue = useMemo(() => ({ filters, dispatch }), [filters, dispatch])

  return <FilterContext.Provider value={contextValue}>{children}</FilterContext.Provider>
}

export default FilterContextProvider;