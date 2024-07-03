import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'


import './styles.css'



const ProductDetail = () => {
    const context = useContext(ShoppingCartContext)

    console.log('PRODUCT is', context.productShow)
   

    return (
        <aside className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} w-[400px] h-[550px] flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className='flex justify-between items-center p-8'>
                <h2 className='font-medium text-xl'> Detail</h2>
                <button onClick={() => context.closeProductDetail(context.isProductDetailOpen)}>X</button>
            </div>
           
        </aside>
    )
}

export default ProductDetail