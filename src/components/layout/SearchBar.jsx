import { useState } from "react";

export default function SearchBar({ onSearch = () => {} }) {
    const [input, setInput] = useState('');
    
    const submit = () => onSearch(input.trim());

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') submit();
    }


    return (
        <div className="bg-gray-100">
            <div className="bg-gray-100 border-b border-gray-300 flex items-center justify-between py-5 gap-28 max-w-7xl mx-auto">
                <div className="flex items-center gap-3">
                    <img 
                        src="/images/pokedex.png" 
                        alt="Pokédex" 
                        className="h-16"
                    />
                    <h1 className="text-4xl font-bold text-gray-900">Pokédex</h1>
                </div>
                <div className="relative flex items-center">
                    {/* Search icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                        <path d="m21 21-4.34-4.34"/>
                        <circle cx="11" cy="11" r="8"/>
                    </svg>

                    {/* Input text */}
                    <input 
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="Cerca un pokémon per nome o numero"
                        className="border border-gray-400 p-2 pl-9 rounded-md w-sm focus:outline-gray-600 mr-5"
                    />

                    {/* Search button */}
                    <button
                        onClick={submit}
                        className="bg-sky-500 px-5 py-2.5 rounded-md text-white font-medium cursor-pointer hover:bg-sky-600 duration-200 ease-out"
                    >
                        Cerca
                    </button>
                </div>
            </div>
        </div>
    );
}