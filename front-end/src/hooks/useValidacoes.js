import useMessagebox from './useMessageBox';


const useValidacoes = () => {

  const {exibirMessageBox} = useMessagebox();

  const validarEtapa1Cadastro = (concorrente) => {
    if(concorrente.nome && concorrente.email && concorrente.celular && concorrente.cpf){
      let erros = [];

      if(concorrente.nome.trim().split(" ").length < 2) erros.push("Por favor digite o nome completo!");
      if(!concorrente.email.endsWith("@gmail.com"))erros.push("Seu email precisa conter o prefixo @gmail.com!");
      if(concorrente.celular.length !== 11) erros.push("Digite o celular completo!");

      if(concorrente.cpf.length !== 11) erros.push("Digite o CPF completo!");
      else if(!validarCPF(concorrente.cpf)) erros.push("Digite um CPF válido!");

      if(erros.length == 0) return true;
      else{
        exibirMessageBox(
          "",
          false,
          erros
        );
      }
    }
    else{
      exibirMessageBox(
        "",
        false,
        "Por favor prencha todos os campos!"
      );
    }
  }

  const validarEtapa2Cadastro = (concorrente) => {
    if(concorrente.nomePagante && concorrente.instituicaoPagante) return true;
    else{
      exibirMessageBox(
        "",
        false,
        "Por favor prencha todos os campos!"
      );
    }
  }

  const validarCPF = (cpf) => {
    const digitoJ = gerarDigitoVerificador(cpf, 10);
    const digitoK = gerarDigitoVerificador(cpf, 11);

    if(digitoJ == cpf.substring(9, 10) && digitoK == cpf.substring(10,11)) return true;
    else return false;
  }

  const gerarDigitoVerificador = (cpf, maximo) => {
    let somaDigitos = 0;
    let inicio = 0;
    let fim = 1;
    for(var i = maximo; i >= 2; i--){
        somaDigitos += cpf.substring(inicio, fim) * i;
        inicio++;
        fim++;
    }
    if((11 - (somaDigitos % 11)) >= 10) return 0;
    else return (11 - (somaDigitos % 11));
  }


  return{validarEtapa1Cadastro, validarEtapa2Cadastro};
}

export default useValidacoes;