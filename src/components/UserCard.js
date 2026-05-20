function UserCard({ pessoa }) {
  const tipo =
    pessoa.egressoConvidado === 'sim' ? 'Egresso/Convidado' : 'Estudante';
  const status = pessoa.pago === 'sim' ? 'Confirmado' : 'Não confirmado';

  return (
    <article className="card">
      <img className="card-foto" src={pessoa.foto} alt={pessoa.nome} />
      <h3 className="card-nome">{pessoa.nome}</h3>
      <p className="card-tipo">{tipo}</p>
      <p className="card-status">{status}</p>
    </article>
  );
}

export default UserCard;
