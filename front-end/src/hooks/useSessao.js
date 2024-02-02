import { useContext } from "react";
import { SessaoContext} from "../contexts/SessaoContext";

const useSessao = () => {

  const {sessao, logar, deslogar} = useContext(SessaoContext);
  return{sessao, logar, deslogar};
}

export default useSessao;