import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./components/Layout"
import NotFound from "./components/NotFound"
import CoinsCointainer from "./components/CoinsCointainer"

const App = () => {

  /*BrowserRouter manejador de rutas */

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<CoinsCointainer />} />
        <Route path="*" element={<NotFound />}/>
        </Route>
      </Routes>
    </BrowserRouter>

  )
  
}

export default App


