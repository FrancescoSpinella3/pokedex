export default function Navbar() {
    return (
        <nav className="bg-gray-800 shadow-lg">
            <div className="mx-auto px-10 py-2">
                <div className="flex justify-between items-center h-18">
                    <a href='/'>
                        <img 
                            src="/logo-pokemon.png" 
                            alt="Logo" 
                            className="h-12 w-auto hover:h-13 duration-300 ease-out"
                        />
                    </a>
                </div>
            </div>
        </nav>
    );
}