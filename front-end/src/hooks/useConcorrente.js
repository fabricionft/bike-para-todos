import { useState } from "react"
import api from '../services/api';
import useMessagebox from "./useMessageBox";
import useTratarErros from './useTratarErros';

const useConcorrente = () => {

  const [concorrente, setConcorrente] = useState({});
  const {exibirMessageBox} = useMessagebox();
  const {tratarErro} = useTratarErros();

  const preencherConcorrente = (e) => setConcorrente({...concorrente, [e.target.name] : e.target.value});

  const salvarConcorrente = () => {
    api.post("/concorrente", {...concorrente})
    .then((resp) => {
      exibirMessageBox(
        "",
        true,
        "Parabéns, você se cadastrou. Seu número para o sorteio é: "+resp.data.codigo
        +". Você também pode vê-lo em seu email, caso esqueça."
      );
    })
    .catch((erro) => {
      tratarErro(erro);
    })
  }

  const enviarFormularioSalvarConcorrente = (e) => {
    e.preventDefault();
    salvarConcorrente();
  }

  return{
    concorrente, preencherConcorrente, enviarFormularioSalvarConcorrente
  };
}

export default useConcorrente;