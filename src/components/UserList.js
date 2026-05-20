import UserCard from './UserCard';

function UserList({ pessoas }) {
  return (
    <section className="lista-pessoas">
      {pessoas.map((pessoa) => (
        <UserCard key={pessoa.nome + pessoa.telefone} pessoa={pessoa} />
      ))}
    </section>
  );
}

export default UserList;
