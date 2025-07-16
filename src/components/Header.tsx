import { Link, useNavigate, useLocation } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLanding = () => {
    navigate("/");
  };

  const linkStyle = {
    marginRight: "1rem",
    color: "#000",
    textDecoration: "none",
  };

  const activeLinkStyle = {
    color: "var(--primary)",
    fontWeight: "bold",
    textDecoration: "underline",
  };

  return (
    <header
      style={{
        padding: "1rem 2rem",
        backgroundColor: "#FFFFFF",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.08)",
      }}
    >
      <div
        onClick={handleLanding}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.2rem",
          cursor: "pointer",
        }}
      >
        <img
          src="/logoMonge.png"
          alt="Logo Monge"
          style={{
            height: "40px",
            width: "auto",
            cursor: "pointer",
          }}
        />
        <h1 style={{ color: "var(--primary)", margin: 0, cursor: "pointer" }}>
          Monge
        </h1>
      </div>

      <nav>
        <Link
          to="/"
          style={{
            ...linkStyle,
            ...(location.pathname === "/" ? activeLinkStyle : {}),
          }}
        >
          Início
        </Link>
        <Link
          to="/contato"
          style={{
            ...linkStyle,
            ...(location.pathname === "/contato" ? activeLinkStyle : {}),
          }}
        >
          Contato
        </Link>
      </nav>
    </header>
  );
}
