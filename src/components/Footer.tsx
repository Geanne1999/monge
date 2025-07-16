export default function Footer() {
  return (
    <footer
      style={{
        padding: "1rem",
        backgroundColor: "#f5f5f5",
        textAlign: "center",
        marginTop: "2rem",
        fontSize: "0.9rem",
        color: "#333",
      }}
    >
      <p>
        Produzido por{" "}
        <a
          href="https://www.instagram.com/enigmetech"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "#333",
            fontWeight: "bold",
            textDecoration: "none",
          }}
        >
          Enigme Creative Studio
        </a>
        <span style={{ margin: "0 0.5rem" }}>|</span>
        &copy; 2025 Monge Materiais de Construção
      </p>
    </footer>
  );
}
