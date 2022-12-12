
const data= ["Platos Calientes", "Platos Frios", "Entradas", "Sopas", "Postres", "Carnes"]

const CategoryTabs = () => {
  return (
    <div className="w-full mt-4">
      <ul className="flex gap-2 dark:text-white font-medium">
        {data.map((category) => { 
          return <li key={category}>{category}</li>
          })}
      </ul>
      <hr className="title-hr"/>
    </div>
  )
}

export default CategoryTabs