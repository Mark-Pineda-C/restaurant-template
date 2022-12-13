import { useState } from 'react'
import CategoryTabs from './CategoryTabs'
import DishCard from './DishCard'
import Select from './Select'

const data= ["Platos Calientes", "Platos Frios", "Entradas", "Sopas", "Postres", "Carnes", "Pastas"]
const dishes = [
    {id: 1, name: "Tallarin Saltado", price: 13.45, stock: 40, categories: ["Platos Claientes","Pastas"]},
    {id: 2, name: "Arroz con pollo", price: 23.80, stock: 20, categories: ["Platos Calientes","Carnes"]},
    {id: 3, name: "Sopa a la minuta", price: 10.90, stock: 45, categories: ["Platos Calientes","Sopas"]},
    {id: 4, name: "Arroz con leche", price: 3.45, stock: 40, categories: ["Platos Frios", "Postres"]},
    {id: 5, name: "Papa a la huancaina", price: 20.50, stock: 32, categories: ["Platos Frios","Entradas"]},
]

const DishesDisplay = () => {
    const [filteredDishes, setFilteredDishes] = useState(dishes)

    const handleSelect = (option: string) => {
        console.log(option)
    }
    
    const handleCategory = (category: string) => {
        setFilteredDishes(() => {
            if(category === "default") return dishes;
            return dishes.filter((dish) => dish.categories.includes(category));
        })
    }

    return (
        <div className="w-full mt-6">
            <CategoryTabs categories={data} selectCategory={handleCategory} />
            <div className="flex justify-between items-center">
            <div className="flex flex-col items-start dark:text-white font-bold text-3xl duration-150">
                Elegir Platos
            </div>
            <Select options={["Para servir", "Para llevar", "Delivery"]} itemSelected={handleSelect}/>
            </div>
            <div className='mt-14 mx-2 flex flex-wrap gap-x-4 gap-y-14 justify-around'>
                {filteredDishes.map((dish) => {
                    return(
                        <DishCard key={dish.id} name={dish.name} price={dish.price} stock={dish.stock}/>
                    )
                })
                }
            </div>
        </div>
    )
}

export default DishesDisplay