import React, { useEffect, useRef, useState } from "react";
import { GoChevronDown } from "react-icons/go";

const Dropdown = ({options, value, onChange}) => {
    const [isOpen, setIsOpen] = useState(false);
    const divEl = useRef();

    useEffect(()=>{
        const handler = (event) =>{
            if(!divEl.current){
                return;
            }
            if(!divEl.current.contains(event.target)){
                setIsOpen(false);
            };
        }
        document.addEventListener('click', handler, true);
        return () => {
            document.removeEventListener('click', handler);
        }
    }, [])

    const handleClick = () =>{
        setIsOpen((current)=> !current);
    }

    const handleSelection = (option) => {
        setIsOpen(false);
        onChange(option);
    }

    const renderedOptions = options.map((option)=>{
        return (
            <div className="hover:bg-sky-100 p-1 rounded cursor-pointer" key={option.value} onClick={() => handleSelection(option)}>
                {option.label}
            </div>
        )
    })

    return (
        <div ref={divEl} className="w-48 relative">
            <div className="flex justify-between items-center cursor-pointer border rounded p-3 shadow bg-white w-full" onClick={handleClick}>
                {value?.label || 'Select...' }
                <GoChevronDown className="text-lg"/>
            </div>
            {isOpen && <div className="absolute top-full border rounded p-3 shadow bg-white w-full">{renderedOptions}</div>}
        </div>
    )
}
export default Dropdown;