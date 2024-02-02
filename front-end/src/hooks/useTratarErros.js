import useMessagebox from './useMessageBox';


const useTratarErros = () => {

  const {exibirMessageBox} = useMessagebox();

  const tratarErro = (erro) => {
    exibirMessageBox(
      "",
      false,
      erro.response.data.message
    )
  };

  return{tratarErro};
}

export default useTratarErros;