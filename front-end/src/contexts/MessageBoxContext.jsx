import { createContext, useState } from "react";

export const MessageBoxContext = createContext();

export const MessaageBoxProvider = ({children}) => {

  const [visibilidadeMessagebox, setVisibilidadeMessagebox] = useState(false);

  const exibir = () => setVisibilidadeMessagebox(true);
  const esconder = () => setVisibilidadeMessagebox(false);

  return(
    <MessageBoxContext.Provider value={{visibilidadeMessagebox, exibir, esconder}}>
      {children}
    </MessageBoxContext.Provider>
  )
}