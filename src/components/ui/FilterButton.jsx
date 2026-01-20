import { SlidersHorizontal } from "lucide-react";

export default function FilterButton() {
    return (
        <button 
            className="font-medium text-gray-800 cursor-pointer flex items-center justify-center gap-2 mb-10">
            <SlidersHorizontal className="size-5" /> 
            Filtra per tipo
        </button>
    );
}