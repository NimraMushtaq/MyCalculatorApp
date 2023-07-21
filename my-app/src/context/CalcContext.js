import React, { useState } from 'react'
import  {createContext} from 'react'

export const CalcContext =createContext
();
const CalcProvider = ({children}) => {
    const[calc,setCalc]=useState({
        sign:"",
        num:0,
        res:0
    })

    const providerValues={
        calc,setCalc
    }
  return (
    <CalcContext.Provider value={providerValues}>
        {children}
    </CalcContext.Provider>
  )
}

export default CalcProvider;