import { useState, useEffect } from "react"
import Card from "../../components/Card"
import ProductDetail from "../../components/ProductDetail"


function Home() {
  const [items, setItems] = useState(null)

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json() )
      .then(data => setItems(data))
  }, [])
  
  return (
    <>
   <div className="grid gap-4 md:grid-cols-4 grid-cols-2 w-full max-w-screen-lg">
    {
    items?.map(item => (
      <Card key={item.id} data={item}/>
    ))
    }
   </div>
         
    
    <ProductDetail></ProductDetail>
    
    </> 
  )
  
}

export default Home
