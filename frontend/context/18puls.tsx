/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect, createContext, PropsWithChildren, useContext, useCallback, SetStateAction, Dispatch } from 'react'

export type Global18PlusContextData = {
  show18Plus: boolean
  setShow18Plus: Dispatch<SetStateAction<boolean>>
}

const Global18PlusContext = createContext<Global18PlusContextData>({} as Global18PlusContextData)

export const Global18PlusContextProvider = ({ children }: PropsWithChildren) => {
  const [show18Plus, setShow18Plus] = useState<boolean>(false)

  return (
    <Global18PlusContext.Provider
      value={{
        show18Plus,
        setShow18Plus,
      }}
    >
      {children}
    </Global18PlusContext.Provider>
  )
}

export const useGlobal18Plus = () => {
  const context = useContext(Global18PlusContext)
  if (context === undefined) {
    throw new Error('useGlobal18Plus must be used within a "Global18PlusContextProvider"')
  }
  return context
}