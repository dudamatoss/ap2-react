function Header({ titulo }) {
  return (
    <header className="header">
      <div className="header-logo" aria-hidden="true">
        <span className="header-logo-icon">E</span>
      </div>
      <h1 className="header-titulo">{titulo}</h1>
    </header>
  );
}

export default Header;
