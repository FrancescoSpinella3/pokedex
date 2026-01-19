import { ChevronDown } from "lucide-react";

export default function FilterButton() {
    return (
        <button 
            className="text-sm font-medium text-gray-800 cursor-pointer flex items-center justify-center mb-10">
            Filtra per tipo
            <ChevronDown className="size-5 ml-1" />
        </button>
    );
}