import React, { createContext, useState } from "react";

// Creates context object. MyContext will be used to provide and consume the shared states.
const MyContext = createContext();

// Provider component to wrap the entire app. It will provide the shared states to all components.
function MyProvider({ children }) {
     // States to be shared via context
     const [page, setPage] = useState("input"); // Set page for React to render
     const [key, setKey] = useState(1); //State update to trigger rerender of homepage
     const [navBar, setNavBar] = useState("true"); // Set navbar for React to render
     const [activeButton, setActiveButton] = useState("input"); // Set "active" button on navbar
     const [text, setText] = useState(""); // Set text for React to render
     //<MyContext.Provider> is the provider component created by createContext. It makes the context's value available to all child components.
     return (
          <MyContext.Provider value={{ page, setPage, key, setKey, navBar, setNavBar, activeButton, setActiveButton, text, setText }}>
               {children}
          </MyContext.Provider>
     );
}

export { MyProvider, MyContext };