import React, { createContext, useState } from "react"

const defaultState = {
  link: {},
  addLink: () => {},
}

const ItemContext = createContext(defaultState)

const ItemContextProvider = ({ children }) => {
  const [link, setLink] = useState({})
  const addLink = link => {
    setLink({ ...link, link })
  }

  return (
    <ItemContext.Provider
      value={{
        link: link,
        addLink: addLink,
      }}
    >
      {console.log(link, addLink)}
      {children}
    </ItemContext.Provider>
  )
}

export default ItemContext

export { ItemContextProvider }
