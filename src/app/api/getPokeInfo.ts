"use server"
import http from "@/http";
import { gql } from '@apollo/client';
import client from "./apollo-client";

export const getPokemon = async (searchValue: string) => {
    try {
        const req = await http.get(searchValue.toLowerCase())
        const res = req.data
        return res
    }
    catch (error) {
        console.log(error)
    }
}

const GET_POKEMON_INFO = gql`
    query {
        pokemons {
            name
        }
    }
`;

export const getPokemonsNames = async () => {
    try {
        const { data } = await client.query({
            query: GET_POKEMON_INFO,
        });
        return data.pokemons;
    } catch (error) {
        console.error(error);
        throw new Error("Failed to fetch Pokémon info");
    }
};

