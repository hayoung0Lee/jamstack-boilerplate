import React, { createContext, useState } from "react"

const defaultState = {
  link: {},
  addLink: () => {},
}

const ItemContext = createContext(defaultState)

const ItemContextProvider = ({ children }) => {
  const [link, addLink] = useState({})

  return (
    <ItemContext.Provider
      value={{
        link: link,
        addLink: addLink,
      }}
    >
      {children}
    </ItemContext.Provider>
  )
}

export default ItemContext

export { ItemContextProvider }
