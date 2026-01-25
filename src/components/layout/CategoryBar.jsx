import { useState } from "react";
import FilterButton from "../ui/FilterButton";

export default function CategoryBar() {

    const typeColors = [
        {type: "Tutti", class: 'bg-white text-zinc-900'},
        {type: "normale", class: 'bg-gray-400 text-zinc-900'},
        {type: "erba", class: 'bg-green-400 text-zinc-900'},
        {type: "fuoco", class: 'bg-orange-500 text-white'},
        {type: "acqua", class: 'bg-blue-500 text-white'},
        {type: "elettro", class: 'bg-yellow-300 text-zinc-900'},
        {type: "ghiaccio", class: 'bg-cyan-100 text-cyan-800'},
        {type: "lotta", class: 'bg-orange-400 text-white'},
        {type: "veleno", class: 'bg-violet-500 text-white'},
        {type: "terra", class: 'bg-amber-800 text-white'},
        {type: "volante", class: 'bg-sky-300 text-zinc-900'},
        {type: "psico", class: 'bg-pink-500 text-white'},
        {type: "coleottero", class: 'bg-lime-300 text-zinc-900'},
        {type: "roccia", class: 'bg-stone-500 text-white'},
        {type: "spettro", class: 'bg-indigo-500 text-white'},
        {type: "buio", class: 'bg-stone-800 text-white'},
        {type: "drago", class: 'bg-indigo-300 text-zinc-900'},
        {type: "acciaio", class: 'bg-slate-300 text-zinc-900'},
        {type: "folletto", class: 'bg-pink-300 text-zinc-900'}
    ];

    const [showTypes, setShowTypes] = useState(false);


    return (
        <div className="bg-zinc-600 p-4 mb-16">
            <FilterButton isOpen={showTypes} onClick={() => setShowTypes(prev => !prev)}/>

            {showTypes && (
                <div>
                    <div className="flex flex-wrap gap-5 max-w-3xl mx-auto p-5">
                        {typeColors.map(t => (
                            <button
                            key={t.type}
                                className={`${t.class} w-26 px-4 py-2 rounded-md text-sm text-center font-semibold cursor-pointer border-2 border-gray-200`}
                            >
                                {t.type.charAt(0).toUpperCase() + t.type.slice(1)}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}