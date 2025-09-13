import { ReactNode, useState } from "react";
import { data } from "../../../api/db";

import {ProductContext} from './context'

export type ProductProviderProps = {
  children: ReactNode
}

export const ProductProvider = ({ children }: ProductProviderProps) => {
  const [product] = useState(data);

  return (
    <ProductContext.Provider value={{ product }}>{children}</ProductContext.Provider>
  )
}