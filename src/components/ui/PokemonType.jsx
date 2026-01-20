export default function PokemonType({
    type = '',
    children,
    className = '',
    ...props
}) {

    const name = type || (typeof children === "string" ? children : '');

    const typeColors = {
        normal: 'bg-gray-200 text-gray-800',
        grass: 'bg-green-200 text-green-800',
        fire: 'bg-red-200 text-red-800',
        water: 'bg-blue-200 text-blue-800',
        electric: 'bg-yellow-200 text-yellow-800',
        ice: 'bg-cyan-100 text-cyan-800',
        fighting: 'bg-amber-200 text-amber-800',
        poison: 'bg-violet-200 text-violet-800',
        ground: 'bg-amber-100 text-amber-800',
        flying: 'bg-sky-100 text-sky-800',
        psychic: 'bg-pink-200 text-pink-800',
        bug: 'bg-lime-200 text-lime-800',
        rock: 'bg-stone-200 text-stone-800',
        ghost: 'bg-indigo-200 text-indigo-800',
        dark: 'bg-stone-800 text-white',
        dragon: 'bg-indigo-100 text-indigo-800',
        steel: 'bg-slate-200 text-slate-800',
        fairy: 'bg-pink-100 text-pink-800',
    };

    const key = (name || '').toLowerCase();
    const colorClass = typeColors[key] ||" bg-gray-100 text-gray-800";
    const label = name ? name.charAt(0).toUpperCase() + name.slice(1) : ''


    return (
        <span
            className= {`w-20 px-2 py-1 rounded-md text-xs text-center font-medium ${colorClass} ${className}`}
            {...props}
        >
            {label}
        </span>
    );
}