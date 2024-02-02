import useRoutes from "../../../hooks/useRoutes"
import useSessao from "../../../hooks/useSessao";


export default function PrivatePage({children}){

  const {bloquearRotaPrivada} = useRoutes();
  const {sessao} = useSessao();

  bloquearRotaPrivada();

  return(
    <>
      {sessao && children}
    </>
  )
}