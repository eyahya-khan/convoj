import React, { createContext } from "react";
import {
    topNavInfo, tabInfo, searchInfo,
    actionInfo, dataTableTitleInfo,
    dataTableInformation, dataTableAlvgardenInfo
} from "./dataInfo";

type dataContextProviderProps = {
    children: React.ReactNode
}

export const DataContext = createContext({
    topNavInfo, tabInfo, searchInfo, actionInfo,
    dataTableTitleInfo, dataTableInformation, dataTableAlvgardenInfo
})

export const DataContextProvider = ({ children, }: dataContextProviderProps) => {
    return <DataContext.Provider value={{
        topNavInfo, tabInfo, searchInfo, actionInfo,
        dataTableTitleInfo, dataTableInformation, dataTableAlvgardenInfo
    }}>
        {children}
    </DataContext.Provider>
}
