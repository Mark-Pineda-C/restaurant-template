import React from 'react'

interface Props{
    name: string;
    price: number;
    stock: number;
}

const DishCard = ({name, price, stock}: Props) => {
  return (
    <div className='@container rounded-lg bg-lightmode-item dark:bg-darkmode-item shadow-lg dark:shadow-none flex-grow dark:text-white min-w-[10.5rem] w-40 py-4 px-6 duration-150'>
        <div className='flex flex-col items-center justify-between @[250px]:flex-row @[250px]:justify-start @[250px]:gap-5'>
            <img src="" className='w-32 h-32 rounded-lg bg-slate-500 -mt-12 mb-4 duration-150 @[250px]:m-0 @[250px]:w-1/2 @[500px]:w-1/3' alt="dish" />
            <div className='flex flex-col items-center justify-between @[250px]:items-start'>
                <p className="text-center max-w-[100px] leading-4 @[250px]:text-start @[250px]:max-w-none">{name}</p>
                <p className='dark:text-slate-250 text-slate-700 mt-1 duration-150'>$ {price}</p>
                <p className={`${!stock ? 'dark:text-red-250 text-red-700': 'dark:text-slate-250 text-slate-700'} duration-150`}>{stock ? `${stock} platos disponibles` : 'Sin platos disponibles'}</p>
            </div>
        </div>
    </div>
  )
}

export default DishCard