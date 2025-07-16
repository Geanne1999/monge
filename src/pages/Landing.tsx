import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Landing() {
  return (
    <>
      <Header />
      <section
        style={{
          backgroundColor: "var(--secondary)",
          backgroundImage: `url('/fundo.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          padding: "4rem 2rem",
          textAlign: "center",
          color: "#fff",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Overlay escurecido */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.55)",
            zIndex: 0,
          }}
        />

        {/* Conteúdo acima do overlay */}
        <div style={{ position: "relative", zIndex: 1 }}>
          <h1
            style={{
              fontSize: "2.8rem",
              marginBottom: "1rem",
              color: "#FFFFFF",
              textShadow: `
                0 0 8px rgba(255, 255, 255, 0.8),
                2px 2px 6px rgba(0, 0, 0, 1.0)
              `,
            }}
          >
            Qualidade e confiança para sua construção
          </h1>
          <p
            style={{
              maxWidth: 600,
              margin: "0 auto",
              fontSize: "1.1rem",
              textShadow: "1px 1px 4px rgba(0,0,0,0.8)",
            }}
          >
            Encontre os melhores materiais para obra, reforma e acabamento.
          </p>
          <a href="#destaques" style={{ textDecoration: "none" }}>
            <button
              style={{
                marginTop: "2rem",
                padding: "1rem 2rem",
                backgroundColor: "#f8640c",
                color: "#fff",
                border: "none",
                borderRadius: "8px",
                fontSize: "1rem",
                fontWeight: "bold",
                cursor: "pointer",
                boxShadow:
                  "0 0 12px rgba(255, 102, 0, 0.5), 0 4px 12px rgba(0, 0, 0, 0.4)",
                transition: "all 0.3s ease-in-out",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = "#ff7a2a";
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.boxShadow =
                  "0 0 18px rgba(255, 102, 0, 0.7), 0 6px 14px rgba(0,0,0,0.5)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = "#f8640c";
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow =
                  "0 0 12px rgba(255, 102, 0, 0.5), 0 4px 12px rgba(0, 0, 0, 0.4)";
              }}
            >
              Saiba mais
            </button>
          </a>
        </div>
      </section>

      <section
        style={{
          padding: "3rem 2rem",
          backgroundColor: "var(--background)",
          textAlign: "center",
        }}
      >
        <span
          style={{
            color: "var(--primary)",
            marginBottom: "1rem",
            fontWeight: "700",
            fontSize: "2.1rem",
          }}
        >
          Serviços
        </span>
        <p style={{ marginBottom: "2rem", fontSize: "1.1rem" }}>
          Confira nossos serviços:
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "2rem",
            maxWidth: "1000px",
            margin: "0 auto",
          }}
        >
          {[
            {
              title: "Entrega Rápida e Agendada",
              description:
                "Receba seus materiais com agendamento flexível, direto na sua obra. Rápido, seguro e pontual.",
              image: "/delivery.jpg",
            },
            {
              title: "Colunas de Ferro Sob Medida",
              description:
                "Produzimos colunas de ferro conforme o seu projeto. Prontas para reforçar sua obra com segurança.",
              image: "/colunas.jpg",
            },
            {
              title: "Consultoria Técnica para Orçamento",
              description:
                "Nossa equipe ajuda você a montar o orçamento ideal, com orientação técnica e escolha dos materiais certos.",
              image: "/consultoria.jpg",
            },
            {
              title: "Venda por WhatsApp e Telefone",
              description:
                "Compre com comodidade por WhatsApp ou telefone. Atendimento ágil, personalizado e com envio rápido.",
              image: "/onlineSales.jpg",
            },
          ].map((card, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "#fff",
                borderRadius: "12px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                overflow: "hidden",
                textAlign: "left",
                transition: "all 0.3s ease",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.boxShadow = "0 12px 24px rgba(0,0,0,0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
              }}
            >
              <img
                src={card.image}
                alt={card.title}
                style={{
                  width: "100%",
                  height: "180px",
                  objectFit: "cover",
                  objectPosition: index === 0 ? "top" : "center",
                }}
              />
              <div style={{ padding: "1.5rem" }}>
                <h3 style={{ color: "var(--primary)", marginBottom: "0.5rem" }}>
                  {card.title}
                </h3>
                <p style={{ color: "#333" }}>{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        id="destaques"
        style={{
          padding: "3rem 2rem",
          backgroundColor: "var(--background)",
          textAlign: "center",
          fontSize: "1.1rem",
        }}
      >
        <h2
          style={{
            color: "var(--primary)",
            fontSize: "2.1rem",
            marginBottom: "1rem",
          }}
        >
          Produtos
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "1.5rem",
            maxWidth: "1000px",
            margin: "0 auto",
          }}
        >
          {[
            "Cimento",
            "Areia ensacada",
            "Tijolos",
            "Tintas",
            "Tubos e conexões",
            "Argamassa",
            "Telhas",
            "Rejunte",
            "Material elétrico",
            "Pincéis e rolos",
            "Lixas e abrasivos",
            "Kit vaso sanitário",
            "Pias, cubas e lavatórios",
            "Acessórios para banheiro",
            "Parafusos e buchas",
            "Portas de madeira e alumínio",
          ].map((produto, index) => (
            <div
              key={index}
              style={{
                position: "relative",
                backgroundColor: "#fff",
                padding: "1.5rem",
                borderRadius: "10px",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.06)",
                transition: "all 0.3s ease",
                fontWeight: "bold",
                color: "#333",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow =
                  "0 8px 20px rgba(0, 0, 0, 0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 4px 12px rgba(0, 0, 0, 0.06)";
              }}
            >
              {(produto === "Areia ensacada" ||
                produto === "Cimento" ||
                produto === "Tijolos") && (
                <div
                  style={{
                    position: "absolute",
                    top: "0.1rem",
                    right: "0.5rem",
                    backgroundColor: "var(--primary)",
                    color: "#fff",
                    padding: "0.3rem 0.6rem",
                    borderRadius: "999px",
                    fontSize: "0.7rem",
                    fontWeight: "bold",
                  }}
                >
                  #MaisVendidos
                </div>
              )}
              {produto}
            </div>
          ))}
        </div>
      </section>
      <section
        style={{
          marginTop: "4rem",
          padding: "3rem 2rem",
          backgroundColor: "var(--primary)",
          color: "#fff",
          textAlign: "center",
          maxWidth: "100%",
          marginInline: "auto",
        }}
      >
        <h2 style={{ fontSize: "2rem", marginBottom: "1rem", color: "#FFF" }}>
          Interessado em algum dos produtos?
        </h2>
        <p style={{ fontSize: "1.1rem", marginBottom: "2rem" }}>
          Fale com a nossa equipe e receba um orçamento personalizado.
        </p>
        <a href="/contato" style={{ textDecoration: "none" }}>
          <button
            style={{
              padding: "1rem 2rem",
              fontSize: "1rem",
              fontWeight: "bold",
              border: "none",
              borderRadius: "8px",
              backgroundColor: "#fff",
              color: "var(--primary)",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#f0f0f0")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#fff")
            }
          >
            Entrar em contato
          </button>
        </a>
      </section>

      <Footer />
    </>
  );
}
