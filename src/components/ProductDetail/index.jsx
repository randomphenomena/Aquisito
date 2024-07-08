import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'


import './styles.css'



const ProductDetail = () => {
    const context = useContext(ShoppingCartContext)
    console.log(context.productShow)

   

    return (
        <aside className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} w-[400px] h-[full-120px] flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className='flex justify-between items-center p-8'>
                <h2 className='font-medium text-xl'> Detail</h2>
                <button onClick={() => context.closeProductDetail(context.isProductDetailOpen)}>X</button>
            </div>

            <figure className='px-6'>
                <img className='w-auto h-32 rounded-2xl' src={context.productShow.image} alt="" />
            </figure>
            <p className='flex flex-col p-6'>
            <span className=' font-bold text-3xl'>{context.productShow.price}€ </span>
                <span className=' font-bold'>{context.productShow.title} </span>
                <span className='text-sm'>{context.productShow.description} </span>
                
            </p>
           
        </aside>
    )
}

export default ProductDetail