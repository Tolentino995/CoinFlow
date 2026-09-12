const Header = () => {

    return (
        <header className="w-full bg-white/90 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                
                {/* Lado Izquierdo: Logo */}
                <div className="flex-shrink-0 flex items-center gap-3 cursor-pointer group">
                    {/* Icono del Logo (Dinámico y abstracto en color cian) */}
                    <svg 
                    className="w-8 h-8 text-cyan-500 group-hover:scale-105 transition-transform duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2.5} 
                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" 
                    />
                    </svg>
                    {/* Texto del Logo CoinFlow */}
                    <span className="text-2xl font-bold tracking-tight text-gray-800">
                    Coin<span className="text-cyan-500">Flow</span>
                    </span>
                </div>

                {/* Lado Derecho: Botones (SIN ICONOS) */}
                <div className="flex items-center gap-3 sm:gap-4">
                    {/* Botón Overview (Estilo Contorno / Limpio) */}
                    <button className="px-6 py-2.5 text-sm font-medium text-gray-600 bg-white border border-gray-200 rounded-full hover:bg-gray-50 hover:text-gray-900 transition-all duration-200">
                    Overview
                    </button>
                    
                    {/* Botón Watchlist (Estilo Sólido Cian / Botón principal) */}
                    <button className="px-6 py-2.5 text-sm font-medium text-white bg-cyan-500 rounded-full hover:bg-cyan-600 shadow-md shadow-cyan-500/20 hover:shadow-lg hover:shadow-cyan-500/40 transition-all duration-200">
                    Watchlist
                    </button>
                </div>

                </div>
            </div>
        </header>
    );
}

export default Header