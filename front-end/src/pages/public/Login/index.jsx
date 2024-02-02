import Container from "../../../components/Container";
import useUsuario from "../../../hooks/useUsuario";

export default function Login(){

  const {usuario, preencherUsuario, enviarFormularioLogin} = useUsuario();

  return(
    <Container centralizar={true}>
      <form onSubmit={enviarFormularioLogin}>
        <input 
          type="text" 
          placeholder="Usuario"
          name="usuario"
          onChange={(e) => preencherUsuario(e)}
          value={usuario.usuario || ""}
        />

        <input 
          type="text" 
          placeholder="Senha"  
          name="senha"
          onChange={(e) => preencherUsuario(e)}
          value={usuario.senha || ""}
        />

        <button
          disabled={(usuario.usuario && usuario.senha) ? false : true}
          className={(usuario.usuario && usuario.senha) ? "" : "desativado"}
        >
          Logar
        </button>
      </form>
    </Container>
  )
}