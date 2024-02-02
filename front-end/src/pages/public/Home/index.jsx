import styles from './Home.module.css';


import Container from "../../../components/Container";
import useFormulario from '../../../hooks/useFormulario';
import useConcorrente from '../../../hooks/useConcorrente';
import useValidacoes from '../../../hooks/useValidacoes';

export default function Home(){

  const {indice, proximo, anterior} = useFormulario();
  const {validarEtapa1Cadastro, validarEtapa2Cadastro} = useValidacoes();
  const {concorrente, preencherConcorrente, enviarFormularioSalvarConcorrente} = useConcorrente();


  return(
    <Container centralizar={true}>
      <form 
        className={styles.formularioConcorrente}
      >
        <header>
          <div className={styles.cabecalho}>
            {
              indice > 0 && (
                <>
                  <p className={styles.tituloCabecalho}>
                    {
                      (indice == 1) ? "Dados pessoais" :
                      (indice == 2) ? "Pagamento" : 
                      (indice == 3) && "Conclusão"
                    }
                  </p>

                  <p className={styles.indiceCabecalho}>
                    {indice}/3
                  </p>
                </>
              )
            }
            </div>
        </header>

        <div>
          {
            indice == 0 ? (
              <>
                <h1 className={styles.slogan}>
                  Venha fazer parte da nossa campanha, cadastre-se
                </h1>
              </>
            ) : indice == 1 ? (
              <>
                <label>Nome completo</label>
                <input 
                  type="text" 
                  placeholder='Digite seu nome completo'  
                  name='nome'
                  onChange={(e) => preencherConcorrente(e)}
                  value={concorrente.nome || ""}
                />

                <label>Email</label>
                <input 
                  type="text" 
                  placeholder='Digite seu email' 
                  name='email'
                  onChange={(e) => preencherConcorrente(e)}
                  value={concorrente.email || ""} 
                />

                <label>Celular</label>
                <input 
                  type="number" 
                  placeholder='Digite apenas números'
                  name='celular'
                  onChange={(e) => {
                    (!concorrente.celular) ? preencherConcorrente(e) 
                    : (e.target.value.length <= 11) && preencherConcorrente(e)
                  }}
                  value={concorrente.celular || ""}
                />

                <label>CPF</label>
                <input 
                  type="number" 
                  placeholder='Digite apenas números'
                  name='cpf'
                  onChange={(e) => {
                    (!concorrente.cpf) ? preencherConcorrente(e) 
                    : (e.target.value.length <= 11) && preencherConcorrente(e)
                  }}
                  value={concorrente.cpf || ""}
                />
              </>
            ) : indice == 2 ? (
              <>
                <label>Nome do pagante (nome que aparece em seu comprovante de pagamento)</label>
                <input 
                  type="text" 
                  placeholder='Digite o nome do pagante'  
                  name='nomePagante'
                  onChange={(e) => preencherConcorrente(e)}
                  value={concorrente.nomePagante || ""}
                />

                <label>Instituição do pagante</label>
                <input 
                  type="text" 
                  placeholder='Digite a instituiçao do pagante'  
                  name='instituicaoPagante'
                  onChange={(e) => preencherConcorrente(e)}
                  value={concorrente.instituicaoPagante || ""}
                />
              </>
            ) : (
              <p>Você está prester a concluir seu cadastro, seu número de sorteio será gerado e enviado para o seu email, além de claro, ser exibido após a confirmação de cadastro.
              <br></br><br></br>Obs: Fique ciente que você apenas receberá o uniforme do projeto e concorrerá ao sorteio caso pague o PIX no valor indicado na etapa anterior. </p>
            )
          }
        </div>

        <footer>
          {
            indice == 0 ? (
              <button
                type='button'
                onClick={proximo}
              >
                Iniciar cadastro
              </button>
            ) : indice == 1 ? (
              <>
                <button
                  type='button'
                  onClick={anterior}
                >
                  Anterior
                </button>

                <button
                  type='button'
                  onClick={() => validarEtapa1Cadastro(concorrente) && proximo()}
                >
                  Próximo
                </button>
              </>
            ) : indice == 2 ? (
              <>
                <button
                  type='button'
                  onClick={anterior}
                >
                  Anterior
                </button>

                <button
                  type='button'
                  onClick={() => validarEtapa2Cadastro(concorrente) && proximo()}
                >
                  Proximo
                </button>
              </>
            ) : (
              <>
                <button
                  type='button'
                  onClick={anterior}
                >
                  Anterior
                </button>

                <button 
                  type='button'
                  onClick={enviarFormularioSalvarConcorrente}  
                >
                  Finalizar cadastro
                </button>
              </>
            )
          }
        </footer>
      </form>
    </Container>
  )
}