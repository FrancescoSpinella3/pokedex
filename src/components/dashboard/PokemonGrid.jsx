export default function PokemonGrid({ pokemonList = [] }) {
    return (
        <div className="flex items-center justify-center">
            <div className="grid grid-cols-3 cursor-pointer w-3xl gap-10">
                {pokemonList.map(pokemon => (
                    <div 
                        key={pokemon.id}
                        className="flex flex-col items-center border border-gray-300 rounded-md bg-gray-100 shadow-md p-4 hover:scale-110 duration-200 ease-out"
                    >
                        <img src={pokemon.image} 
                            alt={pokemon.name}
                            className="w-36 h-auto"
                        />
                        <div className="w-full flex flex-col">
                            <span className="text-gray-500 text-sm font-medium">N. {pokemon.id}</span>
                            <p className="font-bold text-gray-800">{pokemon.name ? pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1) : ''}</p>
                            <div className="flex gap-2">
                                {(pokemon.types || []).map(type => (
                                    <span 
                                        key={type}
                                        className="text-sm"
                                    >
                                        {type}
                                    </span>
                                ))}
                            </div>
                        </div>   
                    </div>
                ))}
            </div>
        </div>
    );
}