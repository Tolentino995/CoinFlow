const Spinner = () => {
    return (
    <div className="flex flex-col items-center justify-center min-h-[400px] gap-4">
            {/* Spinner circular */}
            <div className="w-12 h-12 rounded-full border-4 border-gray-100 border-t-cyan-500 animate-spin"></div>

            {/* Texto sutil con efecto de latido */}
            <p className="text-sm font-medium text-gray-400 animate-pulse">
                Sincronizando mercado...
            </p>
    </div>
    )
}

export default Spinner;