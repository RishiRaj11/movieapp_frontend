import React ,{createContext,useState} from 'react'

export const DataContext = createContext(null);

const DataProvider = ({children}) => {
     const initial={}
    const [account,setAccount]=useState(initial);
  return (
    <DataContext.Provider value={{account,setAccount}} >
       {children}
    </DataContext.Provider>
  )
}

export default DataProvider;