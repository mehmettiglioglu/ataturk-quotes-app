import { useState,useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./components/Home";
import QuotesContext from "./context/QuotesContext";

function App() {

  const [quote, setQuote] = useState({
    text:"",
    sources:[],
  });
  const [isCopied,setIsCopied]=useState(false);

  const [photo,setPhoto]=useState("");

 

  return (
    <QuotesContext.Provider value={{quote, setQuote ,isCopied,setIsCopied,photo,setPhoto}}>
      <Home />
    </QuotesContext.Provider>
  );
}

export default App;
