import { createContext, useContext,useState} from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// initilize GSAP and register the plugin
gsap.registerPlugin(ScrollTrigger);

 const AppContext = createContext();

 export const AppProvider = ({children})=>{
  const [close, setClose] = useState(false)
  const [open, setOpen] = useState(false)

    
  return (
    <AppContext.Provider
      value={{
        close,
        setClose,
        open,
        setOpen,
        
      }}
    >
      {children}
    </AppContext.Provider>
  )
 }

 export const useGlobalContext = () =>{
  return useContext(AppContext);
 }

