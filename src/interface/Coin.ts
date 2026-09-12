//Define el formato que se espera recibir en el componente
export interface CoinInterface {
    id: string;
    name: string;
    symbol: string;
    current_price: number;
    price_change_percentage_24h: number;
    image: string;
}