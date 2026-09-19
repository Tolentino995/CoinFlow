import { useEffect, useState } from "react";
import { COINGECKO_API_KEY, URL_API, URL_COINS } from "../constants/api";
import { useParams } from "react-router-dom";
import Spinner from "./Spinner";

const CoinCointainer = () => {

    const [coin, setCoin] = useState(null)
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

    return (
        <div>
            <p>{JSON.stringify(coin)}</p>

        </div>
    )
}

export default CoinCointainer