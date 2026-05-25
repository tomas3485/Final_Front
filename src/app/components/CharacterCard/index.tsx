import type { CharacterT } from "@/app/type/CharacterT";
import Link from "next/link";

const CharacterCard = ({ character }: { character: CharacterT }) => {
    return (
        <Link href={`/character/${character.id}`}>
            <div className="CharacterCard">
                <img src={character.image} />
                <p>Nombre : {character.name}</p>
                <p>Status : {character.status}</p>
                <p>Genero : {character.gender}</p>
            </div>
        </Link>
    );
};

export default CharacterCard