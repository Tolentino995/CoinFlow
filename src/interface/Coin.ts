//Define el formato que se espera recibir en el componente
export interface CoinInterface {
    id: string;
    name: string;
    symbol: string;
    current_price: number;
    price_change_percentage_24h: number;
    image: string;
}

export interface CoinInterfaceFull {
    id: string;
    symbol: string;
    name: string;
    image: string;
    current_price: number;
    market_cap: number;
    market_cap_rank: number;
    total_volume: number;
    high_24h: number;
    low_24h: number;
    price_change_percentage_24h: number;
    circulating_supply: number;
    max_supply: number | null;
    ath: number;
  
  }