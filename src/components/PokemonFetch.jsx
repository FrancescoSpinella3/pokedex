import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import PokemonGrid from "./dashboard/PokemonGrid";

export default function PokemonFetch() {
    const [pokemonList, setPokemon] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('')

    useEffect(() => {
        setTimeout(() => fetchPokemon(), 1000)
    }, [])

    const fetchPokemon = async (offset = 0) => {
        try {
            setLoading(true)
            // Fetching data
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/`);
            if (!response.ok) {
                throw new Error("Errore durante il caricamento");
            }
            const pokemon = await response.json();
            const details = await Promise.all(pokemon.results.map(async p => {
                const r = await fetch(p.url);
                const d = await r.json();
                const types = (d.types || []).map(t => t.type.name);
                return { name: d.name, id: d.id, image: d.sprites.other['official-artwork'].front_default, types };
            }))
            // Save result in to the state
            setPokemon(details || []);
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
            <div className="w-full flex items-center justify-center">
                <img 
                    src="/images/pokeball.png" 
                    alt="loading ball"
                    className="h-24 animate-spin"
                />
            </div>
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