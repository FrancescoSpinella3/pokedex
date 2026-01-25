import { SlidersHorizontal, X } from "lucide-react";

export default function FilterButton({ isOpen = false, onClick }) {
    return (
        <button 
            onClick={onClick}
            className="font-medium text-white cursor-pointer flex items-center justify-center gap-2"
        >
            {isOpen
                ? <span className="flex gap-2"><X />Chiudi</span>
                : <span className="flex gap-2"><SlidersHorizontal className="size-5" />Filtra per tipo</span>
            }

        </button>
    );
}