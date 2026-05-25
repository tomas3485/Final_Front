"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import type { CharacterT } from "@/app/type/CharacterT";
import { getCharacterById } from "@/api/character";
import "@/app/character/[id]/style.css"
const CharacterPage = () => {
  const { id } = useParams<{ id: string }>();

  const [character, setCharacter] = useState<CharacterT | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    setLoading(true);
    setError(null);

    getCharacterById(Number(id))
      .then((data) => setCharacter(data))
      .catch((err: Error) => setError(err.message))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p>loading...</p>;
  if (error || !character) return <p>{error ?? "Personaje no encontrado"}</p>;

  return (
    <div className="CharacterDetail">
      

      <img src={character.image} alt={character.name} />
      <div className="klk">
        <div className="info">
          <p>ID: {character.id}</p>
          <p>Nombre: {character.name}</p>
          <p>Estado: {character.status}</p>
          <p>Especie: {character.species}</p>
          <p>Género: {character.gender}</p>
          <p>Origen: {character.origin.name}</p>
          <p>Ubicación: {character.location.name}</p>
        </div>

      <Link href="/">Volver </Link>
      </div>
    </div>
  );
};

export default CharacterPage;