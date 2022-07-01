import { createContext, useReducer } from "react";
import {FoodReducer} from '../reducers/FoodReducer';
export const FoodContext = createContext();

const FoodContextProvider = ({children}) => {
    const [foods,dispatch] = useReducer(FoodReducer,[]);
    return(
        <FoodContext.Provider value={{foods,dispatch}}>
            {children}
        </FoodContext.Provider>
    )
}

export default FoodContextProvider;