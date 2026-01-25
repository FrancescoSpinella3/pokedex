import PokemonFetch from "../PokemonFetch";
import CategoryBar from "./CategoryBar";

export default function DashboardLayout({ searchQuery = '' }) {
    return (
        <div className="min-h-screen bg-gray-50 mx-auto max-w-7xl">
            <CategoryBar />
 
            <PokemonFetch searchQuery={searchQuery} />
        </div>
    );
}