'use client'
import { useEffect, useState, KeyboardEvent } from "react"
import type { ResultCharactersT } from "./type/CharacterT"
import api from "@/api/api";
import CharacterCard from "./components/CharacterCard";
import Paginacion from "./components/Paginacion";


const Home = () => {
  const [personajes, setPersonajes] = useState<ResultCharactersT | null>(null);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [nameInput, setNameInput] = useState("");
  const [name, setName] = useState("");

  const mostrarPersonajes = () => {
    api.get(`character?page=${page}&name=${name}`)
      .then((e) => {
        const { data }: { data: ResultCharactersT } = e;
        setPersonajes(data);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    mostrarPersonajes();
  }, [page, name]);

  const FiltroNombre = () => {
    setName(nameInput);
    setPage(1);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") FiltroNombre();
  };

  if (loading) return <p>Loading...</p>;
  return (
    <div className="mainCharacters">
      <div className="buscador">
        <input
        className="input"
          type="text"
          placeholder="Buscar por nombre..."
          value={nameInput}
          onChange={(e) => setNameInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        
      </div>

      <div className="personajes">
        {personajes && personajes.results.length > 0
          ? personajes.results.map((e) => <CharacterCard key={e.id} character={e} />)
          : <p>No se encontraron personajes.</p>
        }
      </div>

      <Paginacion next={!!personajes?.info.next} prev={!!personajes?.info.prev} page={page} setPage={(e) => setPage(e)} totalPages={personajes?.info.pages ?? 1}/>
    </div>
  );
};

export default Home;