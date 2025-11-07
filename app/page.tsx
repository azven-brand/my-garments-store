export default function Home() {
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#f8f9fa",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1 style={{ fontSize: "2.5rem", color: "#222" }}>
        👕 Welcome to <span style={{ color: "#0070f3" }}>My Garments Store</span>
      </h1>
      <p style={{ fontSize: "1.2rem", color: "#555", marginTop: "1rem" }}>
        Stylish wear, premium quality — delivered with confidence.
      </p>
      <a
        href="https://wa.me/966XXXXXXXXX"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          marginTop: "2rem",
          padding: "12px 24px",
          backgroundColor: "#25D366",
          color: "#fff",
          borderRadius: "8px",
          textDecoration: "none",
          fontSize: "1.1rem",
        }}
      >
        📱 Order on WhatsApp
      </a>
    </main>
  );
}
