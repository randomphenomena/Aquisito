
const Card = () => {
    return (
        <div className="  cursor-pointer w-56 h-60 rounded-2xl">
            <figure className='relative mb-4 w-full h-3/5'>
                <span className="absolute bottom-0 left-0 bg-secondary-color/60 rounded-2xl text-white text-sm py-0.5 px-2">Best price</span>
                <img src="public/cif-1.png" alt="" className="h-full w-auto mx-auto"/>
                <button className=" absolute top-2 right-4 bg-accent w-6 h-6 rounded-full flex items-center justify-center text-white font-bold text-lg">+</button>
            </figure>
            <div className="flex justify-between text-sm bg-secondary-color py-4 px-4 rounded-b-2xl">
      <div>
        <h3 className="text-white group-hover:underline group-hover:underline-offset-4">
          CIF cream
        </h3>
  
        <p className="mt-1.5 text-pretty text-xs text-white">
          750ml
        </p>
      </div>
  
      <p className="text-accent font-semibold text-lg">$299</p>
    </div>
        </div>
    )
}

export default Card