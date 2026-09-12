import Header from './components/Header';
import CoinsCointainer from './components/CoinsCointainer';

const App = () => {

  return (
    <>
      <Header />
      <main className='container mx-auto py-8'>
        <h1>Lista de Criptomoneda</h1>
        <div className='coins-list'>
          <CoinsCointainer />
        </div>
      </main>
      
      
    </>

  )
  
}

export default App


