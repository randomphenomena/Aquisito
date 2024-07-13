import { createContext, useState } from "react"
import CheckOutSide from "../components/CheckOutSide"

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

    // Product detail  . Show product
    const [cartProducts, setCartProducts] = useState([])

     // Open . close card - Checkout
     const [isCheckOutSideOpen, setisCheckOutSideOpen] = useState(false)
     const openCheckOutSide = () => setisCheckOutSideOpen(true)
     const closeCheckOutSide = () => setisCheckOutSideOpen(false)

    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productShow,
            setProductShow,
            cartProducts,
            setCartProducts,
            openCheckOutSide,
            closeCheckOutSide,
            isCheckOutSideOpen,
            

        }}> 
            {children}
        </ShoppingCartContext.Provider>
    )
}

export default ShoppingCartProvider 