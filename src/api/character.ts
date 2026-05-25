import type { CharacterT } from "@/app/type/CharacterT";
import api from "./api";


export const getCharacterById = async (id: number) => {
    const response = await api.get<CharacterT>(`/character/${id}`);
    return response.data;
};