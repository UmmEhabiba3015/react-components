import { GoTriangleDown, GoTriangleUp   } from "react-icons/go";
import Table from "./Table";
import useSort from "../hooks/useSort";

function SortabTable (props) {
    const { config, data } = props ;
    const { sortBy, sortOrder, sortedData, handleClick } = useSort(data, config);
   
    const updatedConfig = config.map((column)=> {
        if(!column.sortValue){
            return column;
        }
        else return { 
            ...column, 
            header : ()=> <th className="cursor-pointer hover:bg-gray-100" onClick={()=>handleClick(column.label)}>
                    <div className="flex items-center">
                        {getIcons(sortBy, sortOrder, column.label)}
                        {column.label}
                    </div>
                </th>}
    })

    return  <Table {...props} data={sortedData} config={updatedConfig}/>
}

function getIcons (sortBy, sortOrder, label) {
    if( label !== sortBy) {
        return <div>
            <GoTriangleUp/>
            <GoTriangleDown/>
        </div>
    }

    if(sortOrder === null) {

    } else if(sortOrder === 'asc') {
        return <div>
                <GoTriangleUp/>
            </div> 

    } if(sortOrder === 'desc') {
        return <div>
                <GoTriangleDown/>
            </div> 
    }  

}
export default SortabTable