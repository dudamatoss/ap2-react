import { useState } from 'react';

const formularioInicial = {
  nome: '',
  telefone: '',
  egressoConvidado: '',
  pago: '',
  foto: '',
};

function RegistrationForm({ onCadastrar }) {
  const [formulario, setFormulario] = useState(formularioInicial);
  const [erro, setErro] = useState('');

  function handleChange(evento) {
    const { name, value } = evento.target;
    setFormulario({ ...formulario, [name]: value });
  }

  function handleSubmit(evento) {
    evento.preventDefault();
    setErro('');

    const camposVazios =
      !formulario.nome.trim() ||
      !formulario.telefone.trim() ||
      !formulario.egressoConvidado ||
      !formulario.pago ||
      !formulario.foto.trim();

    if (camposVazios) {
      setErro('Preencha todos os campos obrigatórios.');
      return;
    }

    const pessoa = {
      nome: formulario.nome.trim(),
      telefone: formulario.telefone.trim(),
      egressoConvidado: formulario.egressoConvidado,
      pago: formulario.pago,
      foto: formulario.foto.trim(),
    };

    onCadastrar(pessoa);
    setFormulario(formularioInicial);
  }

  return (
    <aside className="formulario">
      <form onSubmit={handleSubmit}>
        <label>
          Nome
          <input
            type="text"
            name="nome"
            value={formulario.nome}
            onChange={handleChange}
          />
        </label>

        <label>
          Telefone
          <input
            type="text"
            name="telefone"
            value={formulario.telefone}
            onChange={handleChange}
          />
        </label>

        <fieldset>
          <legend>Egresso/Convidado</legend>
          <label>
            <input
              type="radio"
              name="egressoConvidado"
              value="sim"
              checked={formulario.egressoConvidado === 'sim'}
              onChange={handleChange}
            />
            Sim
          </label>
          <label>
            <input
              type="radio"
              name="egressoConvidado"
              value="nao"
              checked={formulario.egressoConvidado === 'nao'}
              onChange={handleChange}
            />
            Não
          </label>
        </fieldset>

        <fieldset>
          <legend>Pago</legend>
          <label>
            <input
              type="radio"
              name="pago"
              value="sim"
              checked={formulario.pago === 'sim'}
              onChange={handleChange}
            />
            Sim
          </label>
          <label>
            <input
              type="radio"
              name="pago"
              value="nao"
              checked={formulario.pago === 'nao'}
              onChange={handleChange}
            />
            Não
          </label>
        </fieldset>

        <label>
          Foto
          <input
            type="text"
            name="foto"
            value={formulario.foto}
            onChange={handleChange}
            placeholder="URL da imagem"
          />
        </label>

        {erro && <p className="formulario-erro">{erro}</p>}

        <button type="submit" className="btn-cadastrar">
          Cadastrar
        </button>
      </form>
    </aside>
  );
}

export default RegistrationForm;
