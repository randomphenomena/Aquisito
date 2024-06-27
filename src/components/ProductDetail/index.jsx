import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'


import './styles.css'



const ProductDetail = () => {
    const context = useContext(ShoppingCartContext)
    return (
        <aside className={`${isProductDetailOpen ? 'flex' : 'hidden'}product-detail flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className='flex justify-between items-center p-8'>
                <h2 className='font-medium text-xl'> Detail</h2>
                <button>X</button>
            </div>
        </aside>
    )
}

export default ProductDetail