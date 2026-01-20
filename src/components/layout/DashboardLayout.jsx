import PokemonFetch from "../PokemonFetch";
import FilterButton from "../ui/FilterButton";

export default function DashboardLayout() {
    return (
        <div className="min-h-screen bg-gray-50 mx-auto max-w-7xl px-5 py-7">
            <FilterButton />
 
            <PokemonFetch />
        </div>
    );
}