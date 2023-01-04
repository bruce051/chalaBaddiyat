import React from 'react'
import { createContext, useState } from 'react'

const Context = createContext();

function Provider({children}) {
    const [item, setItem] = useState({});
  return (
    <Context.Provider value={{item, setItem}}>
        {children}
    </Context.Provider>

  )
}

export {Context, Provider}