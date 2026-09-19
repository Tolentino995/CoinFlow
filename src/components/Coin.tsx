import { useState } from 'react';
import type { CoinInterface } from '../interface/Coin';
import { Link } from 'react-router-dom';

// Component for the coin list
// Props: order, name, symbol, price, priceChange, code
const Coin = ({id, name, symbol, current_price, price_change_percentage_24h, image}: CoinInterface) => {

    const [isFavorite, setIsFavorite]= useState<boolean>(false)

    const isPositive = (price_change_percentage_24h ?? 0) >= 0;

    const handleFavortes = () => {
        setIsFavorite(!isFavorite)
    }

    return (
    <tr className="border-b border-gray-100 hover:bg-gray-50/80 transition-colors duration-200">
      {/* Orden */}
      <td className="py-4 px-4 text-sm font-medium text-gray-400">
        {id}
      </td>
      
      {/* Nombre de la moneda */}
      <td className="py-4 px-4">
        <span className="text-base font-semibold text-gray-900">{name}</span>
      </td>
      
      {/* Símbolo */}
      <td className="py-4 px-4">
        <Link to={`/coin/${id}`}>
          <img src={image} alt={symbol} className='w-10 h-10 rounded-full' />
          <span className="text-sm font-medium text-gray-500 uppercase">{symbol}</span>
        </Link>
      </td>
      
      {/* Precio */}
      <td className="py-4 px-4 text-base font-medium text-gray-800">
        {current_price}
      </td>
      
      {/* Cambio de Precio (Verde si sube, Rojo/Gris si baja) */}
      <td className="py-4 px-4">
        <span className={`text-sm font-medium ${isPositive ? 'text-green-500' : 'text-rose-500'}`}>
          {isPositive ? '+' : ''}{price_change_percentage_24h?.toFixed(2)}%
        </span>
      </td>
      
      {/* Código (Como una pequeña etiqueta visual) */}
      <td className="py-4 px-4">
        <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-600">
          {symbol}
        </span>
      </td>
      
      {/* Botón de Favoritos (Sin iconos, estilo minimalista) */}
      <td className="py-4 px-4 text-right">
        <button 
          onClick={handleFavortes}
          className={`px-4 py-1.5 text-xs font-medium rounded-full transition-all duration-200 border ${
            isFavorite 
              ? "bg-cyan-50 border-cyan-200 text-cyan-700 hover:bg-cyan-100" // Estado Activo (Armonía con el header)
              : "bg-white border-gray-200 text-gray-500 hover:bg-gray-100 hover:text-gray-800" // Estado Inactivo
          }`}
        >
          {isFavorite ? "Quitar de favoritos" : "Agregar a favoritos"}
        </button>
      </td>
    </tr>
    )
};



//Export the component
export default Coin;