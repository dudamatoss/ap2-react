import { useState } from 'react';
import {
  formatarTelefone,
  telefoneValido,
} from '../utils/formatarTelefone';

const formularioInicial = {
  nome: '',
  telefone: '',
  egressoConvidado: '',
  pago: '',
  foto: '',
};

const errosIniciais = {
  nome: '',
  telefone: '',
  egressoConvidado: '',
  pago: '',
  foto: '',
};

function CampoAlerta({ mensagem }) {
  if (!mensagem) return null;
  return <span className="campo-alerta">Atenção: {mensagem}</span>;
}

function RegistrationForm({ onCadastrar }) {
  const [formulario, setFormulario] = useState(formularioInicial);
  const [erros, setErros] = useState(errosIniciais);

  function limparErroCampo(nome) {
    setErros((atual) => (atual[nome] ? { ...atual, [nome]: '' } : atual));
  }

  function handleChange(evento) {
    const { name, value } = evento.target;
    limparErroCampo(name);

    if (name === 'telefone') {
      setFormulario({ ...formulario, telefone: formatarTelefone(value) });
      return;
    }

    setFormulario({ ...formulario, [name]: value });
  }

  function validarCampos() {
    const novosErros = { ...errosIniciais };

    if (!formulario.nome.trim()) {
      novosErros.nome = 'Este campo é obrigatório.';
    }

    if (!formulario.telefone.trim()) {
      novosErros.telefone = 'Este campo é obrigatório.';
    } else if (!telefoneValido(formulario.telefone)) {
      novosErros.telefone =
        'Informe um telefone válido: (XX) XXXX-XXXX ou (XX) 9XXXX-XXXX.';
    }

    if (!formulario.egressoConvidado) {
      novosErros.egressoConvidado = 'Selecione Sim ou Não.';
    }

    if (!formulario.pago) {
      novosErros.pago = 'Selecione Sim ou Não.';
    }

    const urlFoto = formulario.foto.trim();

    if (!urlFoto) {
      novosErros.foto = 'Este campo é obrigatório.';
    } else if (!/^https?:\/\/.+/i.test(urlFoto)) {
      novosErros.foto = 'Use um link válido começando com http:// ou https://.';
    } else if (/instagram\.com|facebook\.com|tiktok\.com/i.test(urlFoto)) {
      novosErros.foto =
        'Link de rede social não funciona. Use o endereço direto da imagem.';
    } else if (
      /\.html?(\?|#|$)/i.test(urlFoto) ||
      urlFoto.includes('#fromView')
    ) {
      novosErros.foto =
        'Este link é da página do site, não da foto. Copie o endereço direto da imagem (.jpg ou .png).';
    }

    return novosErros;
  }

  function handleSubmit(evento) {
    evento.preventDefault();

    const novosErros = validarCampos();
    setErros(novosErros);

    const possuiErro = Object.values(novosErros).some((mensagem) => mensagem);
    if (possuiErro) return;

    const pessoa = {
      nome: formulario.nome.trim(),
      telefone: formulario.telefone.trim(),
      egressoConvidado: formulario.egressoConvidado,
      pago: formulario.pago,
      foto: formulario.foto.trim(),
    };

    onCadastrar(pessoa);
    setFormulario(formularioInicial);
    setErros(errosIniciais);
  }

  return (
    <aside className="formulario">
      <h2 className="formulario-titulo">Cadastro</h2>
      <form onSubmit={handleSubmit} noValidate>
        <div className={`campo ${erros.nome ? 'campo--erro' : ''}`}>
          <label>
            Nome
            <input
              type="text"
              name="nome"
              value={formulario.nome}
              onChange={handleChange}
            />
          </label>
          <CampoAlerta mensagem={erros.nome} />
        </div>

        <div className={`campo ${erros.telefone ? 'campo--erro' : ''}`}>
          <label>
            Telefone
            <input
              type="tel"
              name="telefone"
              value={formulario.telefone}
              onChange={handleChange}
              placeholder="(51) 99999-9999"
              maxLength={15}
            />
          </label>
          <CampoAlerta mensagem={erros.telefone} />
        </div>

        <div className={`campo ${erros.egressoConvidado ? 'campo--erro' : ''}`}>
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
          <CampoAlerta mensagem={erros.egressoConvidado} />
        </div>

        <div className={`campo ${erros.pago ? 'campo--erro' : ''}`}>
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
          <CampoAlerta mensagem={erros.pago} />
        </div>

        <div className={`campo ${erros.foto ? 'campo--erro' : ''}`}>
          <label>
            Foto
            <input
              type="text"
              name="foto"
              value={formulario.foto}
              onChange={handleChange}
              placeholder="https://i.pravatar.cc/150"
            />
          </label>
          <CampoAlerta mensagem={erros.foto} />
        </div>

        <button type="submit" className="btn-cadastrar">
          Cadastrar
        </button>
      </form>
    </aside>
  );
}

export default RegistrationForm;
