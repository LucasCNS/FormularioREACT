import React from 'react';
import { FormularioCadastro } from './components/FormularioCadastro';
import ListaDeNotas from "./components/ListaDeNotas"

class App() {
  return (
    <section>
      <FormularioCadastro />
      <ListaDeNotas />
    </section>
  );
}

export default App;