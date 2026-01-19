export default function PokemonGrid({ pokemonList = [] }) {
    return (
        <div className="grid grid-cols-4 cursor-pointer">
            {pokemonList.map(pokemon => (
                <div 
                    key={pokemon.name}
                >
                    {pokemon.name}
                </div>
            ))}
        </div>
    );
}