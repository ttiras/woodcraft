import React from "react";

export const AuthContext = React.createContext();
export const AuthDispatch = React.createContext();

const initialState = {
    user: {}
};

const reducer = (state, action) => {
  switch (action.type) {
    
    case "LOGIN":
      return {
        ...state,
        user: action.payload
      };
    
    case "LOGOUT":
      return {
        ...state,
        user: action.payload
      };

    case "REGISTER":
      return {
        ...state,
        user: action.payload
      }

    default:
      return state;
  }
};

const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <AuthContext.Provider value={state}>
      <AuthDispatch.Provider value={dispatch}>
        {children}
      </AuthDispatch.Provider>
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

export default AuthContextProvider