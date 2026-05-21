function Welcome({ nome }) {
  return (
    <section className="welcome-box">
      <p className="welcome">
        Seja bem vindo(a), <strong>{nome}</strong>
      </p>
    </section>
  );
}

export default Welcome;
