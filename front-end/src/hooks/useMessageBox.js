import { useContext } from "react"
import { MessageBoxContext } from "../contexts/MessageBoxContext"
import { useLocation, useNavigate } from "react-router-dom";


const useMessagebox = () => {

  const {visibilidadeMessagebox, exibir, esconder} = useContext(MessageBoxContext);
  const navigate = useNavigate();
  const location = useLocation();

  const exibirMessageBox = (destino, sucesso, msg) => {
    navigate(
      (destino) ? destino : location.pathname,
      {
        state : {
          sucesso: sucesso,
          msg: msg
        }
      }
    );
    exibir();
  }

  const state = location.state;
  const dados = (state) && {
    sucesso: state.sucesso,
    msg: state.msg
  }

  return{
    exibirMessageBox, esconder, 
    dados, visibilidadeMessagebox
  };
}
export default useMessagebox;