import type { CoinInterface } from '../interface/Coin';

const coins: CoinInterface[] = [
    {order: 1, name: 'Bitcoin', symbol: 'BTC', price: 100000, priceChange: 10, code: 'USD'},
    {order: 2, name: 'Ethereum', symbol: 'ETH', price: 10000, priceChange: 10, code: 'USD'},
    {order: 3, name: 'Litecoin', symbol: 'LTC', price: 1000, priceChange: 10, code: 'USD'},
    {order: 4, name: 'Ripple', symbol: 'XRP', price: 100, priceChange: 10, code: 'USD'},
    {order: 5, name: 'Bitcoin Cash', symbol: 'BCH', price: 10000, priceChange: 10, code: 'USD'},
];

export default coins;