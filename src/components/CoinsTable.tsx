import type { CoinInterface } from '../interface/Coin';
import Coin from './Coin';


const CoinsTable = ({coins} : {coins : CoinInterface[]}) => {
    return (
        <table className="w-full text-left border-collapse min-w-[800px]">
                            <thead>
                                <tr className="bg-gray-50/50 border-b border-gray-100"> 
                                    <th className="py-4 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Orden</th>
                                    <th className="py-4 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Nombre</th>
                                    <th className="py-4 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Símbolo</th>
                                    <th className="py-4 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Precio</th>
                                    <th className="py-4 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Cambio 24h</th>
                                    <th className="py-4 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Red</th>
                                    <th className="py-4 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider text-right">Acción</th>
                                </tr>
                            </thead>
                            <tbody>
                                {coins.map(coin => (
                                    <Coin
                                        key={coin.id}
                                        id={coin.id}
                                        name={coin.name} 
                                        symbol={coin.symbol} 
                                        current_price={coin.current_price} 
                                        price_change_percentage_24h={coin.price_change_percentage_24h} 
                                        image={coin.image}
                                    />
                                ))}
                            </tbody>
                        </table>
    )
}

export default CoinsTable