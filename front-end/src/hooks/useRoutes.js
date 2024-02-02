import { useLocation, useNavigate } from "react-router-dom"
import privateRoutes from "../constants/privateRoutes";
import useSesso from "./useSessao";
import useSessao from "./useSessao";
import { useEffect } from "react";

const useRoutes = () => {

  const location = useLocation();
  const navigate = useNavigate();
  const {sessao} = useSessao();

  const verificarSeARotaEPrivada = () => {
    return privateRoutes.includes(location.pathname);
  }

  const bloquearRotaPrivada = () => {
    console.log(sessao)
    useEffect(() => {
      if(!sessao) navigate("/");
    }, [sessao])
  }

  return{verificarSeARotaEPrivada, bloquearRotaPrivada};
}

export default useRoutes;