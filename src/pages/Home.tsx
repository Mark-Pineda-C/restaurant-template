import { useContext } from "react"
import { ThemeContext } from "../contexts/ThemeContext"
import { AiOutlineSearch } from 'react-icons/ai'
import DishesDisplay from "../components/DishesDisplay"
import { Loader } from "../components/Loader"

const Home = () => {

  const { changeTheme } = useContext(ThemeContext)

  return (
    <div className='w-full h-full flex'>
      <div className="w-full h-full p-6">
        <div className="flex justify-between items-center">
          <div className="flex flex-col items-start dark:text-white">
            <p className="text-3xl font-bold">NoName Rest</p>
            <p className="text-sm">Domingo, 11 Dic 2022</p>
          </div>
          <div className="input">
            <AiOutlineSearch className="duration-50 my-auto w-6 h-6"/>
            <input type="text" className="outline-none bg-transparent w-full hidden sm:flex" placeholder="Buscar"/>
          </div>
        </div>
        <DishesDisplay />
        <button onClick={() => changeTheme("dark")}>set dark</button>
        <button onClick={() => changeTheme("light")}>set light</button>
        <button onClick={() => changeTheme("os")}>set os</button>
      </div>
      <div className="w-[700px] hidden lg:flex h-full bg-lightmode-item dark:bg-darkmode-item p-6 duration-150 justify-center items-center">
        <Loader />
      </div>
    </div>
  )
}

export default Home