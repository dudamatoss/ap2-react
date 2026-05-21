function UserCard({ pessoa }) {
  const tipo =
    pessoa.egressoConvidado === 'sim' ? 'Egresso/Convidado' : 'Estudante';
  const status = pessoa.pago === 'sim' ? 'Confirmado' : 'Não confirmado';
  const confirmado = pessoa.pago === 'sim';

  return (
    <article className="card">
      <div className="card-foto-wrapper">
        <img
          className="card-foto"
          src={pessoa.foto}
          alt={pessoa.nome}
          referrerPolicy="no-referrer"
        />
      </div>
      <h3 className="card-nome">{pessoa.nome}</h3>
      <span className="card-badge card-badge--tipo">{tipo}</span>
      <span
        className={`card-badge ${confirmado ? 'card-badge--confirmado' : 'card-badge--pendente'}`}
      >
        {status}
      </span>
    </article>
  );
}

export default UserCard;
