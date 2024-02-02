import { useState } from "react"

const useFormulario = () => {

  const [indice, setIndice] = useState(0);

  const proximo = () => setIndice(indice + 1);
  const anterior = () => setIndice(indice - 1);

  return{indice, proximo, anterior};
}

export default useFormulario;