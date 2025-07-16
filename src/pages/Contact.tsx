import Header from "../components/Header";
import Footer from "../components/Footer";
import emailjs from "emailjs-com";
import { useState } from "react";
import EmailRounded from "@mui/icons-material/EmailRounded";
import WhatsApp from "@mui/icons-material/WhatsApp";
import { toast } from "react-toastify";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [contactMethod, setContactMethod] = useState<
    "email" | "whatsapp" | null
  >(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send("service_ya0nhk2", "template_vbah83o", form, "N8HBrc8DVq7PYnYKU")
      .then(() => {
        toast.success("Mensagem enviada com sucesso!");
        setForm({ name: "", email: "", message: "" });
      })
      .catch((err) => {
        console.error("Erro ao enviar:", err);
        toast.error("Erro ao enviar mensagem. Tente novamente.");
      });
  };

  const whatsappUrl = `https://wa.me/5592992314121?text=Olá!%20Gostaria%20de%20fazer%20um%20orçamento.`;

  return (
    <>
      <Header />
      <section
        style={{
          padding: "4rem 2rem",
          maxWidth: 800,
          margin: "0 auto",
          minHeight: "490px",
          textAlign: "center",
        }}
      >
        <h2 style={{ marginBottom: "2rem" }}>
          Como você prefere ser atendido?
        </h2>

        {/* Cards de escolha */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "2rem",
            flexWrap: "wrap",
            marginBottom: "2rem",
          }}
        >
          {/* Card E-mail */}
          <div
            onClick={() => setContactMethod("email")}
            style={{
              flex: 1,
              minWidth: 250,
              backgroundColor: "#333 !important",
              border: "2px solid var(--primary)",
              borderRadius: "12px",
              padding: "2rem",
              cursor: "pointer",
              transition: "all 0.3s ease",
              boxShadow:
                contactMethod === "email" ? "0 0 18px var(--primary)" : "none",
            }}
          >
            <EmailRounded sx={{ fontSize: 60, color: "var(--primary)" }} />
            <h3 style={{ marginTop: "1rem", color: "var(--primary)" }}>
              E-mail
            </h3>
            <p style={{ color: "#000" }}>
              Envie uma mensagem com seu pedido. Retornamos no seu e-mail.
            </p>
          </div>

          {/* Card WhatsApp */}
          <div
            onClick={() => {
              setContactMethod("whatsapp");
              window.open(whatsappUrl, "_blank");
            }}
            style={{
              flex: 1,
              minWidth: 250,
              backgroundColor: "#333 !important",
              border: "2px solid #25D366",
              borderRadius: "12px",
              padding: "2rem",
              cursor: "pointer",
              transition: "all 0.3s ease",
              boxShadow:
                contactMethod === "whatsapp" ? "0 0 18px #25D366" : "none",
            }}
          >
            <WhatsApp sx={{ fontSize: 60, color: "#25D366" }} />
            <h3 style={{ marginTop: "1rem", color: "#25D366" }}>WhatsApp</h3>
            <p style={{ color: "#000" }}>
              Clique para conversar diretamente pelo WhatsApp.
            </p>
          </div>
        </div>

        {/* Formulário aparece apenas se email for escolhido */}
        {contactMethod === "email" && (
          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              textAlign: "left",
            }}
          >
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Nome"
              style={inputStyle}
              required
            />
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="E-mail"
              style={inputStyle}
              required
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Descreva aqui seu pedido de orçamento, produto desejado, quantidade ou dúvida."
              rows={5}
              style={inputStyle}
              required
            />
            <button type="submit" style={buttonStyle}>
              Enviar Mensagem
            </button>
          </form>
        )}
      </section>
      <Footer />
    </>
  );
}

const inputStyle = {
  padding: "0.75rem",
  borderRadius: "5px",
  border: "1px solid #444",
  backgroundColor: "#333 !important",
  color: "#000",
};

const buttonStyle = {
  padding: "0.75rem",
  borderRadius: "5px",
  border: "none",
  backgroundColor: "var(--primary)",
  color: "#fff",
  fontWeight: "bold",
  cursor: "pointer",
};
