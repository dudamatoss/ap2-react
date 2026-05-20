import { useState } from 'react';
import Header from './components/Header';
import Welcome from './components/Welcome';
import Location from './components/Location';
import UserList from './components/UserList';
import RegistrationForm from './components/RegistrationForm';
import './App.css';

function App({ nome, titulo }) {
  const [pessoas, setPessoas] = useState([]);

  function handleCadastrar(pessoa) {
    const listaAtualizada = [...pessoas, pessoa];
    listaAtualizada.sort((a, b) => a.nome.localeCompare(b.nome, 'pt-BR'));
    setPessoas(listaAtualizada);
  }

  return (
    <div className="app">
      <Header titulo={titulo} />
      <main className="conteudo">
        <div className="conteudo-principal">
          <Welcome nome={nome} />
          <Location />
          <UserList pessoas={pessoas} />
        </div>
        <RegistrationForm onCadastrar={handleCadastrar} />
      </main>
    </div>
  );
}

export default App;
