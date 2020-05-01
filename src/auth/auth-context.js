import React, { useEffect } from "react";

export const AuthContext = React.createContext();
export const AuthDispatch = React.createContext();

const initialState = {
  address: null,
  invoiceAddress: null
};
 
const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action.payload,
      };

    case "LOGOUT":
      return {
        ...state,
        user: action.payload,
      };

    case "NOTES":
      return {
        ...state,
        notes: action.payload,
      };

    case "ADDRESS":
      return {
        ...state,
        address: action.payload,
      };

    case "INVOICE_ADDRESS":
      return {
        ...state,
        invoiceAddress: action.payload,
      };

    case "TOKEN":
      return {
        ...state,
        token: action.payload,
      };

      case "ROLE":
        return {
          ...state,
          role: action.payload,
        };
    
    case "REGISTER":
      return {
        ...state,
        user: action.payload,
      };

    default:
      return state;
  }
};

const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState, () => {
    const address = localStorage.getItem('address') ? JSON.parse(localStorage.getItem('address')) : null
    const invoiceAddress = localStorage.getItem('invoiceAddress') ? JSON.parse(localStorage.getItem('invoiceAddress')) : null
    return {address, invoiceAddress}
  });

  useEffect(()=>{
    localStorage.setItem('address', JSON.stringify(state.address))
  }, [state.address])

  useEffect(()=>{
    localStorage.setItem('invoiceAddress', JSON.stringify(state.invoiceAddress))
  }, [state.invoiceAddress])

  return (
    <AuthContext.Provider value={state}>
      <AuthDispatch.Provider value={dispatch}>{children}</AuthDispatch.Provider>
    </AuthContext.Provider>
  );
};

export const useAuthState = () => {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error(
      "useNewCampaignState must be used within a NewCampaignContextProvider"
    );
  }
  return context;
};

export const useAuthDispatch = () => {
  const context = React.useContext(AuthDispatch);
  if (context === undefined) {
    throw new Error(
      "useNewCampaignDispatch must be used within a NewCampaignContextProvider"
    );
  }
  return context;
};

export default AuthContextProvider;
