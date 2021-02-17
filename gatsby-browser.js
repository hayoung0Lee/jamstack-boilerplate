/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it
import React from "react"
import { ItemContextProvider } from "./src/context/item-context"

export const wrapRootElement = ({ element }) => {
  return <ItemContextProvider>{element}</ItemContextProvider>
}
