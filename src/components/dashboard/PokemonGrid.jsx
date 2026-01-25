import PokemonType from "../ui/PokemonType";

export default function PokemonGrid({ pokemonList = [] }) {
    return (
        <div className="flex items-center justify-center">
            <div className="grid grid-cols-4 cursor-pointer w-5xl gap-5">
                {pokemonList.map(pokemon => (
                    <div 
                        key={pokemon.id}
                        className="flex flex-col items-center border border-gray-300 rounded-md bg-gray-200 shadow-md hover:scale-110 hover:bg-gray-300 duration-200 ease-out overflow-hidden"
                    >   
                        <div className="p-4">
                            <img src={pokemon.image} 
                            alt={pokemon.name}
                            className="w-36 h-auto"
                            />
                        </div>

                        <div className="w-full flex flex-col bg-white p-4">
                            <span className="text-gray-500 text-sm font-semibold">N° {pokemon.id}</span>
                            <p className="font-bold text-xl text-gray-800 mb-2">{pokemon.name ? pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1) : ''}</p>
                            <div className="flex gap-2">
                                {(pokemon.types || []).map(type => (
                                    <PokemonType key={type} type={type} />
                                ))}
                            </div>
                        </div>   
                    </div>
                ))}
            </div>
        </div>
    );
}