import './App.css'
import Product from './components/Product'

function App() {
  const items = ['porte-feuille', 'ceinture', 'autre']

  return (
    <>
      {items.map((item: string, index: number)=>{
        return <Product key={index} item = {item} />
      })}
    </>
  )
}

export default App
