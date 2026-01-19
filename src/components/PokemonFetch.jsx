import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import PokemonGrid from "./dashboard/PokemonGrid";

export default function PokemonFetch() {
    const [pokemonList, setPokemon] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('')

    useEffect(() => {
        setTimeout(() => fetchPokemon()
    ), 3000
        
    }, [])

    const fetchPokemon = async (offset = 0) => {
        try {
            setLoading(true)
            // Fetching data
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offset}`);
            if (!response.ok) {
                throw new Error("Errore durante il caricamento");
            }
            const pokemon = await response.json();
            // Save result in to the state
            setPokemon(pokemon.results || []);
            console.log(pokemon);


        } catch (error) {
            setError("Errore durante il caricamento della lista dei pokemon")
            console.error("Error during fecthing pokemon: ", error);
        } finally {
            setLoading(false)
        }
    }

    if (loading) {
        return (
            <Loader2 className="animate-spin" />
        );
    }

    if (error) {
        return (
            <div className="flex justify-center">
                <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-2 rounded-md flex w-100 text-center">
                    {error}
                </div>

            </div>
        );
    }

    return (
        <PokemonGrid pokemonList={pokemonList} />
    );
}