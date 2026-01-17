import { useState } from "react";
import { createContext } from "react";
import APIServices from "./ApiService";

export const AppContext = createContext(null);
export const AppProvider = ({ children }) => {
  const ApiService = new APIServices();
  const [isAutherise, setIsAutherise] = useState(false)
  const autherise = async () => {
    try {
      const response = await ApiService.profile()
      if (!response.status) {
        setIsAutherise(false)
      }
      else {
        setIsAutherise(true)
      }
    } catch (error) {
      console.log(error)
    }
  }
  autherise()
  return (
    <AppContext.Provider value={{ isAutherise, setIsAutherise }}>
      {children}
    </AppContext.Provider>
  );
};
