import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [dataHora, setDataHora] = useState("Carregando...");

  async function carregarDataHora() {
    try {
      const response = await fetch("https://api-data-hora-cj2u.onrender.com/data-hora");
      const dados = await response.json();

      setDataHora({
        data: dados.data,
        hora: dados.hora
      });
    } catch (erro) {
      setDataHora(null);
      console.error(erro);
    }
  }

  useEffect(() => {
    carregarDataHora();
    setInterval(carregarDataHora, 1000);
  }, []);

  return (
    <div className="container">
      <div className="card">
        <h1>Atv 8: API Data e Hora</h1>

        {dataHora ? (
          <>
            <p className="data">{dataHora.data}</p>
            <p className="hora">{dataHora.hora}</p>
          </>
        ) : (
          <p>Erro ao carregar 😢</p>
        )}
      </div>
    </div>
  );
}

export default App;