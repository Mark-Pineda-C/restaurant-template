import { useState } from 'react'
import CategoryTabs from './CategoryTabs'
import DishCard from './DishCard'
import Select from './Select'

const data= ["Platos Calientes", "Platos Frios", "Entradas", "Sopas", "Postres", "Carnes", "Pastas"]
const dishes = [
    {id: 1, name: "Tallarin Saltado", price: 13.45, stock: [40, 20, 15], categories: ["Platos Claientes","Pastas"]},
    {id: 2, name: "Arroz con pollo", price: 23.80, stock: [20, 32, 5], categories: ["Platos Calientes","Carnes"]},
    {id: 3, name: "Sopa a la minuta", price: 10.90, stock: [45, 0, 23], categories: ["Platos Calientes","Sopas"]},
    {id: 4, name: "Arroz con leche", price: 3.45, stock: [40, 18, 0], categories: ["Platos Frios", "Postres"]},
    {id: 5, name: "Papa a la huancaina", price: 20.50, stock: [32, 21, 3], categories: ["Platos Frios","Entradas"]},
    {id: 6, name: "Papa a la huancaina", price: 20.50, stock: [32, 21, 3], categories: ["Platos Frios","Entradas"]},
    {id: 7, name: "Papa a la huancaina", price: 20.50, stock: [32, 21, 3], categories: ["Platos Frios","Entradas"]},
    {id: 8, name: "Papa a la huancaina", price: 20.50, stock: [32, 21, 3], categories: ["Platos Frios","Entradas"]},
    {id: 9, name: "Papa a la huancaina", price: 20.50, stock: [32, 21, 3], categories: ["Platos Frios","Entradas"]},
    {id: 10, name: "Papa a la huancaina", price: 20.50, stock: [32, 21, 3], categories: ["Platos Frios","Entradas"]},
]

const DishesDisplay = () => {
    const [filteredDishes, setFilteredDishes] = useState(dishes)
    const [selectedStock, setSelectedStock] = useState(0);

    const handleSelect = (option: number) => {
        setSelectedStock(option)
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
            <Select options={[{name:"Para servir", value: 0}, {name: "Para llevar", value: 1}, {name: "Delivery", value: 2}]} itemSelected={handleSelect}/>
            </div>
            <div className='mt-14 mx-2 flex flex-wrap gap-x-4 gap-y-14 justify-start @container/dishes' id="wrapper">
                {filteredDishes.map((dish) => {
                    return(
                        <DishCard key={dish.id} name={dish.name} price={dish.price} stock={dish.stock[selectedStock]}/>
                    )
                })
                }
            </div>
        </div>
    )
}

export default DishesDisplay