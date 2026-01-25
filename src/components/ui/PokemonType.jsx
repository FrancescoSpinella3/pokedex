export default function PokemonType({
    type = '',
    children,
    className = '',
    ...props
}) {

    const name = type || (typeof children === "string" ? children : '');

    const typeColors = {
        normal: 'bg-gray-400 text-zinc-900',
        grass: 'bg-green-400 text-zinc-900',
        fire: 'bg-orange-500 text-white',
        water: 'bg-blue-500 text-white',
        electric: 'bg-yellow-300 text-zinc-900',
        ice: 'bg-cyan-200 text-zinc-900',
        fighting: 'bg-orange-400 text-white',
        poison: 'bg-violet-500 text-white',
        ground: 'bg-amber-800 text-white',
        flying: 'bg-sky-300 text-zinc-900',
        psychic: 'bg-pink-500 text-white',
        bug: 'bg-lime-300 text-zinc-900',
        rock: 'bg-stone-500 text-white',
        ghost: 'bg-indigo-500 text-white',
        dark: 'bg-stone-800 text-white',
        dragon: 'bg-indigo-300 text-zinc-900',
        steel: 'bg-slate-300 text-zinc-900',
        fairy: 'bg-pink-300 text-zinc-900',
    };

    // Transalation to italian
    const translations = {
        normal: 'Normale',
        grass: 'Erba',
        fire: 'Fuoco',
        water: 'Acqua',
        electric: 'Elettro',
        ice: 'Ghiaccio',
        fighting: 'Lotta',
        poison: 'Veleno',
        ground: 'Terra',
        flying: 'Volante',
        psychic: 'Psico',
        bug: 'Coleottero',
        rock: 'Roccia',
        ghost: 'Spettro',
        dark: 'Buio',
        dragon: 'Drago',
        steel: 'Acciaio',
        fairy: 'Folletto',
    };

    const key = (name || '').toLowerCase();
    const colorClass = typeColors[key] ||" bg-gray-100 text-gray-800";
    const defaultLable = name ? name.charAt(0).toUpperCase() + name.slice(1) : '';
    const label = translations[key] || defaultLable;


    return (
        <span
            className= {`w-20 px-2 py-1 rounded-md text-xs text-center font-medium ${colorClass} ${className}`}
            {...props}
        >
            {label}
        </span>
    );
}