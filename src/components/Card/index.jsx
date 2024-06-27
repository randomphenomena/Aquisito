import { useContext } from "react"
import { ShoppingCartContext } from "../../Context";



const getFirstFourWords = (text) => {
  return text.split(" ").slice(0, 3).join(" ");
};


const Card = (data) => {
  const context = useContext(ShoppingCartContext)
  
    return (
        <div 
        className="  cursor-pointer w-56 h-60 rounded-2xl mb-12"
        onClick={() => context.openProductDetail()}>
            <figure className='relative mb-4 w-full h-3/5'>
                <span className="absolute bottom-0 left-0 bg-secondary-color/60 object-cover rounded-2xl text-white text-sm py-0.5 px-2">{data.data.category}</span>
                <img src={data.data.image} alt="" className="w-auto h-full mx-auto"/>
                <button 
                onClick={() => context.setCount(context.count + 1)}
                className=" absolute top-2 right-4 bg-accent w-6 h-6 rounded-full flex items-center justify-center text-white font-bold text-lg">+</button>
            </figure>
            <div className="flex justify-between text-sm bg-secondary-color py-4 px-4 rounded-b-2xl">
      <div>
        <h3 className="text-white group-hover:underline group-hover:underline-offset-4">
          {getFirstFourWords(data.data.title)}
        </h3>

      </div>
  
      <p className="text-accent font-semibold text-lg">{data.data.price}€</p>
    </div>
        </div>
    )
  }
export default Card