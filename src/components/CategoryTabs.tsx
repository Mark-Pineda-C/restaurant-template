interface Props{
  categories: string [],
  selectCategory: (category: string) => void
}
const CategoryTabs = ({categories, selectCategory}: Props) => {
  return (
    <>
      <ul className="flex gap-6 dark:text-white font-medium">
        <li>
          <input type="radio" name="category" id="default" className="hidden peer" defaultChecked onClick={() => selectCategory("default")} />
          <label htmlFor="default" className="cursor-pointer peer-checked:text-blue-600 dark:peer-checked:text-blue-500 duration-100">Todos</label>
        </li>
        {categories.map((category) => { 
          return <li key={category}>
            <input type="radio" name="category" id={`cat-${category}`} className="hidden peer" onClick={() => selectCategory(category)}/>
            <label htmlFor={`cat-${category}`} className="cursor-pointer peer-checked:text-blue-600 dark:peer-checked:text-blue-500 duration-100">{category}</label>
          </li>
          })}
      </ul>
      <hr className="title-hr"/>
      <div className="hr-decoration" style={{marginTop: "-3px"}} />
      
    </>
  )
}

export default CategoryTabs