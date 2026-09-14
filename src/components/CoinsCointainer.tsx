import { useEffect, useRef, useState} from 'react';
import type { CoinInterface } from '../interface/Coin';
import CoinsTable from './CoinsTable';
import CoinsNotFoud from './CoinsNotFoud';
import Spinner from "./Spinner";


const CoinsCointainer = () => {

    const [coinList, setCoinlist] = useState<CoinInterface[]>([])
    const [coinListOriginal, setCoinListOriginal] = useState<CoinInterface[]>([])
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState<boolean>(true)
    const searchInput = useRef<HTMLInputElement>(null)

     useEffect (() => {
        fetch ("://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=markehttpst_cap_desc&per_page=100&page=1&sparkline=false")
        .then(response => response.json())
        .then(data => {
            setCoinlist(data)
            setCoinListOriginal(data)
        })
        .catch(error => {
            console.error("Error al obtener los datos",error),
            setError("Error al obtener los datos")
        })
            /*Finaliza luego con cualquiera de las dos respuesta con setLoading false */
        .finally(() => {
            setLoading(false)
        })
    }, [])

    const handleSearch = () => {
        const searchValue = searchInput.current?.value || ''
        const newCoinsList = coinListOriginal.filter(coin => coin.name.toLowerCase().includes(searchValue.toLowerCase()))
        setCoinlist(newCoinsList);
    }

    if (loading) {
        return <Spinner/>
    }

    if (error) {
        return <div className="text-red-500 text-center py-12">{error}</div>
    }

    return (
        <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
                
                {/* Barra de Búsqueda Minimalista */}
                <div className="flex justify-between items-center">
                    <input 
                        type="text" 
                        placeholder="Buscar criptomoneda..." 
                        ref={searchInput} 
                        onChange={handleSearch}
                        className="w-full max-w-sm px-5 py-2.5 text-sm text-gray-700 bg-gray-50 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 transition-all duration-200"
                    />
                </div>

                {/* Contenedor de la Tabla */}
                <div className="bg-white rounded-2xl border border-gray-200     shadow-sm overflow-hidden">
                    <div className="overflow-x-auto">
                        
                    
                     {coinList.length > 0 ? <CoinsTable coins={coinList} /> : <CoinsNotFoud/>}
                        
                     </div>
                </div>
            </div>
        </>
      );
}

export default CoinsCointainer