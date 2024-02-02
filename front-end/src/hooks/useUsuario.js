import { useState } from "react"
import api from '../services/api';
import useSesso from "./useSessao";
import useMessagebox from "./useMessageBox";
import useTratarErros from './useTratarErros';

const useUsuario = () => {

  const [usuario, setUsuario] = useState({});
  const {logar} = useSesso();
  const {exibirMessageBox} = useMessagebox();
  const {tratarErro} = useTratarErros();

  const preencherUsuario = (e) => setUsuario({...usuario, [e.target.name] : e.target.value});

  const fazerLogin = () => {
    api.post("/usuario/login", {
      ...usuario
    })
    .then((resp) => {
      logar(resp.data);
      exibirMessageBox(
        "/concorrentes",
        true,
        "Logado com sucesso!"
      );
    })
    .catch((erro) => {
      tratarErro(erro);
    })
  }

  const enviarFormularioLogin = (e) => {
    e.preventDefault();
    fazerLogin();
  }

  return{
    usuario, preencherUsuario,
    enviarFormularioLogin
  };
}

export default useUsuario;