import Container from '../../../components/Container';
import useSesso from '../../../hooks/useSessao';


export default function Concorrentes(){

  const {deslogar} = useSesso();

  return(
    <Container>
      Logou
      <button
        type='button'
        onClick={deslogar}
      >
        Deslogar
      </button>
    </Container>
  )
}