
const data= ["Platos Calientes", "Platos Frios", "Entradas", "Sopas", "Postres", "Carnes", "Pastas"]

const CategoryTabs = () => {
  return (
    <div className="w-full mt-6">
      <ul className="flex gap-6 dark:text-white font-medium">
        <li>
          <input type="radio" name="category" id="default" className="hidden peer" defaultChecked/>
          <label htmlFor="default" className="cursor-pointer peer-checked:text-blue-600 dark:peer-checked:text-blue-500 duration-100">Todos</label>
        </li>
        {data.map((category) => { 
          return <li key={category}>
            <input type="radio" name="category" id={`cat-${category}`} className="hidden peer"/>
            <label htmlFor={`cat-${category}`} className="cursor-pointer peer-checked:text-blue-600 dark:peer-checked:text-blue-500 duration-100">{category}</label>
          </li>
          })}
      </ul>
      <hr className="title-hr"/>
      <div className="hr-decoration" style={{marginTop: "-3px"}}></div>
    </div>
  )
}

export default CategoryTabs