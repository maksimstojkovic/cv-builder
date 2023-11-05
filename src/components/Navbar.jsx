import "../styles/Navbar.scss";

function Navbar() {
  const sections = ["General", "Education", "Experience"];

  return (
    <nav className="navbar">
      {sections.map((section) => {
        return (
          <div key={section} className="navbar-item">
            {section}
          </div>
        );
      })}
    </nav>
  );
}

export default Navbar;
