import { useEffect, useState } from 'react';

function Location() {
  const [endereco, setEndereco] = useState({});
  const [mostrarLocalizacao, setMostrarLocalizacao] = useState(false);

  useEffect(() => {
    fetch('https://viacep.com.br/ws/95560000/json/')
      .then((resposta) => resposta.json())
      .then((dados) => setEndereco(dados));
  }, []);

  return (
    <section className="localizacao">
      <button
        type="button"
        className="btn-localizacao"
        onClick={() => setMostrarLocalizacao(!mostrarLocalizacao)}
      >
        Localização
      </button>

      {mostrarLocalizacao && (
        <div className="localizacao-dados">
          <p>
            <span>CEP:</span> {endereco.cep}
          </p>
          <p>
            <span>CIDADE:</span> {endereco.localidade}
          </p>
          <p>
            <span>BAIRRO:</span> {endereco.bairro}
          </p>
          <p>
            <span>AV/RUA:</span> {endereco.logradouro}
          </p>
        </div>
      )}
    </section>
  );
}

export default Location;
