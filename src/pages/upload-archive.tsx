import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/upload-archive.css";

const UploadArchive = () => {
  const [file, setFile] = useState<File | null>(null);
  const [mensaje, setMensaje] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return;

    setIsLoading(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("http://127.0.0.1:6005/add_pdf", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      setMensaje(res.ok ? `✅ ${data.message} (ID: ${data.ids}) (Archivo Agregador ${data.archivo})` : `❌ ${data.error}`);
    } catch (err) {
      setMensaje(`❌ Error: ${String(err)}`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = (e: React.MouseEvent) => {
    e.preventDefault();  // Prevent default behavior of the Link
    window.close();  // Close the current window/tab
  };

  return (
    <div style={{ background: "#0d1b2a", color: "#fff", minHeight: "100vh", padding: "20px" }}>
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h1>UTN ChromaDB</h1>
        <Link
          to="#"
          onClick={handleClose}  // Add onClick to close the window
          style={{
            color: "#fff",
            textDecoration: "none",
            background: "#003566",
            padding: "8px 12px",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Salir
        </Link>
      </header>

      <main style={{ marginTop: "40px", maxWidth: "500px", marginInline: "auto" }}>
        <h2>Subir Documento PDF</h2>
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <input type="file" accept=".pdf" onChange={handleFileChange} style={{ padding: "10px" }} />
          <button
            type="submit"
            disabled={isLoading}
            style={{
              background: "#0056b3",
              color: "#fff",
              padding: "10px",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            {isLoading ? "Procesando..." : "Subir PDF"}
          </button>
        </form>
        {mensaje && <p style={{ marginTop: "12px" }}>{mensaje}</p>}
      </main>
    </div>
  );
};

export default UploadArchive;
