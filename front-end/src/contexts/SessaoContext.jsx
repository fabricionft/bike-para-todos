import { createContext, useEffect, useState } from "react";

export const SessaoContext = createContext();

export const SessaoProvider = ({children}) => {

  const [sessao, setSessao] = useState(() => {
    const sessao = localStorage.getItem('sessao');
    return (sessao) ? JSON.parse(sessao) : null;
  });

  useEffect(() => {
    localStorage.setItem('sessao', JSON.stringify(sessao))
  }, [sessao])

  const logar = (sessao) => setSessao(sessao)
  const deslogar = () => setSessao(false)


  return(
    <SessaoContext.Provider value={{sessao, logar, deslogar}}>
      {children}
    </SessaoContext.Provider>
  )
}