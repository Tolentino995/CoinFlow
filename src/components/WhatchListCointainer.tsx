import { useEffect, useRef, useState} from 'react';
import type { CoinInterface } from '../interface/Coin';
import CoinsTable from './CoinsTable';
import CoinsNotFound from './CoinsNotFound';
import Spinner from "./Spinner";
import { URL_API , URL_COINS, COINGECKO_API_KEY } from '../constants/api';


const WhatchListCointainer = () => {

    const [coinList, setCoinlist] = useState<CoinInterface[]>([])
    const [coinListOriginal, setCoinListOriginal] = useState<CoinInterface[]>([])
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState<boolean>(true)
    const searchInput = useRef<HTMLInputElement>(null)

    /*  ELiminamos por que generamos una carpeta de consta
    const URL_API = import.meta.env.VITE_API_URL
*/
     useEffect (() => {
        const favorites = JSON.parse(localStorage.getItem("favorites") || "[]")

        if (favorites.length === 0) {
            setLoading(false);
            return;
        }

        fetch (`${URL_API}${URL_COINS}&x_cg_demo_api_key=${COINGECKO_API_KEY}&ids=${favorites.join(",")}`)
        .then(response => {
            if (!response.ok) throw new Error("Error en la respuesta de la red");
            return response.json();
        })
        .then(data => {
            setCoinlist(data)
            setCoinListOriginal(data)
        })
        .catch(error => {
            console.error("Error al obtener los datos", error);
            setError("Error al obtener los datos");
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
                        
                    
                     {coinList.length > 0 ? <CoinsTable coins={coinList} /> : <CoinsNotFound/>}
                        
                     </div>
                </div>
            </div>
        </>
      );
}

export default WhatchListCointainer