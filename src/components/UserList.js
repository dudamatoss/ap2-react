import UserCard from './UserCard';

function UserList({ pessoas }) {
  if (pessoas.length === 0) {
    return (
      <p className="lista-vazia">
        Nenhum convidado cadastrado ainda. Preencha o formulário ao lado.
      </p>
    );
  }

  return (
    <section className="lista-pessoas">
      {pessoas.map((pessoa) => (
        <UserCard key={pessoa.nome + pessoa.telefone} pessoa={pessoa} />
      ))}
    </section>
  );
}

export default UserList;
