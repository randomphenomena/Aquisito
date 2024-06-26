import { useState, useEffect } from "react"
import Card from "../../components/Card"


function Home() {
  const [items, setItems] = useState(null)

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json() )
      .then(data => setItems(data))
  }, [])
  return (
   
         items?.map(item => (
          <Card key={item.id} data={item}/>
         ))
      
    
    
  )
}

export default Home
