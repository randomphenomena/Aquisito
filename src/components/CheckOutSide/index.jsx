import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import OrderCard from '../../components/OrderCard'


import './styles.css'



const CheckOutSide = () => {
    const context = useContext(ShoppingCartContext)
    console.log(context.cartProducts)

   

    return (
        <aside className={`${context.isCheckOutSideOpen ? 'flex' : 'hidden'} w-[400px] h-[full-120px] flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className='flex justify-between items-center p-8'>
                <h2 className='font-medium text-xl'>My Order</h2>
                <button onClick={() => context.closeCheckOutSide(context.isCheckOutSideOpen)}>X</button>
            </div>

            {
                context.cartProducts.map(product => (
                    <OrderCard 
                    key={product.id}
                    title={product.title}
                    imageURL={product.image}
                    price={product.price}
                    />
                ))
            }
        </aside>
    )
}

export default CheckOutSide