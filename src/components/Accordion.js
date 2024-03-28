import React, { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

const Accordion = ({items}) => {
    const [expandedIndex, setExpandedIndex] = useState(-1);

    const handleClick = (nextIndex) =>{
        setExpandedIndex((current)=>{
            if(current === nextIndex){
                console.log(current)
                return -1;
            }
            else return nextIndex;
        })
    };

    const renderedItems = items.map((item,index)=>{
        const isExpanded = index === expandedIndex;
    
        return (
            <div key={item.id}>
                <div className="flex items-center justify-between p-3 bg-gray-50 border-b cursor-pointer"
                     onClick={()=>handleClick(index)}>
                    {item.label}
                    <span className="text-2xl"> 
                        {isExpanded ? <GoChevronDown/> : <GoChevronLeft/> }
                    </span>
                </div>
                {isExpanded && <div className="border-b p-5">{item.content}</div>}
            </div>
        )
    })

    return (
        <div className="border-x border-t rounded">
            {renderedItems}
        </div>
    )
}
export default Accordion;