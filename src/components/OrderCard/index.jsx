const OrderCard = props => {
    const { id, title, image, price} = props

    return (
        <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
                <figure className='h-20 w-20'>
                    <img className="h-full w-auto rounded-lg object-cover" src={image} alt={title} />
                </figure>
                <p className='text-sm font-light'>{title}</p>
            </div>

            <div className="flex items-center gap-2">
                <p className='text-lg font-medium'>{price}</p>
                <button>X</button>

            </div>

        </div>
    )
}

export default OrderCard