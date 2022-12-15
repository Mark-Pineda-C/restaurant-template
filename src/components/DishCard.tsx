import React from 'react'

interface Props{
    name: string;
    price: number;
    stock: number;
}

const DishCard = ({name, price, stock}: Props) => {
  return (
    <div className='rounded-lg bg-lightmode-item dark:bg-darkmode-item shadow-lg dark:shadow-none flex flex-col items-center justify-between dark:text-white w-fit py-4 px-6 duration-150'>
        <img src="" className='w-32 h-32 rounded-lg bg-slate-500 -mt-12 mb-4' alt="dish" />
        <p style={{maxWidth: "100px"}} className="text-center leading-4">{name}</p>
        <p className='dark:text-slate-300 text-slate-700 mt-1 duration-150'>$ {price}</p>
        <p className={`${!stock ? 'dark:text-red-300 text-red-700': 'dark:text-slate-300 text-slate-700'} duration-150`}>{stock ? `${stock} platos disponibles` : 'Sin platos disponibles'}</p>
    </div>
  )
}

export default DishCard