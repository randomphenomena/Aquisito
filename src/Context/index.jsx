import { createContext, useState } from "react"

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({children}) => {

    // Shopping cart - count
    const [count, setCount] = useState(0)

    // Open . close card
    const [isProductDetailOpen, setisProductDetailOpen] = useState(false)
    const openProductDetail = () => setisProductDetailOpen(true)
    const closeProductDetail = () => setisProductDetailOpen(false)

    // Product detail  . Show product
    const [productShow, setProductShow] = useState({

        title: "",
        image: "",
        description: "",
        price: "",
    })

    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productShow,
            setProductShow
        }}> 
            {children}
        </ShoppingCartContext.Provider>
    )
}

export default ShoppingCartProvider 