import React, { useEffect, useRef, useState } from 'react'
import { AiFillCaretDown } from 'react-icons/ai'

interface Option {
  name: string;
  value: number;
}

interface Props{
    options: Option[];
    itemSelected: (option: number) => void;
}

function useOutsideAlerter(ref: React.MutableRefObject<any>, secondRef:React.MutableRefObject<any>, openList: boolean, setOpenList: React.Dispatch<React.SetStateAction<boolean>>) {
    useEffect(() => {
      function handleClickOutside(event: MouseEvent) {
        if (openList && ref.current && secondRef.current && !ref.current.contains(event.target) && !secondRef.current.contains(event.target)) {
          setOpenList(false)
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref, openList]);
  }

const Select = ({options, itemSelected}: Props) => {
    const [openList, setOpenList] = useState(false)
    const [item, setItem] = useState(options[0].name)
    const wrapperRef = useRef(null)
    const selectRef = useRef(null)
    useOutsideAlerter(wrapperRef, selectRef, openList, setOpenList)
    
    const setEmit = (option: Option) => {
        itemSelected(option.value);
        setItem(option.name);
        setOpenList(false)
    }

    return (
        <div className='relative w-32'>
            <div ref={selectRef} className='input cursor-pointer' onClick={() => setOpenList(!openList)}>
                <AiFillCaretDown className={`my-auto w-3 h-3 ${openList ? 'rotate-180' : ''}`}/>
                <span className='my-auto'>{ item }</span>
            </div>
            <ul ref={wrapperRef} className={`${openList ? 'block' : 'hidden'} absolute w-full top-10 border border-lightmode-frame bg-lightmode-input dark:border-darkmode-frame dark:bg-darkmode-input dark:text-white rounded-lg`}>
                {options.map((option) => {
                    return <li key={option.value} className="p-2 cursor-pointer hover:text-blue-500 duration-100" onClick={() => setEmit(option)}>{option.name}</li>
                })}
            </ul>
        </div>
    )
}

export default Select