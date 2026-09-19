import { useEffect, useState } from "react";
import { COINGECKO_API_KEY, URL_API, URL_COINS } from "../constants/api";
import { useParams } from "react-router-dom";
import Spinner from "./Spinner";
import type { CoinInterfaceFull } from "../interface/Coin";

const CoinCointainer = () => {

    const [coin, setCoin] = useState <CoinInterfaceFull | null >(null)
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)
    const { id } = useParams ()

    useEffect (() => {
        fetch (`${URL_API}${URL_COINS}&x_cg_demo_api_key=${COINGECKO_API_KEY}&ids=${id}`)
        .then(response => response.json())
        .then(data => {
            setCoin(data[0])
        })
        .catch(error => {
            console.error("Error al obtener los datos", error);
            setError("Error al obtener los datos");
        })
        .finally(() => {
            setLoading(false)
        })
        /*porque se le pone id aca tambien */
    }, [id])

    if (loading) {
        return <Spinner/>
    }
    if (error) {
        return <div className="text-red-500 text-center py-12">{error}</div>
    }

    // Guardia de seguridad para TypeScript: Asegura que 'coin' no es null a partir de aquí
    if (!coin) return null; 

    // Funciones de ayuda (Faltaban en tu código)
    const formatCurrency = (value: number) => 
        new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 2 }).format(value);
      
    const formatNumber = (value: number) => 
        new Intl.NumberFormat('en-US', { maximumFractionDigits: 0 }).format(value);
    
    const isPositive = coin.price_change_percentage_24h >= 0;

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8 mb-6 flex flex-col md:flex-row md:items-center justify-between gap-6">
            
            <div className="flex items-center gap-4">
              <img src={coin.image} alt={coin.name} className="w-16 h-16 rounded-full shadow-sm" />
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-3xl font-bold text-gray-900">{coin.name}</h1>
                  <span className="px-2.5 py-0.5 rounded-md text-sm font-semibold bg-gray-100 text-gray-600 uppercase">
                    {coin.symbol}
                  </span>
                </div>
                <span className="inline-block mt-1 text-sm font-medium text-gray-500 bg-gray-50 px-2 py-1 rounded-md">
                  Rank #{coin.market_cap_rank}
                </span>
              </div>
            </div>
    
            <div className="flex flex-col items-start md:items-end">
              <span className="text-4xl font-extrabold text-gray-900 tracking-tight">
                {formatCurrency(coin.current_price)}
              </span>
              <div className={`flex items-center gap-2 mt-1 text-lg font-medium ${isPositive ? 'text-emerald-500' : 'text-rose-500'}`}>
                <span>{isPositive ? '▲' : '▼'}</span>
                <span>{Math.abs(coin.price_change_percentage_24h).toFixed(2)}% (24h)</span>
              </div>
            </div>
          </div>
    
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            
            <div className="bg-white rounded-xl border border-gray-100 p-5 hover:shadow-md transition-shadow duration-200">
              <p className="text-sm font-medium text-gray-500 mb-1">Cap. de Mercado</p>
              <p className="text-xl font-semibold text-gray-800">{formatCurrency(coin.market_cap)}</p>
            </div>
    
            <div className="bg-white rounded-xl border border-gray-100 p-5 hover:shadow-md transition-shadow duration-200">
              <p className="text-sm font-medium text-gray-500 mb-1">Volumen (24h)</p>
              <p className="text-xl font-semibold text-gray-800">{formatCurrency(coin.total_volume)}</p>
            </div>
    
            <div className="bg-white rounded-xl border border-gray-100 p-5 hover:shadow-md transition-shadow duration-200">
              <p className="text-sm font-medium text-gray-500 mb-1">Rango 24h (Bajo / Alto)</p>
              <div className="flex items-center gap-2">
                <span className="text-base font-medium text-gray-600">{formatCurrency(coin.low_24h)}</span>
                <div className="flex-1 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                   <div 
                     className="h-full bg-cyan-500 rounded-full" 
                     style={{ width: `${((coin.current_price - coin.low_24h) / (coin.high_24h - coin.low_24h)) * 100}%` }}
                   ></div>
                </div>
                <span className="text-base font-medium text-gray-600">{formatCurrency(coin.high_24h)}</span>
              </div>
            </div>
    
            <div className="bg-white rounded-xl border border-gray-100 p-5 hover:shadow-md transition-shadow duration-200">
              <p className="text-sm font-medium text-gray-500 mb-1">Suministro Circulante</p>
              <p className="text-xl font-semibold text-gray-800">
                {formatNumber(coin.circulating_supply)} <span className="text-sm text-gray-400 uppercase">{coin.symbol}</span>
              </p>
              {coin.max_supply && (
                <p className="text-xs text-gray-400 mt-1">Máx: {formatNumber(coin.max_supply)}</p>
              )}
            </div>
    
          </div>
        </div>
      );
}

export default CoinCointainer