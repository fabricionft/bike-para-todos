import useMessagebox from '../../hooks/useMessageBox';
import styles from './MessaageBox.module.css';

export default function MessaageBox(){

  const {visibilidadeMessagebox, esconder, dados} = useMessagebox();

  return(
    <>
      {
        visibilidadeMessagebox && (
          <div className={styles.containerMessageBox}>
            <div className={styles.messagebox}>
              <div className={styles.margemMessagebox}>
                <p>
                  {
                    typeof(dados.msg) == "string" ? dados.msg
                    : dados.msg.map((linha, index) => (
                      <div key={index}>
                        - {linha}
                        <br/>
                      </div>
                    ))
                  }
                </p>

                <button 
                  type='button'
                  className={styles[dados.sucesso ? "sucesso" : "falha"]}
                  onClick={esconder}
                >
                  {dados.sucesso ? "Prosseguir" : "Tentar novamente"}
                </button>
              </div>
            </div>
          </div>
        )
      }
    </>
  )
}