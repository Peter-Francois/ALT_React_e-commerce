import './App.css'
import Product from './components/Product'
import products from './data/products'
import type ProductInterface from './interfaces/product'



function App() {
  const items: ProductInterface[] = products

  return (
    <>
      {items.map((item: ProductInterface, index: number)=>{
        return <Product key={index} productData={item} />
      })}
    </>
  )
}

export default App
