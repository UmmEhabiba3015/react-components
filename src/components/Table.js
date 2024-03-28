import { Fragment } from "react";
function Table ({ data, config, keyFn }) {

    const renderedHeader = config.map((column)=>{
        if (column.header) {
            return <Fragment key={column.label}>{column.header()}</Fragment>
        }
        else return <th className="border-b-2" key={column.label}> {column.label}</th>
    })

    const renderedRows = data.map((rowData)=> {
        const renderedCells = config.map((column)=>{
            return <td key={column.label} className="p-2">{column.render(rowData)}</td>
        });
        return (
            <tr className="border-b" key={keyFn(rowData)}>
                {renderedCells}
            </tr>
        )
    })
    return (
        <table className="table-auto border-spacing-2">
            <thead>
                <tr className="border-b-2">
                    {renderedHeader}
                </tr>
            </thead>
            <tbody>
                {renderedRows}
            </tbody>
        </table>
    )
}
export default Table;